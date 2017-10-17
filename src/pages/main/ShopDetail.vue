<template>
  <page class="shopDetail">
    <div slot="header">
      <mt-header v-bind:style="{'background-color': 'rgba(38, 162, 255,'+Math.abs(0)/50+')'}" :fixed="true">
        <mt-button @click="back" slot="left" icon="back"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <h2 class="title" v-bind:class="[isMobile?'mobileTitle':'']" v-bind:style="{'top':Math.abs(top)>105?'10px':50 + top*.38 + 'px','margin-left': Math.abs(top)>40?'-18px': - Math.abs(top*.3)+'px'}">江氏国际宇宙大酒店</h2>
    </div>
    <div v-bind:style="{height:screenHeight + 60 + 'px'}" slot="content" ref="shopDetail">
      <div>
        <ShopDetailHeader :top="top" />
        <!-- 内容区域 -->
        <div class="text_content">
          <!-- 顶部切换导航栏 -->
          <tabs :tabs="['商品','评价','店铺']"></tabs>
          <!-- 中间内容区域 -->
          <div class="shopDetail_content">
            <shop-detail-item />
          </div>
          <!-- 底部导航 -->
        </div>
      </div>
      <detailPop />
    </div>
    <div slot="footer" class="shopDetail_footer">
      <ShopCar ref="shopCar"></ShopCar>
    </div>
  </page>
</template>
<script>
import tabs from '../../components/common/Tabs'
import ShopDetailItem from './components/ShopDetailItem'
import BScroll from 'better-scroll'
import ShopDetailHeader from './components/ShopDetailHeader'
import ShopCarA from './components/ShopCar'
export default {
  name: 'ShopDetail',
  components: {
    detailPop: r => { require.ensure([], () => r(require('./components/components/DetailPop')), 'DetailPop') },
    tabs,
    ShopDetailItem,
    ShopDetailHeader,
    ShopCar: ShopCarA
  },
  data() {
    return {
      detail: {},
      detailPop: false,
      selected: '1',
      top: 0,
      left: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  },
  methods: {
    showDetail(item) {
      this.detailPop = true;
      this.detail = item;
    },
    hidePop() {
      this.$store.commit('POP_STATUS', false)
    },
    //监听 页面滚动
    addToCar(el, item, type) {
      type == 'add' ?
        this.$refs.shopCar.drop(el, item) :
        this.$refs.shopCar.minus(item);
    },
    //滚动区域
    _initScrollArea() {
      this.meunScrollR = new BScroll(this.$refs.shopDetail, {
        click: true,
        tab: true,
        probeType: 3,
        bounce: false
        // scrollbar: true
      });
      this.meunScrollR.on("scroll", pos => {
        this.top = parseInt(pos.y)
        let heght = this.isMobile ? 119 : 99;
        if (Math.abs(pos.y) > heght) {
          this.meunScrollR.disable();
        }
      })
    },
    //启动
    _enable() {
      setTimeout(() => {
        this.meunScrollR.enable();
      }, 0);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScrollArea();
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/assets/css/vars';
$height:60px;
$FooterHeight:45px;
.shopDetail {
  position: relative;
  bottom: 0;
  overflow: hidden;
  .title {
    position: absolute;
    top: 46px;
    padding: 3px;
    left: 100px;
    font-size: 14px;
    z-index: 11;
    color: rgb(255, 255, 255);
    &.mobileTitle {
      // top: 60px;
      padding-top: 20px;
    }
  }
  .shopDetail_footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
}
</style>
