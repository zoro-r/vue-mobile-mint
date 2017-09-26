<template>
  <section class="mineCom">
    <mt-header class="primary_bg" title="我的" :fixed="true">
      <mt-button slot="left">
        <img src="../../../static/img/icon/reminder.png" style="width:17px" alt="">
      </mt-button>
      <mt-button slot="right">
        <img src="../../../static/img/icon/set.png" style="width:20px" alt="">
      </mt-button>
    </mt-header>
    <section class="content " style="margin-top:39px">
      <section class="header primary_bg">
        <div class="left">
          <img src="../../../static/img/header.jpg" alt="">
        </div>
        <section class="title">
          <h3 class="fn-16">刘德华</h3>
          <span class="fn-13">13771162599</span>
        </section>
        <div class="right">
          <img src="../../../static/img/icon/right-w.png" alt="">
        </div>
      </section>
      <div class="content-tabs">
        <div>
          <h3>0.00
            <span class="fn-10">元</span>
          </h3>
          <span>钱包</span>
        </div>
        <div>
          <h3>1
            <span class="fn-10">个</span>
          </h3>
          <span>优惠</span>
        </div>
        <div>
          <h3>303
            <span class="fn-10">分</span>
          </h3>
          <span>积分</span>
        </div>
      </div>
      <br/>
      <section class="content-list">
        <mt-cell is-link :title="item.title" v-for="item in list" :key="item.text">
          <span>{{item.text}}</span>
          <img slot="icon" :src="item.img" width="20" height="20">
        </mt-cell>
      </section>
    </section>
    <br/>
    <section class="content-list">
      <mt-cell is-link :title="item.title" v-for="item in list_two" :key="item.text">
        <span>{{item.text}}</span>
        <img slot="icon" :src="item.img" width="20" height="20">
      </mt-cell>
    </section>
    <br/>
    <section class="content-list">
      <mt-cell is-link :title="item.title" v-for="item in list_three" :key="item.text">
        <span>{{item.text}}</span>
        <img slot="icon" :src="item.img" width="20" height="20">
      </mt-cell>
    </section>
  </section>
  </section>
</template>
<script type="text/babel">
export default {
  name: "mineCom",
  data() {
    return {
      list: [
        {
          title: "收货地址",
          text: "",
          img: "../../../static/img/mine/address.png"
        },
        {
          title: "我的收藏",
          text: "",
          img: "../../../static/img/mine/heat.png"
        }
      ],
      list_two: [
        {
          title: "推荐有奖",
          text: "5元现金",
          img: "../../../static/img/mine/gift.png"
        },
        {
          title: "积分商城",
          text: "0元好物在这里",
          img: "../../../static/img/mine/shopping.png"
        },
        {
          title: "每日精选",
          text: "全场包邮一元起",
          img: "../../../static/img/mine/xing.png"
        },
        {
          title: "饿了么联名卡",
          text: "免费领超级会员",
          img: "../../../static/img/mine/bank card.png"
        },
        {
          title: "免费流量",
          text: "每月最高500m",
          img: "../../../static/img/mine/phone.png"
        }
      ],
      list_three: [
        {
          title: "服务中心",
          text: "",
          img: "../../../static/img/mine/hua.png"
        },
        {
          title: "欢迎评分",
          text: "",
          img: "../../../static/img/mine/zan.png"
        },
        {
          title: "加盟合作",
          text: "",
          img: "../../../static/img/mine/dianpu.png"
        }
      ]
    };
  },
  components: {
  },
  methods: {
    hide() {
      this.$store.commit('SHOW_FOOTER', !this.$store.state.common.hasFooter)
    }
  }
};
</script>
<style lang='scss'>
$hei:65px;
.mineCom {
  .content-list {
    .mint-cell-value {
      span {
        font-size: 13px;
      }
    }
  }
  .content {
    .content-tabs {
      // align-items: center;
      // min-height: $hei;
      display: flex;
      background-color: white;
      div {
        padding: 12px 0px;
        text-align: center; // display: flex;
        // align-items: center;
        // height: $hei;
        text-align: center;
        border-right: 1px solid rgb(229, 229, 229);
        flex: 1;
        h3 {
          font-size: 20px;
          color: rgb(244, 180, 21);
        }
        &:last-child {
          border-right: none;
        }
      }
    }
    .header {
      min-height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      .left {
        flex: .5;
        text-align: left;
        img {
          width: 50px;
          height: 50px;
          margin-left: 20px;
          border-radius: 50%;
        }
      }
      .title {
        flex: 1;
        color: white;
      }
      .right {
        flex: .5;
        text-align: right;
        img {
          width: 16px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
