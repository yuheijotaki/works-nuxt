<template lang="pug">
  li
    img(:src="image.url" alt="")
</template>

<script>
export default {
  name: 'SingleCapturePC',
  props:{
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
