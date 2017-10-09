<template>
  <section id="shopList">
    <mt-button @click="go('shopDetail')">返回首页</mt-button>
  </section>
</template>
<script>
export default {
  name: 'ShopList',
  components: {
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
