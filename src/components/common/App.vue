<template>
  <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content" id="scroll-content">
    <router-view> </router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selected: "1",
      isScroll: true,
      transitionName: "slideInRight",
      showHome: false
    }
  },
  watch: {
    ['$store.state.common.popObj']: {
      handler(newVal) {
        this.isScroll = true;
        for (var key in newVal) {
          if (newVal[key]) {
            this.isScroll = false;
          }
        }
        this.$store.commit('SHOW_FOOTER', this.isScroll)
      },
      deep: true
    }
  },
  created() {
    // utils.wx.wxConfig().then(req => {
    //   console.log("获取微信配置返回数据", req)
    // });
  }

}
</script>
<style lang="scss">
.scroll-content {
  z-index: 0; // -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; // z-index: 1;
  display: block;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  contain: size style layout;
  &::before {
    position: absolute;
    width: 1px;
    height: 1px;
    content: "";
    bottom: -1px;
  }
  &::after {
    top: -1px;
  }
}
</style>

