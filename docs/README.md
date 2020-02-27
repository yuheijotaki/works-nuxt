# Nuxt.js + WordPress のポートフォリオサイト



## 使用している技術

- Nuxt.js（フロントエンド）
- WordPress（CMS）
  - JAMstack Deployments（Netlifyへの自動デプロイプラグイン）
- WordPress REST API（API）
- GitHub（Gitリポジトリ）
- Netlify（ホスティングサーバー）



## 構成




## ディレクトリ構成

```
/
└ nuxt.config.js（Nuxt.js設定）
└ /dist/（配信コンテンツ）
└ /src/
|   └ /static/（静的コンテンツ）
|   |   └ /assets/
|   |       └ /img/
|   └ /assets/（コンパイル用コンテンツ）
|   |   └ /scss/
|   |   └ /font/
|   └ /layouts/（共通レイアウトテンプレート）
|   |   └ default.vue
|   └ /pages/（ページテンプレート）
|   |   └ index.vue
|   |   └ /work/
|   |       └ _slug.vue
|   └ /components/（コンポーネント）
|       └ Logo.vue
|       └ Search.vue
|       └ SingleCapture.vue
|       └ WorksItem.vue
|       └ WorksList.vue
└       └ WorksSingle.vue
```
