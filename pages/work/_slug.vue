<template>
  <div>
    <p><NuxtLink :to="`/`">index</NuxtLink></p>
    <pre>{{post.slug}}</pre>
    <pre>{{post.title.rendered}}</pre>
    <pre>{{post.category_name}}</pre>
    <pre>{{post.images.full}}</pre>
    <pre>{{post.acf.post_url}}</pre>
    <pre>{{post.acf.post_color_letter}}</pre>
    <pre>{{post.acf.post_color_bg}}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: {}
    }
  },
  async asyncData( { params } ) {
    const { data } = await axios.get('https://works.yuheijotaki.com/wp-json/wp/v2/posts?slug=' + params.slug)
    return {
      post: data[0]
    }
  }
}
</script>
