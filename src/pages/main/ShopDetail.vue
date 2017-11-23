<template>
  <page class="shopDetail">
    <div slot="header">
      <mt-header style="background-color: rgba(38, 162, 255,0)" :fixed="true">
        <mt-button @click="back" slot="left" icon="back"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <h2 class="title" v-bind:class="[isMobile?'mobileTitle':'']" v-bind:style="{'top':Math.abs(top)>105?'10px':40 + top*.30 + 'px','margin-left': Math.abs(top)>40?'-18px': - Math.abs(top*.3)+'px'}">江氏国际宇宙大酒店</h2>
    </div>

    <div v-if="showContent" v-bind:style="{height:screenHeight + 60 + 'px'}" slot="content" ref="shopDetail">
      <div>
        <div style="min-height:157px;">
          <ShopDetailHeader :top="top" />
        </div>

        <!-- 内容区域 -->
        <div class="text_content">
          <!-- 顶部切换导航栏 -->
          <div class="tabsss" >
            <tabs :tabs="['商品','评价4.5分']"></tabs>
          </div>

          <!-- 中间内容区域 -->
          <div v-bind:style="{height:screenHeight - scrollHeight + 'px'}" class="shopDetail_content">
            <shop-detail-item ref="shopDetailItem" />
          </div>
        </div>
      </div>
    </div>

		<!-- 底部导航 -->
    <div slot="footer" v-bind:style="{'z-index':zIndex}" class="shopDetail_footer">
      <ShopCar ref="shopCar"></ShopCar>
    </div>

		<!-- 商品详情弹出框 -->
    <div slot="other">
      <detailPop />
    </div>
  </page>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "ShopDetail",
  components: {
    detailPop: r => {
      require.ensure(
        [],
        () => r(require("./components/components/DetailPop")),
        "DetailPop"
      );
    },
    ShopDetailItem: r => {
      require.ensure(
        [],
        () => r(require("./components/ShopDetailItem")),
        "ShopDetailItem"
      );
    },
    ShopDetailHeader: r => {
      require.ensure(
        [],
        () => r(require("./components/ShopDetailHeader")),
        "ShopDetailHeader"
      );
    },
    ShopCar: r => {
      require.ensure([], () => r(require("./components/ShopCar")), "ShopCar");
    }
  },
  data() {
    return {
      showContent: false,
      scrollHeight: this.isMobile ? 20 : 32,
      detail: {},
      detailPop: false,
      zIndex: 2003,
      selected: "1",
      top: 0,
      left: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  methods: {
		/**
		 * 显示详情
		 */
    showDetail(item) {
      this.zIndex += 2;
      this.detailPop = true;
      this.detail = item;
		},
		/**
		 * 隐藏弹出框
		 */
    hidePop() {
      this.$store.commit("POP_STATUS", false);
    },
    //监听 页面滚动
    addToCar(el, item, type) {
      type == "add"
        ? this.$refs.shopCar.drop(el, item)
        : this.$refs.shopCar.minus(item);
    },
    /**@augments
		 * 滚动区域
		 */
    _initScrollArea() {
      this.meunScrollMain = new BScroll(this.$refs.shopDetail, {
        click: true,
        tab: true,
        probeType: 3,
        bounce: false
        // scrollbar: true
      });
      this.meunScrollMain.on("scroll", pos => {
        this.top = parseInt(pos.y);
        if (Math.abs(pos.y) > 99) {
          this.meunScrollMain.disable();
        } else {
          // this.$refs.shopDetailItem._enable()
        }
      });
    },
    /** 
		 * 启动 滚动
		 */
    _enable() {
      setTimeout(() => {
        this.meunScrollMain.enable();
      }, 0);
    }
  },
  mounted() {
		//页面初始化后 初始化滚动
    setTimeout(() => {
      this.showContent = true;
      this.$nextTick(() => {
        this._initScrollArea();
      });
    }, 300);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
$height: 60px;
$FooterHeight: 45px;
.shopDetail {
  background: url("../../assets/img/shop/loadding-bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  bottom: 0;
  overflow: hidden;
  .text_content {
    background: $white-color;
    .tabsss {
      box-shadow: 0px 2px 1px $divider-color;
      padding-right: 45%;
      height: 35px;
      margin-bottom: 1px;
    }
  }
  .title {
    position: absolute;
    top: 46px;
    padding: 3px;
    left: 100px;
    font-size: 15px;
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
		z-index: 2008;
  }
}
</style>
