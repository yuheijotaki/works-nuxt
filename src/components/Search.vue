<template lang="pug">
  div
    p Filter:
    ul
      li
        a(href="javascript:void(0);" @click="clickedCategoryEvent('All')") All
      li
        a(href="javascript:void(0);" @click="clickedCategoryEvent('Front-end')") Front-end
      li
        a(href="javascript:void(0);" @click="clickedCategoryEvent('WordPress')") WordPress
      li
        a(href="javascript:void(0);" @click="clickedCategoryEvent('Web Design')") Web Design
      li
        a(href="javascript:void(0);" @click="clickedCategoryEvent('Tumblr')") Tumblr
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
