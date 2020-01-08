<template>
  <div>
    <pre>{{post.slug}}</pre>
    <pre>{{post.title.rendered}}</pre>
    <pre>{{post.category_name}}</pre>
    <pre>{{post.images.full}}</pre>
    <pre>{{post.acf.post_url}}</pre>
    <pre>{{post.acf.post_color_letter}}</pre>
    <pre>{{post.acf.post_color_bg}}</pre>
  </div>
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

<style>
</style>
