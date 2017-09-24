<template>
  <section id="main">
    <!-- 跟路由 -->
    <router-view style="min-height:100vh"></router-view>
    <searchPop></searchPop>
  </section>
</template>
<script>
export default {
  name: 'main',
  components: {
    searchPop: r => { require(['./components/searchPop'], r) },
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
.mint-popup {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
