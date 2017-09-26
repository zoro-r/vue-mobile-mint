<template>
  <section class="main_page">
    <transition :name="transitionName">
      <navigation>
        <router-view  v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content"></router-view>
      </navigation>
    </transition>
    <!-- 模块区域 -->
    <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content">
      <transition :name="transitionName">
        <section v-show="selected == 1" style="height:100vh">
          <mainCom></mainCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 2" style="height:100vh">
          <orderCom></orderCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 3" style="height:100vh">
          <searchCom></searchCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 4" style="height:100vh">
          <minCom></minCom>
        </section>
      </transition>
    </section>
    <!-- 搜索弹出框 -->
    <searchPop></searchPop>
    <!-- 定位选择框 -->
    <locationPop></locationPop>
    <transition name="slideInUp">
      <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected">
        <mt-tab-item id="1">
          <div slot="icon" v-bind:style="{'background-image':selected == '1'?'url(static/img/common/e-active.png)':'url(static/img/common/e.png)'}" v-bind:class="[selected == '1' ?'bounceIn':'']" class="animated icon_tabs"></div>
          <!-- <div slot="icon"  class="icon_tabs animated" style="background-image:url(static/img/common/e.png)"></se> -->
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
import mainCom from '../main/mainCom'
export default {
  name: 'home',
  data() {
    return {
      selected: "1",
      isScroll: true,
      transitionName: "slideInLeft"
    }
  },
  components: {
    mainCom,
    minCom: r => { require(['../mine/mineCom'], r) },
    orderCom: r => { require(['../order/orderCom'], r) },
    searchCom: r => { require(['../search/searchCom'], r) },
    searchPop: r => { require(['../main/components/searchPop'], r) },
    locationPop: r => { require(['../main/components/locationPop'], r) }
  },
  watch: {
    selected(newVal, oldVal) {
      this.$store.commit('TAB_SELECTED', newVal)
      // let routerMap = {
      //   "1": "mainHome",
      //   "2": "mainHome",
      //   "3": "mainHome",
      //   "4": "mineHome",
      // };
      this.transitionName = oldVal < newVal ? "slideInRight" : "slideInLeft";
      // this.$router.push({ name: routerMap[newVal] })
    },
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
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.mint-popup {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

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
