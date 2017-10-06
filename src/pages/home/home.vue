<template>
  <section class="main_page">
    <!-- 子页面 -->
    <transition :name="'slideInRight'">
      <navigation>
        <router-view style="min-height:600px"></router-view>
      </navigation>
    </transition>
    <!-- 模块区域 -->
    <!-- v-bind:class="[$store.state.common.hasFooter?'has-footer':'']" v-bind:style="{'overflow-y':isScroll? 'auto':'hidden'}" class="child-view scroll_content" -->
    <section v-show="$store.state.common.isHome" v-bind:style="{height:screenHeight - 55 +'px'}">
      <!-- <swiper :options="swiperOption">
            <swiper-slide>
              <div class="dsadasds">
                <mainCom></mainCom>
              </div>
            </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
          </swiper> -->
      <transition :name="$parent.transitionName">
        <section v-show="$parent.selected == 1" class="tab_item_page scroll_content">
          <mainCom></mainCom>
        </section>
      </transition>
      <transition :name="$parent.transitionName">
        <section v-show="$parent.selected == 2" class="tab_item_page scroll_content">
          <searchCom></searchCom>
        </section>
      </transition>
      <transition :name="$parent.transitionName">
        <section v-show="$parent.selected == 3" class="tab_item_page scroll_content">
          <orderCom></orderCom>
        </section>
      </transition>
      <transition :name="$parent.transitionName">
        <section v-show="$parent.selected == 4" class="tab_item_page scroll_content">
          <minCom></minCom>
        </section>
      </transition>
    </section>
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
      swiperOption: {
        // effect: 'cube',
        // grabCursor: true,
        // cube: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94
        // }
      },
      isScroll: true,
      // $parent.transitionName: "slideInRight",
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

  },
  methods: {
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
  // .swiper-inner {
  //   position: relative;
  //   overflow: hidden;
  // }
  // .swiper-container {
  //   width: 100%!important;
  //   height: 100%;
  //   position: absolute;
  // }
  // .swiper-slide {
  //   // background-position: center;
  //   // background-size: cover;
  // }
  .tab_item_page {
    position: absolute;
    width: 100%;
    height: 100%;
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
