<template lang="pug">
  div(:style="customStyle")
    section
      h2.title {{post.title.rendered}}
      div.meta
        p.date {{ post.date | dateFilter }}
        p.category {{ post.category_name | categoryFilter }}
        p.url
          a(:href="post.acf.post_url" target="_blank") {{post.acf.post_url}}
      ul.capture
        SingleCapture(
          v-for="(img,index) in capturePC"
          :key="index"
          :title="post.title.rendered"
          :image="img"
        )
    div.works
      WorksList
    p.back
      nuxt-link(to="/") Back to Index
</template>

<script>
import dayjs from 'dayjs'
import SingleCapture from '~/components/SingleCapture.vue'
import WorksList from '~/components/WorksList.vue'

export default {
  name: 'WorksSingle',
  components: {
    SingleCapture,
    WorksList
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
  },
  computed: {
    customStyle () {
      return {
        '--user-color': this.post.acf.post_color_custom
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$customColor: var(--user-color);

section,
div {
  margin-top: 60px;
  @include mq {
    margin-top: 30px;
  }
}

.title {
  color: $customColor;
  font-weight: normal;
  line-height: 1.2;
  @include fontExLarge;
  @include indent01;
}

.meta {
  p {
    margin-top: 15px;
    color: $customColor;
    line-height: 1;
    @include fontMedium;
    @include indent01;
    @include mq {
      margin-top: 10px;
    }
    &.url {
      margin-top: 5px;
      margin-left: 0;
      margin-right: 0;
      @include mq {
        margin-top: 10px;
      }
    }
    a {
      color: $customColor;
      text-decoration: none;
      display: inline-block;
      padding: 10px 30px;
      @include mq {
        padding: 0;
      }
      &:hover {
        color: $black_01;
        background: $gray_01;
        @include mq {
          color: $customColor;
          background: none;
        }
      }
    }
  }
}

.capture {
  margin-top: 30px;
  list-style: none;
  @include indent01;
}

.works {
  margin-top: 120px;
  @include mq {
    margin-top: 70px;
  }
}

.back {
  margin-top: 60px;
  line-height: 1;
  @include fontMedium;
  a {
    color: $black_01;
    text-decoration: none;
    display: inline-block;
    padding: 10px 30px;
    @include mq {
      padding: 0;
    }
    &:hover {
      background: $gray_01;
      @include mq {
        background: none;
      }
    }
  }
}
</style>
