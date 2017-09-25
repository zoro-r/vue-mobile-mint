<template>
  <section class="locationPop">
    <mt-popup position="bottom" class="mint-popup" :modal="true">
    </mt-popup>
  </section>
</template>
<script >
export default {
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
  watch: {
    ['$store.state.common.isPop'](newVal) {
    }
  },
  mounted() {
  }
};
</script>
<style lang='scss'>

</style>
