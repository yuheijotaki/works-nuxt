<template>
  <li>
    <div>
      <p><NuxtLink :to="`/work/${item.slug}/`">permalink</NuxtLink></p>
      <pre>{{item.id}}</pre>
      <pre>{{item.slug}}</pre>
      <pre>{{item.title.rendered}}</pre>
      <pre>{{item.category_name}}</pre>
      <pre>{{item.images.full}}</pre>
      <pre>{{item.acf.post_url}}</pre>
      <pre>{{item.acf.post_color_letter}}</pre>
      <pre>{{item.acf.post_color_bg}}</pre>
    </div>
    <hr>
  </li>
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

<style>
</style>
