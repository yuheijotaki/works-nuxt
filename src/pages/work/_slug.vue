<template lang="pug">
  div
    Logo
    WorksSingle(
      :post="post"
    )
</template>

<script>
import Logo from '~/components/Logo.vue'
import WorksSingle from '~/components/WorksSingle.vue'
import axios from 'axios'

export default {
  components: {
    Logo,
    WorksSingle
  },
  data () {
    return {
      post: {},
      meta: {
        title: '',
        type: 'article',
        url: ''
      }
    }
  },
  async asyncData( { params } ) {
    const { data } = await axios.get(`${process.env.API_URL}posts?slug=${params.slug}`)
    return {
      post: data[0],
      meta: {
        title: `${data[0].title.rendered} | Works`,
        description: `${data[0].title.rendered}`,
        url: `${process.env.SITE_URL}/${data[0].slug}/`
      }
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: `${this.meta.description} Webサイトの構築事例紹介です。` },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:title', property: 'og:title', content: `${this.meta.title} | works.yuheijotaki.dev` },
        { hid: 'og:description', property: 'og:description', content: `${this.meta.description} Webサイトの構築事例紹介です。` },
        { hid: 'twitter:url', property: 'twitter:url', content: this.meta.url },
        { hid: 'twitter:title', property: 'twitter:title', content: `${this.meta.title} | works.yuheijotaki.dev` },
        { hid: 'twitter:description', property: 'twitter:description', content: `${this.meta.description} Webサイトの構築事例紹介です。` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
