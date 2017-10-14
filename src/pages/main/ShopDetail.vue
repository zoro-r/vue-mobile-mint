<template>
  <page @scroll="onscroll" class="shopDetail">
    <div v-bind:style="{height:screenHeight + 60 + 'px'}" slot="content" ref="shopDetail">
      <div>
        <div class="shopDetail_header platfrom-header">
          <div @click="back" class="back">
            <img style="width:16px;margin-top:10px" src="../../../static/img/icon/left-w.png" />
          </div>
          <div class="heard_content">
            <img src="../../assets/img/shop/1.jpeg" alt="">
            <div class="detail">
              <h2>最高鸡秘（永泰路）</h2>
              <span> 蜂鸟快送/42分钟到达/配送费￥3</span>
              <span>
                本店食品均为现做,制作+外送都需要消耗时间,为了你能及时用餐,请提前三十分钟预定，避免高峰期等待时间长,阴雨天气会延长一些! 投诉电话：13761960768 2016年9月
              </span>
            </div>
          </div>
          <div class="youhui fn-12">
            <span class="man">满50减9，满80减14</span>
            <div class="huodong">2个活动
              <img src="../../../static/img/icon/down-w.png" />
            </div>
          </div>
        </div>
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
export default {
  name: 'ShopDetail',
  components: {
    tabs, ShopDetailItem
  },
  data() {
    return {
      selected: '1',
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
    },
    //滚动区域
    _initScrollArea() {
      this.meunScrollR = new BScroll(this.$refs.shopDetail, {
        click: true,
        probeType: 3,
        bounce: false
        // scrollbar: true
      });
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
  .shopDetail_header {
    color: $bg-color;
    padding: 0px $pd-md;
    width: 100%;
    min-height: 120px;
    background-color: rgb(182, 182, 182);
    .back {
      min-height: 35px;
    }
    .heard_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: $height;
        height: $height;
      }
      .detail {
        // flex: 1;
        width: calc(100% - 70px);
        span {
          width: 100%;
          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: $fn-tn;
        }
      }
    }
    .youhui {
      padding-top: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .man {
        &::before {
          content: "满";
          background: red;
          width: 20px;
          box-sizing: border-box;
          margin-right: $pd-md/2;
        }
      }
      .huodong {
        display: flex;
        align-items: center;
        img {
          width: 8px;
          transform: rotate(-90deg)
        }
      }
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
