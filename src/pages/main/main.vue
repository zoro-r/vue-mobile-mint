<template>
  <section id="main">
    <!-- 跟路由 -->
      <router-view style="min-height:100vh"></router-view>
  </section>
</template>
<script>
export default {
  name: 'main',
  components: {
    searchPop: r => { require(['./components/searchPop'], r) },
    locationPop: r => { require(['./components/locationPop'], r) }
  },
  data() {
    return {
    }
  },
  methods: {
    hidePop() {
      this.$store.commit('POP_STATUS', false)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >

</style>
