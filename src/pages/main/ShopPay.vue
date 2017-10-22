<template>
  <page @scroll="scroll" class="shopPay">
    <div v-bind:style="{height:95 + mobile - top +'px'}" slot="header" class="shop_content primary_bg platfrom-header">
      <div @click="choose" class="shopheader">
        <div class="back_btn" @click.stop="back">
          <img src="../../../static/img/icon/left-w.png" />
        </div>
        <h2 v-bind:style="{opacity:(27-top)/27}">订单配送至</h2>
        <div v-bind:style="{top:22 + mobile - (top<32?top:32) + 'px'}" class="float_title">
          <h2>
            上海市普陀区200号101事大妹妹女士收
          </h2>
          <img v-bind:style="{opacity:(27-top)/27}" src="../../../static/img/icon/right-w.png" />
        </div>
        <h2 v-bind:style="{opacity:(27-top)/27}" class="info">刘德华 13771162366</h2>
      </div>
    </div>
    <div slot="content">
      <div class="msg">
        <div v-for="(item,index) in list" :key="index" style="min-height:50px;margin-top:10px">
          dada
        </div>
      </div>
    </div>
  </page>
</template>

<script>
export default {
  name: "shopPay",
  components: {},
  data() {
    return {
      title: "",
      top: 0,
      mobile: 20,
      list: [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1]
    };
  },
  methods: {
    //监听页面滚动
    scroll(el, pos) {
      console.log(pos);
      this.top = pos.top > 65 ? 65 : pos.top;
    },
    choose() {
      console.log(1);
    }
  },
  created() {
    this.mobile = this.isMobile ? 32 : 0;
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.shopPay {
  .back_btn {
    position: absolute;
    left: 12px;
    margin-top: 5px;
    img {
      width: 15px;
    }
  }
}

.shop_content {
  color: $white-color;
  .float_title {
    position: fixed;
    width: 100%;
    left: 10%;
    text-align: center;
    // pointer-events: none;
    width: 80%;
    white-space: nowrap;
    display: flex;
    height: 40px;
    align-items: center;
    img {
      flex: 0 0 15px;
      width: 15px;
      height: 15px;
    }
    h2 {
      flex: 1;
    }
  }
  .shopheader {
    width: 100%;
    height: 100%;
    // min-height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    h2,
    .float_title {
      font-size: $fn-lg;
      &.info {
        font-size: $fn-md;
      }
    }
  }
}
</style>
