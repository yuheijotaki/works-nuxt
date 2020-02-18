<template lang="pug">
  div
    //- pre {{post.acf.post_color_letter}}
    //- pre {{post.acf.post_color_bg}}
    p.title {{post.title.rendered}}
    div.meta
      p.date Launch: {{ post.date | dateFilter }}
      p.category Role: {{ post.category_name | categoryFilter }}
      p.url URL:&nbsp;
        a(:href="post.acf.post_url" target="_blank") {{post.acf.post_url}}
    ul
      SingleCapture(
        v-for="(img,index) in capturePC"
        :key="index"
        :title="post.title.rendered"
        :image="img"
      )
    p.back
      nuxt-link(to="/") Index
</template>

<script>
import dayjs from 'dayjs'
import SingleCapture from '~/components/SingleCapture.vue'

export default {
  name: 'WorksSingle',
  components: {
    SingleCapture
  },
  data () {
    return {
      capturePC: this.post.acf.post_capture
    }
  },
  props:{
    'post': {
      type: Object,
      default: ''
    }
  },
  filters: {
    dateFilter(value) {
      return dayjs(value).format('YYYY.MM')
    },
    categoryFilter(value) {
      value = value.split(' ,')
      return value.join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin-top: 60px;
}

.title {
  color: $black_01;
  font-size: 32px;
  line-height: 1;
}

.meta {
  p {
    margin-top: 15px;
    color: $black_01;
    font-size: 16px;
    line-height: 1;
    a {
      color: $black_01;
      text-decoration: none;
    }
  }
}

ul {
  margin-top: 30px;
  list-style: none;
}

.back {
  margin-top: 100px;
  color: $black_01;
  font-size: 16px;
  line-height: 1;
  a {
    color: $black_01;
    text-decoration: none;
  }
}
</style>
