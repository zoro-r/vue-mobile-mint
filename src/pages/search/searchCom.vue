<template>
  <section>
    <mt-button @click="hide" type="default">显示隐藏查询页面</mt-button>
  </section>
</template>
<script type="text/babel">
export default {
  name: "mineHome",
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
    hide() {
      this.$store.commit('SHOW_FOOTER', !this.$store.state.common.hasFooter)
    }
  }
};
</script>
<style lang='scss'>
.mineHome {}
</style>
