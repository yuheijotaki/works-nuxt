// Nuxt.jsでWordPressの記事を取得する
// ref: https://www.expexp.jp/nuxt-js-and-wp-netlify/
const axios = require('axios')
const apiURL = 'https://works.yuheijotaki.com'

export default {
  // mode: 'spa',
  /*
  ** 作業ディレクトリを src/ 以下にまとめる
  ** ref: https://ja.nuxtjs.org/api/configuration-srcdir/
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
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
  styleResources: {
    scss: [
      '@/assets/sass/foundation/_config.scss',
      '@/assets/sass/foundation/_mixin.scss'
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
