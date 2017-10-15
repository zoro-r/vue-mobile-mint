<template>
  <section v-bind:class="isMobile?'platfrom-ios':''">
    <!-- v-bind:style="{'overflow-y':isScroll && !$store.state.common.noScroll? 'hidden':'hidden'}" -->
    <section style="overflow-y:hidden" v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" class="child-view scroll-content" id="scroll-content">
      <router-view> </router-view>
      <!-- 底部导航 -->
    </section>
    <transition name="slideInUp">
      <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected">
        <mt-tab-item id="1">
          <img v-bind:class="[selected == '1' ?'bounceIn':'']" class="animated icon_tabs" slot="icon" :src="selected == '1'?'static/img/common/e-active.png':'static/img/common/e.png'" /> 外卖
        </mt-tab-item>
        <mt-tab-item id="2">
          <img slot="icon" v-bind:class="[selected == '2' ?'bounceIn':'']" class="animated icon_tabs" :src="selected == '2'?'static/img/common/compass-active.png':'static/img/common/compass.png'" /> 发现
        </mt-tab-item>
        <mt-tab-item id="3">
          <img slot="icon" :src="selected == '3'?'static/img/common/order-active.png':'static/img/common/order.png'" v-bind:class="[selected == '3' ?'bounceIn':'']" class="animated icon_tabs" /> 订单
        </mt-tab-item>
        <mt-tab-item id="4">
          <img slot="icon" :src="selected == '4'?'static/img/common/user-active.png':'static/img/common/user.png'" v-bind:class="[selected == '4' ?'bounceIn':'']" class="animated icon_tabs" /> 我的
        </mt-tab-item>
      </mt-tabbar>
    </transition>
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
      showHome: false,
      positons: {}
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
    },
    selected(newVal, oldVal) {
      this.$store.commit('TAB_SELECTED', newVal)
      // this.savePositon()
      // let routerMap = {
      //   "1": "mainHome",
      //   "2": "mainHome",
      //   "3": "mainHome",
      //   "4": "mineHome",
      // };
      this.transitionName = oldVal < newVal ? "slideInRight" : "slideInLeft";
      // this.savePositon(oldVal)
      this.$router.currentRoute.name !== 'home' && this.$router.push({ name: "home" })
      // setTimeout(() => {
      // this.toPositon(oldVal)
      // }, 100);
    }
  },
  methods: {
    //滚动到相对位置
    toPositon(key) {
      document.getElementById("scroll-content").scrollTo(0, this.positons[key] ? this.positons[key].y : 0)
    },
    //保存位置信息
    savePositon(key) {
      this.positons[key] = {
        y: document.getElementById("scroll-content") && document.getElementById("scroll-content").scrollTop
      }
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
  contain: size style layout; // &::before {
  //   position: absolute;
  //   width: 1px;
  //   height: 1px;
  //   content: "";
  //   bottom: -1px;
  // }
  // &::after {
  //   top: -1px;
  // }
}
</style>

