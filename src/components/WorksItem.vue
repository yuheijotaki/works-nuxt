<template>
  <li>
    <div>
      <p><NuxtLink :to="`/work/${item.slug}/`">detail</NuxtLink></p>
      <p><a :href="item.acf.post_url" target="_blank">website</a></p>
      <!-- <pre>{{item.id}}</pre> -->
      <!-- <pre>{{item.slug}}</pre> -->
      <pre>{{item.title.rendered}}</pre>
      <pre>{{item.category_name}}</pre>
      <img :src="item.images.full" alt="">
      <!-- <pre>{{item.acf.post_color_letter}}</pre> -->
      <!-- <pre>{{item.acf.post_color_bg}}</pre> -->
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

<style scoped>
img {
  width: 20px;
  height: auto;
}
</style>
