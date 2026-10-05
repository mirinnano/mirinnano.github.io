(() => {
  const root = document.documentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.add('js');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // 背景だけをわずかに動かし、文字の位置は保つ。
  if (matchMedia('(pointer: fine)').matches) {
    const light = document.querySelector('.light-field');
    addEventListener('pointermove', (event) => {
      if (!light || motion.matches) return;
      light.style.setProperty('--light-x', `${(event.clientX / innerWidth - .5) * 18}px`);
      light.style.setProperty('--light-y', `${(event.clientY / innerHeight - .5) * 14}px`);
    }, { passive: true });
    motion.addEventListener('change', () => {
      light?.style.removeProperty('--light-x');
      light?.style.removeProperty('--light-y');
    });
  }
  document.addEventListener('visibilitychange', () => {
    document.querySelectorAll('.color-flow').forEach((layer) => {
      layer.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
  });

  // 読み始めた位置で本文を表示する。
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .05 });
    document.querySelectorAll('.about, .work').forEach((element) => {
      element.classList.add('pending');
      observer.observe(element);
    });
  }

  // タブはクリックとキーボードの両方で操作できる。
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const ink = document.querySelector('.tab-ink');
  if (tabs.length && ink) {
    const moveInk = (tab) => {
      ink.style.width = `${tab.offsetWidth}px`;
      ink.style.transform = `translateX(${tab.offsetLeft}px)`;
    };
    const selected = () => tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
    const select = (tab, focus = false) => {
      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute('aria-selected', String(active));
        item.tabIndex = active ? 0 : -1;
        document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
      });
      moveInk(tab);
      if (focus) tab.focus();
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (event) => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          select(tabs[next], true);
        }
      });
    });
    moveInk(selected());
    addEventListener('resize', () => moveInk(selected()));
    document.fonts?.ready.then(() => moveInk(selected()));
  }

  // 最近の公開プロジェクトを表示する。取得できなければ HTML の日付を保つ。
  const status = document.getElementById('status');
  if (!status) return;
  const titles = {
    'aria-engine-rust': 'Aria Engine',
    guitar: 'Guitar Tools',
    'pi-herdr-orchestrator': 'Pi Herdr Orchestrator',
    'pi-field-console': 'Pi Field Console',
    dotfiles: 'dotfiles',
  };
  const excluded = new Set(['mirinnano.github.io', 'mirinnano']);
  const dateFormat = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo',
  });
  const relative = (date) => {
    const days = Math.floor((Date.now() - date) / 86400000);
    if (days < 0) return dateFormat.format(date);
    if (days === 0) return '今日';
    if (days === 1) return '昨日';
    if (days < 7) return `${days} 日前`;
    return dateFormat.format(date);
  };
  fetch('https://api.github.com/users/mirinnano/repos?sort=pushed&per_page=30', {
    signal: AbortSignal.timeout(6000),
  }).then((response) => response.ok ? response.json() : null).then((repos) => {
    if (!Array.isArray(repos)) return;
    const repo = repos.find((item) => !item.fork && !excluded.has(item.name) && item.pushed_at);
    if (!repo) return;
    const date = new Date(repo.pushed_at);
    if (!Number.isFinite(+date)) return;
    document.getElementById('status-text').textContent = titles[repo.name] || repo.name;
    status.href = `https://github.com/mirinnano/${encodeURIComponent(repo.name)}`;
    const time = document.getElementById('status-time');
    time.dateTime = repo.pushed_at;
    time.textContent = relative(date);
    time.title = dateFormat.format(date);
  }).catch(() => {});
})();
