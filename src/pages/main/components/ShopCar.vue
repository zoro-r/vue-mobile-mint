<template>
  <div class="shop_car">
    <div @click="$parent.$parent.detailPop = !$parent.$parent.detailPop" v-show="$parent.$parent.detailPop" class="shade_modal_bottom"></div>
    <div @click="clickTime!=0&&(show=!show)" v-if="show" class="shade_modal"></div>
    <div class="ads fn-9">满25减12，满45减18，满80减28</div>
    <div v-bind:style="{height:show?(55*goods_list.length + 57) +'px':'0px'}" class="goods transition_3">
      <div class="goods_header">
        <span class="choose">已选商品</span>
        <div @click="clear" class="trash">
          <img src="../../../assets/img/shop/trash.png" alt=""> 清空
        </div>
      </div>
      <div class="goods_list">
        <div class="goods_item" v-for="(item,index) in goods_list" :key="index">
          <div class="left">
            <h2>{{item.name}}</h2>
            <span>通用</span>
          </div>
          <div class="money" v-html="item.price">
          </div>
          <div class="right">
            <div class="add_content">
              <div>
                <div style="height:20px;overflow:hidden;">
                  <mt-button @click="minus(item,index)" type="primary" class="add_button" plain>-</mt-button>
                  <span class="fn-12">{{item.count}}</span>
                </div>
              </div>
              <mt-button @click="drop" class="add_button" type="primary">+</mt-button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="ads fn-9">满25减12，满45减18，满80减28</div> -->
    </div>
    <div class="shop_footer">
      <div @click="clickTime!=0&&(show=!show)" class="gouwuc ">
        <div v-bind:class="[!isStart ?'bounceIn':'']" class="car animated">
          <img v-if="clickTime==0 && !isStart" src="../../../assets/img/shop/shop-cart-g.png" alt="">
          <img v-if="isStart" src="../../../assets/img/shop/shop-cart-bh.png" alt="">
          <img v-if="clickTime > 0 && !isStart" src="../../../assets/img/shop/shop-cart-b.png" alt="">
        </div>
      </div>
      <div class="content">
        <div v-if="clickTime>0">
          <h2 class="fn-20">
            <font class="fn-12">￥</font>{{clickTime}}</h2>
          <span class="fn-10">配送费
            <font class="fn-8">￥</font>5
          </span>
        </div>
        <h2 v-else class="fn-15" style="color:#999999">未选购商品</h2>
      </div>
      <div v-if="clickTime>0" @click="go('shopPay')" class="jiesuan ">去结算</div>
      <div v-else @click="go('shopPay')" class="jiesuan no">20元起送</div>
      <div>
        <div class="ball-container">
          <transition name="fade" v-for="(ball,index) in balls" :key="index" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopCar',
  components: {
  },
  data() {
    return {
      show: false,
      //动画是否开始
      isStart: false,
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: [],
      goods_list: [],
      clickTime: 0
    }
  },
  methods: {
    clear() {
      for (let i in this.goods_list) {
        this.goods_list[i].count = 0;
      }
      this.clickTime = 0;
      this.show = false;
    },
    minus(item, index) {
      item.count--;
      for (let i in this.goods_list) {
        console.log(this.goods_list[i].id)
        if (this.goods_list[i].id == item.id) {
          index = i;
        }
      }
      if (item.count <= 0) {
        this.goods_list.splice(index, 1)
      }
      this.clickTime--;
      if (this.clickTime == 0) {
        this.show = false;
      }
    },
    drop(el, item) {
      item.count++;
      this.clickTime++;
      let flag = false;
      for (let i = 0; i < this.goods_list.length; i++) {
        if (this.goods_list[i].id == item.id) {
          flag = true;
        }
      }
      !flag && (this.goods_list.push(item))
      this.isStart = true;
      // el = this.$refs.gouwuche;
      el = el.target;
      //触发一次事件就会将所有小球进行遍历
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if (!ball.show) { //将false的小球放到dropBalls
          ball.show = true;
          ball.el = el; //设置小球的el属性为一个dom对象
          this.dropBalls.push(ball);
          return;
        }
      }
    },

    beforeEnter(el) { //这个方法的执行是因为这是一个vue的监听事件
      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect(); //获取小球的相对于视口的位移(小球高度)
          let x = rect.left - 39;
          let y = -(window.innerHeight - rect.top - 30); //负数,因为是从左上角往下的的方向
          el.style.display = ''; //清空display
          el.style.webkitTransform = `translate3d(0,${y}px,0)`;
          el.style.transform = `translate3d(0,${y}px,0)`;
          //处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
          inner.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
    },

    enter(el, done) { //这个方法的执行是因为这是一个vue的监听事件
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight; //触发重绘html
      this.$nextTick(() => { //让动画效果异步执行,提高性能
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform = 'translate3d(0,0,0)';
        //处理内层动画
        let inner = el.getElementsByClassName('inner-hook')[0]; //使用inner-hook类来单纯被js操作
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
        el.addEventListener('transitionend', done); //Vue为了知道过渡的完成，必须设置相应的事件监听器。
      });
    },

    afterEnter(el) { //这个方法的执行是因为这是一个vue的监听事件
      console.log("事件完成")
      setTimeout(() => {
        this.isStart = false;
      }, 0);
      let ball = this.dropBalls.shift(); //完成一次动画就删除一个dropBalls的小球
      if (ball) {
        ball.show = false;
        el.style.display = 'none'; //隐藏小球
      }
    }
  },
}
</script>
<style lang="scss">
@import 'src/assets/css/vars';
$height_size:5.5rem;
$FooterHeight:45px;
.shop_car {
  .shade_modal_bottom {
    position: absolute;
    background: rgba(1, 1, 1, .2);
    bottom: 0px;
    height: $FooterHeight + 18px;
    width: 100%;
    z-index: 11;
  }
  .shade_modal {
    height: 900px;
    background: rgba(1, 1, 1, .2);
  }
  .ads {
    text-align: center;
    padding: 2px;
    background-color: $primary-warm;
    height: 18px;
  }
  .goods {
    background: white;
    overflow: hidden;
    max-height: 300px;
    .goods_header {
      height: 40px;
      background: $bg-color;
      display: flex;
      align-items: center;
      padding: 0px $mg-lg;
      justify-content: space-between;
      .trash {
        display: flex;
        font-size: 15px;
        align-items: center;
      }
      .choose {
        font-size: $fn-lg;
        display: flex;
        color: $emphasize-color;
        font-weight: 700;
        &::before {
          content: "";
          width: 3px;
          background: $primary-color;
          height: 22px;
          margin-right: 10px;
        }
      }
    }
    .goods_list {
      height: calc(100% - 58px);
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      .goods_item {
        display: flex;
        align-items: center;
        padding: 0px $mg-lg;
        border-bottom: 1px solid rgba(1, 1, 1, .05);
        height: 55px;
        .money {
          margin-right: 10px;
          color: $warning-color;
          font-size: $fn-hg;
        }
        .left {
          flex: 1;
          display: flex;
          flex-direction: column;
          h2 {
            font-size: $fn-lg;
            color: $emphasize-color;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
          }
          span {
            font-size: $fn-sm;
            color: $description-color-light;
          }
        }
        .right {
          flex: 0 0 70px;
        }
      }
    }
  }
  .shop_footer {
    min-height: $FooterHeight;
    background: rgb(61, 61, 63);
    width: 100%;
    display: flex;
    color: white;
    align-items: center;
    .gouwuc {
      flex: .45;
      .car {
        position: absolute;
        width: $FooterHeight+5px;
        height: $FooterHeight+5px;
        margin-top: -35px;
        left: 15px;
        background: $primary-grey;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid $primary-grey-light;
        z-index: 10;
        img {
          width: 35px;
        }
      }
    }
    .content {
      flex: 1;
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
      &.no {
        background: $primary-grey-light;
        color: $description-color;
      }
    }
    .ball-container {
      .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 30000;
        transition: all .6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        .inner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: $primary-color;
          transition: all .6s linear;
          z-index: 32131231;
        }
      }
    }
  }
}
</style>

