<template>
  <section id="ShopDetail">
    <mt-button @click="toHome">返回首页</mt-button>
  </section>
</template>
<script>
export default {
  name: 'ShopDetail',
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
