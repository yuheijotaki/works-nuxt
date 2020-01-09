<template lang="pug">
  div
    pre {{post.id}}
    pre {{post.slug}}
    pre {{post.title.rendered}}
    pre {{post.category_name}}
    pre {{post.acf.post_color_letter}}
    pre {{post.acf.post_color_bg}}
    ul
      SingleCapturePC(
        v-for="(img,index) in capturePC"
        :image="img"
        :key="index"
      )
    ul
      SingleCaptureSP(
        v-for="(img,index) in captureSP"
        :image="img"
        :key="index"
      )
</template>

<script>
import SingleCapturePC from '~/components/SingleCapturePC.vue'
import SingleCaptureSP from '~/components/SingleCaptureSP.vue'

export default {
  name: 'WorksSingle',
  components: {
    SingleCapturePC,
    SingleCaptureSP
  },
  data () {
    return {
      capturePC: this.post.acf.post_capture_pc,
      captureSP: this.post.acf.post_capture_sp
    }
  },
  props:{
    'post': {
      type: Object,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
