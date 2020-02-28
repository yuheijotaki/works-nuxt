<template lang="pug">
  div(:style="customStyle")
    section
      h2.title {{post.title.rendered}}
      div.meta
        p.date {{ post.date | dateFilter }}
        p.category {{ post.category_name | categoryFilter }}
        template(v-if="post.acf.post_notAvailable")
          p.url
            span <s>&nbsp;{{post.acf.post_url}}&nbsp;</s> &nbsp;(not available)
        template(v-else)
          p.url
            a(:href="post.acf.post_url" target="_blank" rel="noopener") {{post.acf.post_url}}
              span(v-if="post.acf.post_archive") &nbsp;(archive)
      div.credit(v-if="post.acf.post_credit")
        p(v-html="post.acf.post_credit")
      ul.capture
        SingleCapture(
          v-for="(img,index) in capturePC"
          :key="index"
          :title="post.title.rendered"
          :image="img"
        )
    div.works
      WorksList(
        :postId="post.id"
      )
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
      line-height: 1.4;
      @include enTextBr;
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
        span {
          color: $black_01;
        }
        @include mq {
          color: $customColor;
          background: none;
          span {
           color: $customColor;
          }
        }
      }
      span {
        color: $customColor;
        display: inline;
        padding: 0;
      }
    }
    span {
      color: $customColor;
      text-decoration: none;
      display: inline-block;
      padding: 10px 30px;
      @include mq {
        padding: 0;
      }
    }
  }
}

.credit {
  margin-top: 30px;
  @include indent01;
  p {
    color: $customColor;
    line-height: 1.7;
    @include fontMedium;
  }
}

.capture {
  margin-top: 50px;
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
