<template lang="pug">
  li
    img(
      :src="image.url"
      :alt="title"
    )
</template>

<script>
export default {
  name: 'SingleCapturePC',
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
img {
  width: 15px;
  height: auto;
}
</style>
