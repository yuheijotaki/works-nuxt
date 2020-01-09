<template lang="pug">
  div
    p Filter:
    ul
      li
        a.navi-category__anchor.is-current(href="javascript:void(0);" @click="clickedCategoryEvent('All')") All
      li
        a.navi-category__anchor(href="javascript:void(0);" @click="clickedCategoryEvent('Front-end')") Front-end
      li
        a.navi-category__anchor(href="javascript:void(0);" @click="clickedCategoryEvent('WordPress')") WordPress
      li
        a.navi-category__anchor(href="javascript:void(0);" @click="clickedCategoryEvent('Web Design')") Web Design
      li
        a.navi-category__anchor(href="javascript:void(0);" @click="clickedCategoryEvent('Tumblr')") Tumblr
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    clickedCategoryEvent(category) {
      // クリックされたカテゴリーの受け渡し
      this.$emit('clickedCategory',category)
      // 現在のカテゴリーのクラス脱着
      const categoryItem = document.querySelectorAll('.navi-category__anchor')
      const categoryList = [...categoryItem]
      categoryList.filter((element) => {
        element.classList.remove('is-current')
      });
      const categoryListCurrent = event.currentTarget
      categoryListCurrent.classList.add('is-current')
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
ul {
  li {
    margin-right: 2em;
    a {
      &.is-current {
        color: gray;
        text-decoration: none;
      }
    }
  }
}
</style>
