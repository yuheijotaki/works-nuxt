<template lang="pug">
  li
    nuxt-link(:to="`/work/${item.slug}/`")
      p.image
        img(
          :src="item.images.full"
          :alt="item.title.rendered"
        )
      div.content
        p.title {{item.title.rendered}}
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
  width: 48%;
  margin-top: 30px;
  &:nth-child(-n+2) {
    margin-top: 0;
  }
  a {
    display: flex;
    text-decoration: none;
    color: $black_01;
  }
}

.image {
  max-width: 160px;
  min-width: 160px;
  margin-right: 20px;
  @include imageItem;
  img {
    @include imageObject;
  }
}

.content {
}

.title {
  font-size: 24px;
  line-height: 1;
}

.meta {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1;
}

.date {
}

.category {
  margin-top: 10px;
}
</style>
