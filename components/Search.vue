<template>
  <div>
    <p>Search</p>
    <ul>
      <li><a href="#" @click="categoryNaviClick('Front-end')">Front-end</a></li>
      <li><a href="#" @click="categoryNaviClick('WordPress')">WordPress</a></li>
      <li><a href="#" @click="categoryNaviClick('Web Design')">Web Design</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    categoryNaviClick(category) {
      this.$emit('categoryClicked',category);
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
}
ul li {
  margin-right: 2em;
}
</style>
