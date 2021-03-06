# Nuxt.js + WordPress のポートフォリオサイト

- [概要](#概要)
- [URL](#URL)
- [構成](#構成)
- [使用サービス・技術](#使用サービス・技術)
- [使用モジュール](#使用モジュール)
- [ディレクトリ構成](#ディレクトリ構成)
- [コマンド](#コマンド)
- [ステータス](#ステータス)
- [ブログ](#ブログ)



<a name="概要"></a>
## 概要

ポートフォリオサイトをNuxt.js と WordPress（WP REST API）を使用して再構築しました。



<a name="URL"></a>
## URL

- フロントエンド：
[https://works.yuheijotaki.dev/](https://works.yuheijotaki.dev/)
- バックエンド（CMS）：
[https://works-wp.yuheijotaki.com/](https://works-wp.yuheijotaki.com/) のWordPress管理画面



<a name="構成"></a>
## 構成

![構成](https://raw.githubusercontent.com/yuheijotaki/works-nuxt/master/docs/img/service.png)



<a name="使用サービス・技術"></a>
## 使用サービス・技術

- [Nuxt.js](https://ja.nuxtjs.org/)（フロントエンド）
- [WordPress](https://ja.wordpress.org/)（CMS）
  - [JAMstack Deployments](https://ja.wordpress.org/plugins/wp-jamstack-deployments/)（Netlifyへの自動デプロイプラグイン）
- [WP REST API](https://ja.wp-api.org/)（API）
- [GitHub](https://github.com/yuheijotaki/works-nuxt)（Gitリポジトリ）
- [Netlify](https://www.netlify.com/)（ホスティングサーバー）



<a name="使用モジュール"></a>
## 使用モジュール

- [axios](https://github.com/axios/axios)（API連携）
- [pug-loader](https://github.com/pugjs/pug-loader)（HTMLテンプレートエンジン）
- [ress](https://github.com/filipelinhares/ress)（リセットCSS）
- [style-resources-module](https://github.com/nuxt-community/style-resources-module)（.scss使用）
- [dotenv-module](https://github.com/nuxt-community/dotenv-module)（環境変数）
- [analytics-module](https://github.com/nuxt-community/analytics-module)（Google Analytics）
- [sitemap-module](https://github.com/nuxt-community/sitemap-module)（sitemap.xml）



<a name="ディレクトリ構成"></a>
## ディレクトリ構成

```
/
└ nuxt.config.js（Nuxt.js設定）
└ /dist/（配信コンテンツ）
└ /src/
    └ /static/（静的コンテンツ）
    |   └ /assets/
    |       └ /img/
    └ /assets/（コンパイル用コンテンツ）
    |   └ /scss/
    |   └ /font/
    └ /layouts/（共通レイアウトテンプレート）
    |   └ default.vue
    └ /pages/（ページテンプレート）
    |   └ index.vue
    |   └ /work/
    |       └ _slug.vue
    └ /components/（コンポーネント）
        └ Logo.vue
        └ Search.vue
        └ SingleCapture.vue
        └ WorksItem.vue
        └ WorksList.vue
        └ WorksSingle.vue
```



<a name="コマンド"></a>
## コマンド

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```


<a name="ステータス"></a>
## ステータス
[![Netlify Status](https://api.netlify.com/api/v1/badges/bf61e538-301d-4d6f-aa38-e78d736c1b35/deploy-status)](https://app.netlify.com/sites/works-yuheijotaki/deploys)



<a name="ブログ"></a>
## ブログ

- [WordPress + Nuxt.js でポートフォリオサイトを作る その1](https://jtk.hatenablog.com/entry/2020/01/07/220000)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その2](https://jtk.hatenablog.com/entry/2020/01/08/220000)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その3](https://jtk.hatenablog.com/entry/2020/01/09/084609)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その4](https://jtk.hatenablog.com/entry/2020/01/09/202100)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その5](https://jtk.hatenablog.com/entry/2020/01/15/200000)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その6](https://jtk.hatenablog.com/entry/2020/02/17/094713)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その7](https://jtk.hatenablog.com/entry/2020/02/18/101549)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その8](https://jtk.hatenablog.com/entry/2020/02/18/180847)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その9](https://jtk.hatenablog.com/entry/2020/02/20/101523)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その10](https://jtk.hatenablog.com/entry/2020/02/21/121515)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その11](https://jtk.hatenablog.com/entry/2020/02/25/091534)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その12](https://jtk.hatenablog.com/entry/2020/02/26/102122)
- [WordPress + Nuxt.js でポートフォリオサイトを作る その13](https://jtk.hatenablog.com/entry/2020/02/28/102822)
