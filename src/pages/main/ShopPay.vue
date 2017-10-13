<template>
  <div class="shopDetail">
    <div class="shopDetail_header">
      支付呀么
    </div>
  </div>
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
<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/assets/css/vars';
</style>
