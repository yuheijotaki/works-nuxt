<template>
  <ul>
    <WorksItem
      v-for="(post,index) in filterWorks"
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
  props:{
    'filterCategory': {
      type: String,
      default: 'All'
    }
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
  },
  computed: {
    filterWorks: function() {
      const posts = this.posts
      const filterCategory = this.filterCategory
      if ( filterCategory !== 'All' ) {
        return this.posts.filter( function( post ) {
          if ( post.category_name.indexOf(filterCategory) >= 0 ) {
            return post
          }
        })
      } else {
        // 初期表示 or `All` を選択した場合
        return this.posts
      }
    }
  }
}
</script>

<style>
</style>
