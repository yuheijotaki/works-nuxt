<template lang="pug">
  li
    nuxt-link(:to="`/work/${item.slug}/`")
      p.image
        img(
          :src="item.images.full"
          :alt="item.title.rendered"
        )
      section.content
        h3.title {{item.title.rendered}}
        div.meta
          p.date {{ item.date | dateFilter }}
          p.category {{ item.category_name | categoryFilter }}
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'WorksItem',
  props:{
    'item': {
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
li {
  width: 50%;
  @include mq {
    width: 100%;
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
  a {
    display: flex;
    text-decoration: none;
    color: $black_01;
    padding: 30px;
    &:hover {
      background: $gray_01;
      @include mq {
        background: none;
      }
    }
    @include mq {
      padding: 0;
    }
  }
}

.image {
  max-width: 160px;
  min-width: 160px;
  margin-right: 20px;
  @include imageItem;
  @include mq {
    max-width: 100px;
    min-width: 100px;
    margin-right: 15px;
  }
  img {
    @include imageObject;
  }
}

.content {
}

.title {
  line-height: 1.2;
  font-weight: normal;
  @include fontLarge;
}

.meta {
  margin-top: 10px;
  line-height: 1;
  @include fontSmall;
  @include mq {
    margin-top: 5px;
  }
}

.date {
}

.category {
  margin-top: 10px;
  @include mq {
    display: none;
  }
}
</style>
