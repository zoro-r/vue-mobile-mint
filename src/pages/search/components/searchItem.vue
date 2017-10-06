<template>
  <div class="searchItem">
    <section class="search_header">
      <div class="item_header">
        <span class="line"></span>
        <div class="row main_text">
          <img v-if="type==1" src="../../../assets/img/mine/zan.png" />
          <img v-if="type==2" src="../../../assets/img/mine/pen.png" />
          <img v-if="type==3" src="../../../assets/img/mine/clock.png" />
          <h3 class="fn-15">{{label}}</h3>
        </div>
        <span class="line"></span>
      </div>
      <span class="fn-12">你的口味，我都懂得</span>
    </section>
    <div class="search_content">
      <div class="row">
        <div v-for="(item,index) in list" :key="index" class="col">
          <div class="img_bg" v-bind:style="{'background-image':'url('+item.img+')'}"></div>
          <span class="fn-13">{{item.content}}</span>
          <span class="fn-12">
            <font style="color:rgb(255, 83, 57)">￥28</font>
            <font class="fn-c-memo-light" style="text-decoration: line-through;">￥58</font>
          </span>
        </div>
      </div>
    </div>
    <div class="look_more">
      查看更多<img src="../../../../static/img/icon/right.png" />
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name: "searchItem",
  components: {
  },
  data() {
    return {
      list: [
        {
          title: "积分商城",
          img: require("../../../assets/img/mine/31.jpeg"),
          content: "蒜香鸡腿卤肉饭",
          color: "rgb(255, 151, 0)"
        },
        {
          title: "积分商城",
          img: require("../../../assets/img/mine/32.jpeg"),
          content: "三文鱼刺身",
          color: "rgb(255, 151, 0)"
        }, {
          title: "积分商城",
          img: require("../../../assets/img/mine/33.jpeg"),
          content: "海南鸡饭",
          color: "rgb(255, 151, 0)"
        }
      ]
    };
  },
  props: {
    label: String,
    type: Number
  },
  methods: {
  }
};
</script>
<style lang='scss'>
@import 'src/assets/css/vars.scss';
.searchItem {
  background-color: white;
  .look_more {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 15px;
    }
  }
  .search_content {
    .row {
      justify-content: space-around;
      .col {
        flex: 0 0 30%;
        border: 0px solid #e5e5e5;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        line-height: 20px;
        span {
          &:first-child {
            margin: 5px 5px;
          }
          text-align: left;
          width: 100%;
        }
        .img_bg {
          width: 100%;
          height: 105px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .search_header {
    padding: 15px 10px;
    text-align: center;
    min-height: 60px;
    .item_header {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20px;
        margin: 0px 5px;
      }
      .line {
        border-radius: 5px;
        width: 15px;
        display: block;
        border: .5px solid black;
      }
      .main_text {
        position: relative;
        padding: 0px 10px;
        &::before {
          content: "";
          left: 0px;
          border-radius: 50%;
          display: block;
          width: 5px;
          background: black;
          height: 5px;
          position: absolute;
          top: calc(50% - 2.5px);
        }
        &::after {
          content: "";
          right: 0px;
          border-radius: 50%;
          display: block;
          width: 5px;
          background: black;
          height: 5px;
          position: absolute;
          top: calc(50% - 2.5px);
        }
      }
    }
    span {
      color: $memo-color-light;
    }
  }
}
</style>
