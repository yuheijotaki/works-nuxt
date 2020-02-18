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
  margin-top: 30px;
  &:first-child {
    margin-top: 0;
  }
}

img {
  @include imageObject;
  max-width: 800px;
  height: auto;
}
</style>
