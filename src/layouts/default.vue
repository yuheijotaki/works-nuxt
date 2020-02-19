<template lang="pug">
  div.wrapper
    nuxt
</template>

<style lang="scss" scoped>
.wrapper {
  margin: 60px 0 120px;
  @include pcInner;
  @include mq {
    @include spInner;
  }
}
</style>
