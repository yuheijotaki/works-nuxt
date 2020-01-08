<template>
  <div>
    <p>Filter:</p>
    <ul>
      <li><a href="javascript:void(0);" @click="clickedCategoryEvent('All')">All</a></li>
      <li><a href="javascript:void(0);" @click="clickedCategoryEvent('Front-end')">Front-end</a></li>
      <li><a href="javascript:void(0);" @click="clickedCategoryEvent('WordPress')">WordPress</a></li>
      <li><a href="javascript:void(0);" @click="clickedCategoryEvent('Web Design')">Web Design</a></li>
      <li><a href="javascript:void(0);" @click="clickedCategoryEvent('Tumblr')">Tumblr</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    clickedCategoryEvent(category) {
      this.$emit('clickedCategory',category);
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
ul li {
  margin-right: 2em;
}
</style>
