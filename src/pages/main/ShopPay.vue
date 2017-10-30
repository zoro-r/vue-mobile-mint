<template>
	<page @scroll="scroll" class="shopPay" :hasfooter="true">
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
		<div class="msg_content" slot="content">
			<div class="time">
				<div class="left">
					<h2>尽快送达【预计15：33】</h2>
					<div>
						<span style="color:white" class="primary_bg">蜂鸟专送</span>
						<span class="primary_border">准时达</span>
						<span>超时十分钟享赔付</span>
					</div>
				</div>
				<img src="../../../static/img/icon/right.png" alt="">
			</div>
			<div class="order">
				<h2 class="title">
					<font>CoCo都可（灵岩南路店）</font>
				</h2>
				<div v-for="(item,index) in list" :key="index" class="order_item">
					<div class="left">
						<h2>
							<font>{{item.name}}</font>
							<font>X{{item.num}}</font>
						</h2>
						<span>{{item.label}}</span>
					</div>
					<div class="right">
						<h2>￥{{item.price}}</h2>
					</div>
				</div>
				<div class="peisong order_item">
					<div class="left">
						<h2>
							配送费
						</h2>
					</div>
					<div class="right">
						<h2>￥22</h2>
					</div>
				</div>
			</div>
		</div>
		<div slot="footer">
			<div class="pay_footer">
				<div class="left primary_bg_gray">￥28</div>
				<div class="right">去支付</div>
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
      list: [
        {
          name: "奶茶三兄弟/大杯",
          num: 1,
          label: "奶茶三兄弟/大杯/加冰",
          price: "12"
        },
        {
          name: "奶茶三兄弟/大杯",
          num: 1,
          label: "奶茶三兄弟/大杯/加冰",
          price: "12"
        },
        {
          name: "奶茶三兄弟/大杯",
          num: 1,
          label: "奶茶三兄弟/大杯/加冰",
          price: "12"
        },
        {
          name: "奶茶三兄弟/大杯",
          num: 1,
          label: "奶茶三兄弟/大杯/加冰",
          price: "12"
        },
        {
          name: "奶茶三兄弟/大杯",
          num: 1,
          label: "奶茶三兄弟/大杯/加冰",
          price: "12"
        }
      ]
    };
  },
  methods: {
    //监听页面滚动
    scroll(el, pos) {
      // console.log(pos);
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
    left: 0px;
    height: 50px;
    top: 0px;
    width: 50px;
    margin-top: 5px;
    img {
      width: 15px;
      margin-left: 10px;
      margin-top: 30px;
    }
  }
}

.msg_content {
  padding: 0px $pd-md 120px $pd-md;
  .order {
    background: $white-color;
    margin: $mg-lg 0px;
    min-height: 80px;
    .title {
      text-align: center;
      width: 100%;
      padding: 10px;
      font {
        &::before {
          content: "-------";
          color: $divider-color;
          margin-right: 10px;
        }
        &::after {
          content: "-------";
          color: $divider-color;
        }
      }
    }
    .order_item {
      padding: $pd-md;
      display: flex;
      .left {
        flex: 1;
        h2 {
          font-size: $fn-lg;
          padding: 8px 0px;
          display: flex;
          justify-content: space-between;
        }
        span {
          font-size: $fn-sm;
          color: $description-color;
        }
      }
      .right {
        flex: 0 0 80px;
        h2 {
          font-size: $fn-lg;
          padding: 8px 0px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
    .peisong {
      border-top: 1px dotted $divider-color;
    }
  }
  .time {
    padding: 10px $pd-lg;
    height: 80px;
    display: flex;
    align-items: center;
    background: $white-color;
    .left {
      flex: 1;
      h2 {
        font-size: $fn-lg;
        padding: 8px 0px;
      }
      div {
        color: $primary-color;
        span {
          padding: 2px;
        }
      }
    }
    img {
      flex: 0 0 30px;
      width: 30px;
      height: 30px;
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
