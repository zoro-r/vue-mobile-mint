<template>
  <section class="locationPop">
    <mt-popup v-model="$store.state.common.popObj.locationPop" position="bottom" class="mint-popup" :modal="true">
      <section class="primary_bg header">
        <div class="x">
          <div @click="close" class="left">
            <img src="static/img/icon/close.png" alt="">
          </div>
          <h3 class="title fn-16">选择收货地址</h3>
          <span class="right fn-15">新增地址</span>
        </div>
        <div class="x">
          <div class="left fn-13">
            上海市 <img src="static/img/icon/down-w.png" style="width:10px;height:auto;text-align:center" alt="">
          </div>
          <div class="title" style="flex:2;text-align:center">
            <input type="text" placeholder="请输入地址" />
            <mt-button class="fn-13">搜索</mt-button>
          </div>
        </div>
      </section>
      <section class="scroll-content" style="margin-top:82px;background:rgb(220,220,220)">
        <div v-for="(item,index) in data" :key="index" class="list-item">
          <p class="fn-13">
            浦江·世博家园十街坊联航路1325弄33号221室一号房间的
          </p>
          <span class="fn-11">
            刘德华 13771162366
          </span>
        </div>
      </section>
    </mt-popup>
  </section>
</template>
<script >
export default {
  data() {
    return {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };
  },
  components: {
  },
  methods: {
    /**
     *
     */
    close() {
      this.$store.commit('POP_STATUS_L', false)
    }
  },
  watch: {
  },
  mounted() {
  }
};
</script>
<style lang='scss'>
.locationPop {
  .list-item {
    min-height: 50px;
    background: white;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 10px;
    p {
      margin: 0px;
      &::before {
        content: "家";
        color: #f86365;
        border: 1px solid #f86365;
        padding: 0px 5px;
        font-size: 10px;
        border-radius: 3px;
      }
    }
  }
  .header {
    top: 0px;
    position: fixed;
    width: 100%;
    min-height: 80px;
    div {
      color: white;
      height: 40px;
      display: flex;
      align-items: center;
      .left {
        flex: .5;
        img {
          height: 20px;
          margin: 0px 5px;
        }
      }
      .title {
        flex: 1;
        text-align: center;
        input {
          width: 90%;
          height: 65%;
          border-radius: 2px;
          border: none;
          padding: 0px 25px;
          background-image: url('../../../../static/img/icon/search1.png');
          background-repeat: no-repeat;
          background-position-y: center;
          background-size: 15px;
          background-position-x: 5px;
        }
        button {
          min-width: 60px;
          color: white;
          height: 30px;
          background: rgba(1, 1, 1, 0);
          border: none;
          box-shadow: 0 0 0px #b8bbbf;
        }
      }
      .right {
        flex: .5;
        text-align: right;
        margin: 0px 5px;
        font-weight: 200;
      }
    }
  }
}
</style>
