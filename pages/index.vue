<template>
  <div>
    <logo />
    <Search
      @categoryClicked="selectedCategory"
    />
    <WorksList/>
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
  methods: {
    selectedCategory (category) {
      console.log(category)
    }
  }
}
</script>

<style>
</style>
