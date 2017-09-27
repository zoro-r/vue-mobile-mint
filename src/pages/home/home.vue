<template>
  <section class="main_page">
    <!-- 子页面 -->
    <transition :name="'slideInRight'">
      <navigation>
        <router-view v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content"></router-view>
      </navigation>
    </transition>
    <!-- 模块区域 -->
    <!-- v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content" -->
    <section v-if="$store.state.common.isHome">
      <transition :name="transitionName">
        <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" v-show="selected == 1" class="scroll-content primary_bg_gray">
          <mainCom></mainCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" v-show="selected == 2" class="scroll-content primary_bg_gray">
          <orderCom></orderCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" v-show="selected == 3" class="scroll-content primary_bg_gray">
          <searchCom></searchCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" v-show="selected == 4" class="scroll-content primary_bg_gray">
          <minCom></minCom>
        </section>
      </transition>
    </section>
    <!-- 底部导航 -->
    <transition name="slideInUp">
      <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected">
        <mt-tab-item id="1">
          <img v-bind:class="[selected == '1' ?'bounceIn':'']" class="animated icon_tabs" slot="icon" :src="selected == '1'?'../../assets/img/common/e-active.png':'../../assets/img/common/e.png'" /> 外卖
        </mt-tab-item>
        <mt-tab-item id="2">
          <img slot="icon" v-bind:class="[selected == '2' ?'bounceIn':'']" class="animated icon_tabs" :src="selected == '2'?'../../assets/img/common/compass-active.png':'../../assets/img/common/compass.png'" /> 发现
        </mt-tab-item>
        <mt-tab-item id="3">
          <img slot="icon" :src="selected == '3'?'../../assets/img/common/order-active.png':'../../assets/img/common/order.png'" v-bind:class="[selected == '3' ?'bounceIn':'']" class="animated icon_tabs" /> 订单
        </mt-tab-item>
        <mt-tab-item id="4">
          <img slot="icon" :src="selected == '4'?'../../assets/img/common/user-active.png':'../../assets/img/common/user.png'" v-bind:class="[selected == '4' ?'bounceIn':'']" class="animated icon_tabs" /> 我的
        </mt-tab-item>
      </mt-tabbar>
    </transition>
    <!-- 搜索弹出框 -->
    <searchPop></searchPop>
    <!-- 定位选择框 -->
    <locationPop></locationPop>
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
      transitionName: "slideInRight",
      showHome: false
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
      console.log(this.transitionName)
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
  // .scroll-content  {
  //   height: 100vh;
  //   position: absolute;
  //   top: 0px;
  //   width: 100%;
  //   overflow: scroll;
  //    -webkit-overflow-scrolling: touch;
  // will-change: scroll-position;
  // }
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
