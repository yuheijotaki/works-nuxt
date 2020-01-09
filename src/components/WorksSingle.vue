<template lang="pug">
  div
    pre {{post.id}}
    pre {{post.slug}}
    pre {{post.title.rendered}}
    pre {{post.category_name}}
    pre {{post.acf.post_color_letter}}
    pre {{post.acf.post_color_bg}}
</template>

<script>
export default {
  name: 'WorksSingle',
  props:{
    'post': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
