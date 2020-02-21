<template lang="pug">
  section
    h2 Filter:
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
section {
  margin-top: 60px;
  display: flex;
  align-items: center;
  @include indent01;
  @include mq {
    margin-top: 30px;
  }
}

ul {
  display: flex;
  list-style: none;
}

h2,li {
  line-height: 1;
  @include fontMedium;
}

h2 {
  color: $gray_01;
  font-weight: normal;
  margin-right: 15px;
  @include mq {
    display: none;
  }
}

li {
  color: $black_01;
  @include mq {
    font-size: 13px;
  }
  @include mq(spMin) {
    font-size: 11px;
  }
  a {
    color: $black_01;
    text-decoration: none;
    display: inline-block;
    padding: 10px 15px;
    @include mq {
      padding: 6px 8px;
    }
    @include mq(spMin) {
      padding: 5px 6px;
    }
    &:hover {
      background: $gray_01;
      @include mq {
        background: none;
      }
    }
    &.is-current {
      color: $white_01;
      background: $gray_01;
      text-decoration: none;
    }
  }
}
</style>
