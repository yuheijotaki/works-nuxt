<template lang="pug">
  div
    Logo(
      @clickedLogo="selectedLogo"
    )
    Search(
      @clickedCategory="selectedCategory"
    )
    WorksList(
      :filterCategory="propsCategory"
    )
</template>

<script>
import Logo from '~/components/Logo.vue'
import Search from '~/components/Search.vue'
import WorksList from '~/components/WorksList.vue'

export default {
  components: {
    Logo,
    Search,
    WorksList
  },
  data () {
    return {
      category: 'All'
    }
  },
  methods: {
    // ロゴクリック時
    selectedLogo () {
      this.category = 'All'
    },
    // カテゴリークリック時
    selectedCategory (category) {
      this.category = category
    }
  },
  computed: {
    propsCategory: function() {
      return this.category
    }
  },
  head () {
    return {
      titleTemplate: null,
      title: 'Works',
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
