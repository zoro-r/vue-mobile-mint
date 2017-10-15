<template>
  <page @scroll="onscroll" class="shopDetail">
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
    </div>
    <footer slot="footer" class="shopDetail_footer">
      <div class="gouwuc">
        <div class="car">
          <img src="../../assets/img/shop/shopping-cart-w.png" alt="">
        </div>
      </div>
      <div class="content">
        <h2>￥24</h2>
        <span>配送费￥5</span>
      </div>
      <div @click="go('shopPay')" class="jiesuan">去结算</div>
    </footer>
  </page>
</template>
<script>
import tabs from '../../components/common/Tabs'
import ShopDetailItem from './components/ShopDetailItem'
import BScroll from 'better-scroll'
import ShopDetailHeader from './components/ShopDetailHeader'
export default {
  name: 'ShopDetail',
  components: {
    tabs,
    ShopDetailItem,
    ShopDetailHeader
  },
  data() {
    return {
      selected: '1',
      top: 0,
      left: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  },
  methods: {
    hidePop() {
      this.$store.commit('POP_STATUS', false)
    },
    //监听 页面滚动
    onscroll(el, pos) {
      console.log(pos.top)
      // this.$store.commit('NO_SCROLL', pos.top > 80)
      if (Math.abs(pos.top) > 10) {
        console.log(32132)
      }
    },
    //滚动区域
    _initScrollArea() {
      this.meunScrollR = new BScroll(this.$refs.shopDetail, {
        click: true,
        probeType: 3,
        bounce: false
        // scrollbar: true
      });
      this.meunScrollR.on("scroll", pos => {
        this.top = parseInt(pos.y)
        console.log(this.top)
        if (Math.abs(pos.y) > 127) {
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
    min-height: $FooterHeight;
    background: rgb(61, 61, 63);
    position: fixed;
    bottom: 0px;
    width: 100%;
    display: flex;
    color: white;
    align-items: center;
    .gouwuc {
      flex: .4;
      .car {
        position: absolute;
        width: $FooterHeight;
        height: $FooterHeight;
        margin-top: -30px;
        left: 15px;
        background: $primary-color;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid rgba(1, 1, 1, .7);
        img {
          width: 20px;
        }
      }
    }
    .content {
      flex: 1;
      span {
        font-size: $fn-tn;
      }
    }
    .jiesuan {
      flex: .5;
      background-color: $primary-green;
      height: $FooterHeight;
      width: 100%;
      text-align: center;
      line-height: $FooterHeight;
      font-size: $fn-md;
      font-weight: 400;
    }
  }
  .shopDetail_content {
    // height: 600px;
  }
}
</style>
