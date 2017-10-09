<template>
  <section id="main">
    <!-- 跟路由 -->
    <router-view style="min-height:100vh"></router-view>
  </section>
</template>
<script>
export default {
  name: 'Main',
  components: {
    // searchPop: r => { require.ensure([], () => r(require('../../../components/common/star/Star.vue')), 'Star') },
    // locationPop: r => { require.ensure([], () => r(require('../../../components/common/star/Star.vue')), 'Star') }
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

</style>
