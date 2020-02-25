<template lang="pug">
  section
    h2.u-hide-title Works
    p.loading(v-if="loading") loading...
    ul
      WorksItem(
        v-for="(post,index) in filterWorks"
        :key="index"
        :item="post"
      )
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
      posts: [],
      loading: true
    }
  },
  mounted :function(){
    axios.get( `${process.env.API_URL}posts?per_page=100` )
    .then( response => {
      // 配列をシャッフル
      // ref: https://qiita.com/komaji504/items/62a0f8ea43053e90555a
      for(var i = response.data.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = response.data[i];
        response.data[i] = response.data[r];
        response.data[r] = tmp;
      }
      this.posts = response.data
      this.loading = false
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

<style lang="scss" scoped>
section {
  margin-top: 60px;
  @include mq {
    margin-top: 40px;
  }
}

.loading {
  color: $black_01;
  line-height: 1;
  padding: 30px;
  @include fontMedium;
  @include mq {
    padding: 0;
  }
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
