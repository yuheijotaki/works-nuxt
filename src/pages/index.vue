<template>
  <div>
    <logo />
    <Search
      @clickedCategory="selectedCategory"
    />
    <WorksList
      :filterCategory="propsCategory"
    />
  </div>
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
    selectedCategory (category) {
      // console.log(category)
      this.category = category
    }
  },
  computed: {
    propsCategory: function() {
      return this.category
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
