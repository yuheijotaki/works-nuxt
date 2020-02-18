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
div {
  margin-top: 60px;
  display: flex;
}

ul {
  display: flex;
  list-style: none;
}

p,li {
  margin-right: 20px;
  font-size: 16px;
  line-height: 1;
}

p {
  color: $gray_01;
}

li {
  color: $black_01;
  a {
    color: $black_01;
    text-decoration: none;
    &.is-current {
      color: $gray_01;
      text-decoration: none;
    }
  }
}
</style>
