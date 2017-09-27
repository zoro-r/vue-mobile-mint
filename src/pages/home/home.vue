<template>
  <section class="main_page">
    <!-- 子页面 -->
    <transition :name="'slideInRight'">
      <router-view style="min-height:600px"></router-view>
    </transition>
    <!-- 模块区域 -->
    <!-- v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll-content" -->
    <section v-show="$store.state.common.isHome">
      <transition :name="transitionName">
        <section v-show="selected == 1" class="tab_item_page">
          <mainCom></mainCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 2" class="tab_item_page">
          <orderCom></orderCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 3" class="tab_item_page">
          <searchCom></searchCom>
        </section>
      </transition>
      <transition :name="transitionName">
        <section v-show="selected == 4" class="tab_item_page">
          <minCom></minCom>
        </section>
      </transition>
    </section>
    <!-- 底部导航 -->
    <transition name="slideInUp">
      <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected" :fixed="true">
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
      showHome: false,
      positons: {}
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
      this.savePositon()
      // let routerMap = {
      //   "1": "mainHome",
      //   "2": "mainHome",
      //   "3": "mainHome",
      //   "4": "mineHome",
      // };
      this.transitionName = oldVal < newVal ? "slideInRight" : "slideInLeft"
      this.savePositon(oldVal)
      this.$router.currentRoute.name !== 'home' && this.$router.push({ name: "home" })
      setTimeout(() => {
        this.toPositon()
      }, 100);
    }
  },
  methods: {
    //滚动到相对位置
    toPositon(key) {
      document.getElementById("scroll-content").scrollTo(0, this.positons[key] ? this.positons[key].y : 0)
    },
    //保存位置信息
    savePositon(key) {
      console.log(document.getElementById("scroll-content").scrollTop)
      this.positons[key] = {
        y: document.getElementById("scroll-content") && document.getElementById("scroll-content").scrollTop
      }
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
  .tab_item_page {
    position: absolute;
    width: 100%;
    top: 0px;
    right: 0px;
  }
  .icon_tabs {
    background-size: 100%;
  }
  .is-selected,
  .icon_tabs {
    transition: all ease .5s;
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
