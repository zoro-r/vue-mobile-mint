<template>
  <section class="orderItem">
    <div class="row" style="min-height:60px">
      <div class="shop_header">
        <img :src="value.img" alt="">
        <div class="shop_text">
          <h2 class="fn-16 fw-2">
            {{value.title}}
            <img src="../../../../static/img/icon/right.png" alt="">
          </h2>
          <span class="fn-c-memo-light">2017.11.23</span>
        </div>
      </div>
      <div class="order_state fn-13 fn-c-memo fw-2">
        订单已完成
      </div>
    </div>
    <div class="row">
      <div class="shop_header">
        <div class="shop_text">
          <span style="padding-left:60px" class="fn-c-memo"> {{value.content}}</span>
        </div>
      </div>
      <div class="order_state fn-13">
        ￥19.00
      </div>
    </div>
    <div class="row fw-2" style="justify-content: flex-end;">
      <mt-button class="fw-4" style="margin-right:10px;height:30px" plain size="small" type="primary">再来一单</mt-button>
      <mt-button class="fw-4" style="margin-right:10px;height:30px" plain size="small" type="danger">评价得190积分</mt-button>
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  name: "orderItem",
  data() {
    return {
      list: []
    };
  },
  props: {
    value: Object
  },
  components: {},
  methods: {
    hide() {
      this.$store.commit('SHOW_FOOTER', !this.$store.state.common.hasFooter)
    }
  }
};
</script>

<style lang='scss'>
@import 'src/assets/css/vars.scss';
.orderItem {
  min-height: 120px;
  .row {
    align-items: center;
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    // border-bottom: .5px solid #e5e5e5;
    box-shadow: 0 0 1px rgba(0,0,0,.11);
    .shop_header {
      flex: 2;
      display: flex;
      align-items: center;
      .shop_text {
        width: calc(100% - 83px);
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h2 {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          img {
            height: 15px;
            width: 15px; // top: -5px;
            // right: -15px;
            // position: absolute;
          }
        }
      }
      img {
        height: 40px;
        margin: 10px;
      }
    }
    .order_state {
      flex: .5; // flex: 0 0 100px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
