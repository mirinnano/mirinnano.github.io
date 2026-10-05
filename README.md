# こてっちゃんの Profile & About me

公開 URL: https://mirinnano.github.io/

プロフィールと好きな作品を中心にした、GitHub Pages 向けの静的サイトです。
表示名は「こてっちゃん」、GitHub は `mirinnano`、X は `102502` です。

## ローカル確認

```sh
python3 -m http.server 8765
node --check assets/main.js
```

ブラウザで http://localhost:8765/ を開きます。
ビルドやパッケージのインストールは不要です。

## 構成

- `index.html`: プロフィール、Favorites、Works、Log、Stack
- `assets/style.css`: 明るいオレンジの色の流れ、アニメーション、レスポンシブ表示
- `assets/grain.svg`: 背景に重ねる薄い粒子の質感
- `assets/main.js`: タブ操作、スクロール表示、公開プロジェクトの更新情報
- `404.html`: エラーページ

GitHub API の取得が失敗した場合、更新欄には HTML の情報を表示します。
画像は GitHub の公開アバターを参照しています。
JavaScript が無効でもプロフィールと Favorites を読めます。

## 更新時の確認

- 小さい画面で表示名とリンクがはみ出さないこと
- タブのクリックと矢印キーで、該当する本文だけが表示されること
- 動きを減らす設定で、本文が隠れずアニメーションが止まること
- API が使えなくても、プロフィールと作品紹介を読めること
- 404 ページからトップへ戻れること

紹介文の根拠は、本人の発言、公開リポジトリ、各作品の紹介ページです。
ゲームにはネタバレを避けた概要と作品情報へのリンクを置いています。

## 独自ドメイン

取得後、リポジトリの Settings → Pages → Custom domain と DNS を設定します。
現在は独自ドメインを設定していません。
