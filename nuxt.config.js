// Nuxt.jsでWordPressの記事を取得する
// ref: https://www.expexp.jp/nuxt-js-and-wp-netlify/
const axios = require('axios')
const apiURL = 'https://works-wp.yuheijotaki.com'

// meta設定
const title = 'Works'
const description = 'My Nuxt.js project with WordPress as Headless CMS'
const url = 'https://works-yuheijotaki.netlify.com'
const ogImage = `${url}/assets/img/ogp.png`

export default {
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
      { hid: 'description', name: 'description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: title },
      { property: 'og:description', content: description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: ogImage },
      { name: 'twitter:description', content: description },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
      { hid: 'twitter:title', name: 'twitter:title', content: title }
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
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
        axios.get(`${apiURL}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`)
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
  // WordPress REST API から情報を取得する
  axios: {
    baseURL: apiURL
  }
}
