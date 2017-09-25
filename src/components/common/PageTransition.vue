<template>
  <section class="main_page" v-bind:class="[$store.state.common.hasFooter?'has-footer':'']">
    <div>
      <transition :name="transitionName">
        <navigation>
          <router-view v-bind:style="{'overflow-y':isScroll && !$store.state.common.isPop? 'auto':'hidden'}" class="child-view scroll-content"></router-view>
        </navigation>
      </transition>
    </div>
    <transition name="slideInUp">
      <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected">
        <mt-tab-item id="1">
          <!-- <div slot="icon"  class="icon_tabs animated" style="background-image:url(static/img/common/e.png)"></div> -->
          <div slot="icon" v-bind:style="{'background-image':selected == '1'?'url(static/img/common/e-active.png)':'url(static/img/common/e.png)'}" v-bind:class="[selected == '1' ?'bounceIn':'']" class="animated icon_tabs"></div>
          外卖
        </mt-tab-item>
        <mt-tab-item id="2">
          <div slot="icon" v-bind:style="{'background-image':selected == '2'?'url(static/img/common/compass-active.png)':'url(static/img/common/compass.png)'}" v-bind:class="[selected == '2' ?'bounceIn':'']" class="animated icon_tabs"></div>
          发现
        </mt-tab-item>
        <mt-tab-item id="3">
          <div slot="icon" v-bind:style="{'background-image':selected == '3'?'url(static/img/common/order-active.png)':'url(static/img/common/order.png)'}" v-bind:class="[selected == '3' ?'bounceIn':'']" class="animated icon_tabs"></div>
          订单
        </mt-tab-item>
        <mt-tab-item id="4">
          <div slot="icon" v-bind:style="{'background-image':selected == '4'?'url(static/img/common/user-active.png)':'url(static/img/common/user.png)'}" v-bind:class="[selected == '4' ?'bounceIn':'']" class="animated icon_tabs"></div>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </transition>
  </section>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      selected: "1",
      isScroll: false,
      transitionName: "slideInRight"
    }
  },
  watch: {
    //监听底部切换
    selected(newVal, oldVal) {
      let routerMap = {
        "1": "mainHome",
        "2": "mainHome",
        "3": "mainHome",
        "4": "mineHome",
      };
      this.transitionName = oldVal < newVal ? "slideInRight" : "slideInLeft";
      console.log(this.transitionName)
      this.$router.push({ name: routerMap[newVal] })

    },
    onSuccess(e) {
      console.log(e);
    },
    onFail(e) {
      console.log(e);
    }
  },
  created() {
    setTimeout(e => {
      this.isScroll = true;
    }, 200)
  }
}
</script>

<style lang="scss">
.main_page {
  .icon_tabs {
    background-size: 100%;
  }
  .is-selected,
  .icon_tabs {
    transition: all ease .5s;
  }
  .scroll-content {
    // z-index: 0;
    // -webkit-overflow-scrolling: touch;
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

  .mint-tab-item {
    color: rgb(189, 189, 189)
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
}
</style>
