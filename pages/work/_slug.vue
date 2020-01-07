<template>
  <div>
    <p><NuxtLink :to="`/`">index</NuxtLink></p>
    <WorksSingle
      :post="post"
    />
  </div>
</template>

<script>
import axios from 'axios'
import WorksSingle from '~/components/WorksSingle.vue'

export default {
  components: {
    WorksSingle
  },
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
