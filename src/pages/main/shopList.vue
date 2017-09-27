<template>
  <section id="shopList">
    <mt-button @click="go('shopDetail')">返回首页</mt-button>
  </section>
</template>
<script>
export default {
  name: 'shopList',
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
