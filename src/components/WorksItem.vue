<template lang="pug">
  li
    div
      p
        nuxt-link(:to="`/work/${item.slug}/`") detail
      p
        a(:href="item.acf.post_url" target="_blank") website
      pre {{item.id}}
      pre {{item.slug}}
      pre {{item.title.rendered}}
      pre {{item.category_name}}
      img(:src="item.images.full" alt="")
      pre {{item.acf.post_color_letter}}
      pre {{item.acf.post_color_bg}}
</template>

<script>
export default {
  name: 'WorksItem',
  props:{
    'item': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: auto;
}
</style>
