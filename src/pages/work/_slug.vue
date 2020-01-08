<template>
  <div>
    <logo />
    <WorksSingle
      :post="post"
    />
  </div>
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

<style lang="scss" scoped>
</style>
