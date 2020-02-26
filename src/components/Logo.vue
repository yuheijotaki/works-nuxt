<template lang="pug">
  section
    h1
      nuxt-link(to="/" @click.native="clickedLogoEvent") works.yuheijotaki.dev
</template>

<script>
export default {
  methods: {
    clickedLogoEvent() {
      const categoryItem = document.querySelectorAll('.navi-category__anchor')
      if ( categoryItem.length ) {
        // カテゴリー現在地クラスの脱着
        const categoryList = [...categoryItem]
        categoryList.filter((element) => {
          element.classList.remove('is-current')
        });
        const categoryListCurrent = document.querySelector('.navi-category__anchor')
        categoryListCurrent.classList.add('is-current')
        // ロゴクリックイベントの受け渡し
        this.$emit('clickedLogo','All')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1;
  font-weight: normal;
  @include fontLarge;
}

a {
  color: $black_01;
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  &:hover {
    background: $gray_01;
    @include mq {
      background: none;
    }
  }
  @include mq {
    padding: 0;
  }
}
</style>
