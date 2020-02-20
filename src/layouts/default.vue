<template lang="pug">
  div.wrapper
    nuxt
</template>

<style lang="scss" scoped>
.wrapper {
  @include pcInner;
  margin: 60px 0 120px;
  @include mq {
    @include spInner;
    margin: 30px 0 60px;
  }
}
</style>
