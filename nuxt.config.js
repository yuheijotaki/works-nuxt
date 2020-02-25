// .env読み込み
require('dotenv').config()
const { API_URL, SITE_URL } = process.env

// Nuxt.jsでWordPressの記事を取得する
// ref: https://www.expexp.jp/nuxt-js-and-wp-netlify/
const axios = require('axios')
const apiURL = process.env.API_URL

// meta設定
const siteTitle = 'Works'
const siteDescription = 'My Nuxt.js project with WordPress as Headless CMS'
const siteUrl = process.env.SITE_URL
const ogImage = `${siteUrl}/assets/img/ogp.png`

export default {
  env: { API_URL, SITE_URL },
  mode: 'universal',
  /*
  ** 作業ディレクトリを src/ 以下にまとめる
  ** ref: https://ja.nuxtjs.org/api/configuration-srcdir/
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | Works',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: siteUrl },
      { hid: 'og:title', property: 'og:title', content: siteTitle },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: ogImage },
      { name: 'twitter:description', content: siteDescription },
      { hid: 'twitter:url', name: 'twitter:url', content: siteUrl },
      { hid: 'twitter:title', name: 'twitter:title', content: siteTitle }
    ],
    // link要素で外部リソースを読み込みたいとき
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'rgba(0,0,0,.1)',
    height: '100vh'
  },
  /*
  ** Global CSS
  */
  css: [
    'ress',
    { src: '@/assets/css/styles.scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-67043000-16'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** customize
  */
  // .scssファイルをグローバルに読み込む
  styleResources: {
    scss: [
      '@/assets/scss/foundation/_config.scss',
      '@/assets/scss/foundation/_mixin.scss',
      '@/assets/scss/layout/_common.scss'
    ]
  },
  generate: {
    interval: 1000,
    routes() {
      return Promise.all([
        axios.get(`${apiURL}posts?per_page=100&page=1&_embed=1`)
      ]).then((data) => {
        const posts = data[0]
        return posts.data.map((post) => {
          return {
            route: '/work/' + post.slug,
            payload: post
          }
        })
      })
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: `${siteUrl}`,
    routes(callback) {
      axios.get(`${apiURL}posts?per_page=100&page=1&_embed=1`)
        .then((res) => {
          var routes = res.data.map((post) => {
            return '/work/' + post.slug
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  }
}
