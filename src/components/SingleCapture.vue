<template lang="pug">
  li
    img(
      :src="image.url"
      :alt="title"
    )
</template>

<script>
export default {
  name: 'SingleCapture',
  props:{
    'title': {
      type: String,
      default: ''
    },
    'image': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  @include imageItem;
  max-width: 50%;
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
  @include mq {
    max-width: 300px;
  }
}

img {
  @include imageObject;
  max-width: 100%;
  height: auto;
}
</style>
