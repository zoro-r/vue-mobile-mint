<template>
  <section @click="$parent.toShopList(231312)" class="shopItem primary_mg">
    <section class="left">
      <lazy-image :src="'static/img/shop/2.jpeg'" :placeholder="loaddingImg" />
    </section>
    <section class="right">
      <div class="shop_detail">
        <section class="index_1 primary_flex_center">
          <h2 class="isp">
            <span class="fn-12" style="font-weight:700;color:black">上海麦当劳瞿溪路餐厅十一号接到的小刘</span>
          </h2>
          <section class="index_right">
            <span>保</span>
            <span>票</span>
          </section>
        </section>
        <section class="index_1 primary_flex_center">
          <h2 class=" fn-c">
            <Star :score="7"></Star>
            <span>3.5</span>
            <span>月售3615单</span>
          </h2>
          <section class="index_right">
            <span class="primary_bg fn-8" style=" color: white;border:none;padding:2px;border-redius:3px">
              蜂鸟专送
            </span>
          </section>
        </section>
        <section class="index_1 primary_flex_center">
          <h2>
            <span>¥40起送</span>
            <span class="has_before">配送费¥5</span>
          </h2>
          <section class="index_right">
            <span class="c_span">20m</span>
            <span class="c_span has_before">3分钟</span>
          </section>
        </section>
      </div>
      <!-- 第二列 -->
      <div class="shop_detail" style="border:none;padding-top:5px;height:auto;">
        <section @click.stop="down=!down" class="index_1 primary_flex_center">
          <h2>
            <span class="shou">首</span>
            <span>新用户下单立减17.0元</span>
          </h2>
          <section class="index_right ">
            <span class="showac fn-10 primary_flex_center" style="border:none">
              4个活动
              <img v-bind:class="[down?'':'fz']" class="icon-10 icon_img" src="static/img/icon/down.png" />
            </span>
          </section>
        </section>
        <section class="index_1 primary_flex_center">
          <h2>
            <span class="jian">减</span>
            <span>满70减5</span>
          </h2>
        </section>
        <!-- <transition name="show-hide"> -->
        <section v-bind:style="{height: down?'0px':4 * 1.7+.5+'rem'}" class="transition_3">
          <section class="index_1 primary_flex_center">
            <h2>
              <span class="te">品</span>
              <span>蜀地冒菜</span>
            </h2>
          </section>
          <section class="index_1 primary_flex_center">
            <h2>
              <span class="te">满</span>
              <span>满120.0元赠送大可乐或雪碧1份，满70.0元赠送荔枝汁1份</span>
            </h2>
          </section>
          <section class="index_1 primary_flex_center">
            <h2>
              <span class="zeng">折</span>
              <span>折扣活动</span>
            </h2>
          </section>
          <section class="index_1 primary_flex_center">
            <h2>
              <span class="zeng">折</span>
              <span>折扣活动</span>
            </h2>
          </section>
        </section>
        <!-- </transition> -->
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ShopItem',
  components: {
    Star: r => { require.ensure([], () => r(require('../../../components/common/star/Star.vue')), 'Star') }
  },
  data() {
    return {
      down: true
    }
  },
  methods: {
    /**
     * 跳转到商家详情
     */
    toShop() {
      console.log("去商家详情");
      this.$parent.toShopList(231312);
    }
  }
}
</script>
<style lang="scss">
$height_size:5.5rem;
.shopItem {
  overflow: hidden;
  padding-bottom: 0px;
  position: relative;
  border-bottom: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  color: rgb(102, 102, 102);
  list-style: none;
  display: flex;
  justify-content: space-between;
  .left {
    // width: 30%;
    img {
      width: $height_size;
      height: $height_size;
    }
  }
  .right {
    width: 75%;
    .shop_detail {
      height: $height_size+.5rem;
      border-bottom: 1px dashed rgb(168, 168, 168);
      .has_before::before {
        content: "|";
        color: gray;
        margin: 0 5px;
      }
      .index_1 {
        margin-bottom: 5px;
        justify-content: space-between;
        h2 {
          width: 65%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .9rem;
          font-weight: 200;
          &::last-of-type {
            margin-bottom: 5px;
          }
        }
        .isp::before {
          content: "品牌";
          background: linear-gradient(-139deg, rgb(255, 241, 0), rgb(255, 227, 57));
          margin-right: .22rem;
          font-size: 1rem;
          padding: .3rem;
          border-radius: .5rem;
          width: .3rem;
          color: rgb(111, 63, 21)
        }
        .index_right {
          span {
            padding: .1rem;
            border-radius: .1rem;
            color: rgb(153, 153, 153);
            border: 1px solid rgb(221, 221, 221);
          }
          .c_span {
            border: none;
            padding: 0rem;
          }
          .showac {
            .icon_img {
              margin-left: 3px;
              transition: all linear .5s;
            }
            .fz {
              transform: rotateZ(180deg);
            }
          }
        }
      }
    }
  }
}
</style>

