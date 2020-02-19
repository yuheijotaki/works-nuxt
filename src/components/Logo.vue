<template lang="pug">
  h1
    nuxt-link(to="/") works.yuheijotaki.com
</template>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  line-height: 1;
  font-weight: normal;
}

a {
  color: $black_01;
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  &:hover {
    background: $gray_01;
  }
}
</style>
