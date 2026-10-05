(() => {
  const root = document.documentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  root.classList.add('js');

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
  const pauseBackground = () => {
    document.querySelectorAll('.color-flow').forEach((layer) => {
      layer.style.animationPlayState = document.hidden ? 'paused' : 'running';
    });
  };
  document.addEventListener('visibilitychange', pauseBackground);
  pauseBackground();

  // 外部画像が読めなくても、作品名、紹介、掲載元へのリンクを残す。
  document.querySelectorAll('.game-art img').forEach((img) => {
    const unavailable = () => img.closest('.game-art').classList.add('image-unavailable');
    img.addEventListener('error', unavailable, { once: true });
    if (img.complete && img.naturalWidth === 0) unavailable();
  });
})();
