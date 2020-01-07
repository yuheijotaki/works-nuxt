<template>
  <ul>
    <WorksItem
      v-for="(post,index) in posts"
      :item="post"
      :key="index"
    />
  </ul>
</template>

<script>
import axios from "axios";
import WorksItem from '~/components/WorksItem.vue'

export default {
  name: 'WorksList',
  components: {
    WorksItem
  },
  data () {
    return {
      posts: []
    }
  },
  mounted :function(){
    axios.get( 'https://works.yuheijotaki.com/wp-json/wp/v2/posts?per_page=100' )
    .then( response => {
      this.posts = response.data
    })
    .catch( error => {
      console.log(error)
    })
  }
}
</script>

<style>
</style>
