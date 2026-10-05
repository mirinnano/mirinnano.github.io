# こてっちゃんの Profile & About me

公開 URL: https://mirinnano.github.io/

人物紹介と好きな作品を中心にした、GitHub Pages 向けの静的サイトです。
表示名は「こてっちゃん」、GitHub は `mirinnano`、X は `102502` です。
自己紹介は「エロゲと投資が好きです。」に限定しています。

## ローカル確認

```sh
python3 -m http.server 8765
node --check assets/main.js
```

ブラウザで http://localhost:8765/ を開きます。
ビルドやパッケージのインストールは不要です。

## 構成

- `index.html`: プロフィール、趣味（ゲーム、クリエイター、音楽、投資、旅行）、技能（言語、環境、制作物）
- `assets/style.css`: 動く色の背景、作品ごとの余白と文字組み、レスポンシブ表示
- `assets/grain.svg`: 背景の薄い粒子の質感
- `assets/icons/`: GitHub と X のロゴ
- `assets/main.js`: 背景のポインター追従、非表示タブでの停止、画像取得失敗時の案内
- `404.html`: エラーページ

ナビバー、切り替えタブ、フッターは置いていません。
JavaScript が無効でも、趣味と技能を含む本文をすべて読めます。
外部 API から本文を取得する処理はありません。

## 背景の色

Summer Pockets 初回限定版の公式ジャケットイラストの画面画像から、青空、草地、雲の代表色を抽出しています。
背景には `#3e7cf0`、`#99e55a`、`#effcfd` と同じ画像の淡い青、黄緑を使い、透明度と白い光の流れで本文の読みやすさを保っています。

## 作品紹介と画像

紹介は公式サイトの短い原文引用です。
引用は作品を表す言葉として見せ、説明的な前置きは置きません。
各作品の下に出典を記載しています。
サナララは旧公式サイトに接続できないため、本人の了承を得て Getchu のメーカー紹介文を使用しています。
サナララの販売店画像は外部参照が拒否されたため、了承を得て Bangumi の同作品のジャケット画像を使用しています。

画像はジャケット、パッケージイラスト、またはそれに近い公式メインビジュアルです。
素晴らしき日々は本人指定の15周年ジャケットを掲載し、10周年版は掲載しません。
外部の掲載元を直接参照し、トリミングせずに表示します。
画像と紹介文の権利は各権利者に帰属します。
権利者表記と掲載元リンクは各作品の近くに置いています。
掲載元による変更や外部参照の制限がある場合、画像は表示できないことがあります。
権利者から掲載停止の連絡があった場合は、対象画像または引用を削除してください。

| 作品 | 紹介の出典 | 画像の掲載元 |
| --- | --- | --- |
| サナララ | [メーカー紹介（Getchu）](https://www.getchu.com/item/159741/) | [ジャケット（Bangumi）](https://bgm.tv/subject/6233) |
| リトルバスターズ！ | [公式ライセンス商品ページのコピー](https://www.super-groupies.com/feature/litbus_02_watch) | [通常版の公式ビジュアル](https://key.visualarts.gr.jp/product/little/site/index.htm) |
| Narcissu | [公式紹介](https://stage-nana.sakura.ne.jp/game.htm) | [公式メインビジュアル](https://stage-nana.sakura.ne.jp/narcissu.htm) |
| Summer Pockets | [公式サイト](https://key.visualarts.gr.jp/summer/index.html) | [初回限定版ジャケットイラスト](https://key.visualarts.gr.jp/summer/spec.html) |
| 素晴らしき日々 | [公式キャンペーン](https://www.keroq.co.jp/suba/campaign.html) | [15周年版公式サイト](https://www.keroq.co.jp/suba15th/index.html)、[本人指定の15周年ジャケット画像（Amazon）](https://m.media-amazon.com/images/I/71dlfhyxUrL._AC_UF1000,1000_QL80_.jpg) |
| 家族計画 | [心の絆版公式紹介](https://www.gungho.jp/cgame/game/kazoku/index.html) | [心の絆版ジャケット（MediaWorld）](https://mediaworld.co.jp/products/10401994001) |
| AIR | [公式ストーリー](https://key.visualarts.gr.jp/product/air/story/) | [メモリアルエディションの公式パッケージビジュアル](https://key.visualarts.gr.jp/product/air/) |

音楽欄のエレキギターと MintJam、麻枝准、投資欄の BNF、旅行の趣味は本人の発言に基づきます。
リトルバスターズ！は本人指定の「――この青春（イマ）を駆け抜けろ。」を掲載し、「イマ」をルビで表示しています。

クリエイターはシナリオ、音楽、デザインに分類しています。
複数分野で活動している方は重複して掲載しています。
分類の根拠は [サナララのスタッフ欄](https://www.getchu.com/item/159741/)、[Rewrite のスタッフ欄](https://key.visualarts.gr.jp/rewrite/)、[Summer Pockets](https://key.visualarts.gr.jp/summer/spec.html)、[俺たちに翼はない](https://project-navel.com/oretsuba/products.html)、[藤間仁の公式プロフィール](https://www.ariamusic.co.jp/creators/fujima.php)、[木緒なちのインタビュー](https://www.osaka-geidai.ac.jp/interviews/kionachi) です。
技能欄は公開リポジトリで確認した言語と環境を掲載し、熟練度や投資実績は補っていません。

ロゴの出典: [GitHub 公式ブランド素材](https://brand.github.com/foundations/logo)、[Simple Icons の X ロゴ](https://github.com/simple-icons/simple-icons/blob/develop/icons/x.svg)。
GitHub ロゴは配布された黒色の素材を使用しています。
Simple Icons の素材は CC0 です。

## 更新時の確認

- デスクトップ、390px、320px 幅で、表示名、引用、作品画像がはみ出さないこと
- SNS アイコンにリンク名があり、キーボードで移動できること
- スクロールして、画像が実際に読み込まれること
- 画像が使えなくても、作品名、引用、掲載元へのリンクが残ること
- 動きを減らす設定でアニメーションが止まること
- 非表示タブでは背景アニメーションが停止すること
- 404 ページからトップへ戻れること

## 独自ドメイン

取得後、リポジトリの Settings → Pages → Custom domain と DNS を設定します。
現在は独自ドメインを設定していません。
