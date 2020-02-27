# Nuxt.js + WordPress のポートフォリオサイト



## 使用サービス・技術

- [Nuxt.js](https://ja.nuxtjs.org/)（フロントエンド）
- [WordPress](https://ja.wordpress.org/)（CMS）
  - [JAMstack Deployments](https://ja.wordpress.org/plugins/wp-jamstack-deployments/)（Netlifyへの自動デプロイプラグイン）
- [WP REST API](https://ja.wp-api.org/)（API）
- [GitHub](https://github.com/yuheijotaki/works-nuxt)（Gitリポジトリ）
- [Netlify](https://www.netlify.com/)（ホスティングサーバー）



## 使用モジュール

- [axios](https://github.com/axios/axios)（API連携）
- [pug-loader](https://github.com/pugjs/pug-loader)（HTMLテンプレートエンジン）
- [ress](https://github.com/filipelinhares/ress)（リセットCSS）
- [style-resources-module](https://github.com/nuxt-community/style-resources-module)（.scss使用）
- [dotenv-module](https://github.com/nuxt-community/dotenv-module)（環境変数）
- [analytics-module](https://github.com/nuxt-community/analytics-module)（Google Analytics）
- [sitemap-module](https://github.com/nuxt-community/sitemap-module)（sitemap.xml）



## 構成

![構成](https://raw.githubusercontent.com/yuheijotaki/works-nuxt/master/docs/img/service.png)



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
