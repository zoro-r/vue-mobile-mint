<template>
  <div class="shop_detail_item">
    <div class="scroll">
      <div v-bind:style="{height:screenHeight - scrollHeight + 'px'}" class="wrapper left" ref="wrapper_left">
        <ul class="content">
          <li class="menu_item" v-bind:class="[foot_index == index?'current':'']" @click="toFood($event,index)" v-for="(item,index) in list_left" :key="index">{{item}}</li>
        </ul>
      </div>
      <div v-bind:style="{height:screenHeight - scrollHeight + 'px'}" class="wrapper right" ref="wrapper_right">
        <ul class="content">
          <div class="foods_item" v-for="(item,index) in list_right" :key="index">
            <span class="title">
              <font class="biaoti">{{item.title}}</font>大家喜欢吃，才叫真好吃。
            </span>
            <div class="item_detail" v-for="(it,index) in item.list" :key="index">
              <button @click.stop="$parent.$parent.showDetail(it)" v-bind:style="{'background-image':'url('+it.img+')'}" class="h_img">
                <!-- <img :src="it.img" :alt="it.name" /> -->
              </button>
              <div class="content">
                <span class="d_title">{{it.name}}</span><br/>
                <span>{{it.title}}</span>
                <div class="down">
                  <span class="price" v-html="it.price"></span>
                  <div class="add_content">
                    <div v-bind:style="{width:it.count>0?'50px':'0px'}" style="transition: all .25s linear;">
                      <div style="height:20px;overflow:hidden;">
                        <mt-button @click.stop="$parent.$parent.addToCar($event,it)" type="primary" class="add_button" plain>-</mt-button>
                        <span class="fn-12" v-html="it.count"></span>
                      </div>
                    </div>
                    <mt-button @click.stop="$parent.$parent.addToCar($event,it,'add')" class="add_button" type="primary">+</mt-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import BScroll from 'better-scroll'
export default {
  name: "shop_detail_item",
  components: {
  },
  data() {
    return {
      scrollHeight: (this.isMobile ? 20 : 32),
      scroll_right: [],
      list_left: ['红包', '汉堡小子', '汉堡类', '养生粥', '小吃类', '手抓饼', '奶茶类', '果汁类', '甜品类', '冰品类', '套餐类', '汤', '主食', '酒水', '老板娘', '川菜', '健康时蔬', '包子', '油条', '烤猪'],
      list_right: [],
      foot_index: 0,
      needChange: true
    };
  },
  methods: {
    /**
     * 跳转到商品
     */
    toFood(event, index) {
      console.log("我点击了")
      let el = this.scroll_right[index].el;
      this.needChange = false;
      this.meunScrollR.scrollToElement(el, 200)
      setTimeout(() => {
        this.foot_index = index;
        this.needChange = true;
      }, 200);
    },
    /**
     * 添加到购物车
     */
    add(el, it) {
      console.log(it)
      // it.count++;
      this.$parent.$parent.addToCar(el, it, 'add')
    },
    /**
    * 减去
    */
    minus(el, it) {
      // it.count--;
      this.$parent.$parent.addToCar(el, it)
    },
    /**
     * 初始化滚动数据
     */
    _initScrollData() {
      let foodsList = this.$refs.wrapper_right.getElementsByClassName('foods_item');
      let height = 0;
      for (let i = 0; i < foodsList.length; i++) {
        height += foodsList[i].scrollHeight;
        this.scroll_right.push({
          index: i,
          el: foodsList[i],
          top: height - foodsList[i].scrollHeight,
          bottom: height
        })
      }
    },
    //初始化滚动区域
    _initScrollArea() {
      this.meunScrollL = new BScroll(this.$refs.wrapper_left, {
        click: true,
        probeType: 3,
        // scrollbar: true
      });
      this.meunScrollR = new BScroll(this.$refs.wrapper_right, {
        click: false,
        probeType: 3,
        // scrollbar: true
      });
      this.meunScrollL.on('scroll', (pos) => {
        if (pos.y > 0) {
          this.$parent.$parent._enable()
        }
      })
      this.meunScrollR.on('scroll', (pos) => {
        if (pos.y > 0) {
          this.$parent.$parent._enable()
        }
        let top = Math.abs(parseInt(pos.y))
        for (let i = 0; i < this.scroll_right.length; i++) {
          if (top > this.scroll_right[i].top && top < this.scroll_right[i].bottom) {
            this.needChange && (this.foot_index = this.scroll_right[i].index)
          }
        }
      });
      // this._disable()
    },
    //禁用
    _disable() {
      this.meunScrollR.disable();
      this.meunScrollL.disable();
    },
    //启动
    _enable() {
      this.meunScrollR.enable();
      this.meunScrollL.enable();
    }
  },
  watch: {
    //控制左边菜单栏的滚动
    foot_index(newVal) {
      this.meunScrollL.scrollToElement(this.$refs.wrapper_left.getElementsByClassName('menu_item')[newVal], 800, 0, -100)
    },
    ['$store.state.common.noScroll'](newVal) {
      newVal ? this._enable() : this._disable();
    }
  },
  mounted() {
    for (let i = 0; i < this.list_left.length; i++) {
      let tempList = [];
      for (let i = 1; i < 8; i++) {
        tempList.push({
          img: require("../../../assets/img/shop/" + i + ".jpeg"),
          title: "月销321份，好评率100%",
          name: "炸鸡，啤酒",
          price: "<font class='fn-10'>￥</font>3.5",
          count: 0,
          id: i
        })
      }
      this.list_right.push({
        title: this.list_left[i],
        list: tempList
      })
    }
    //初始化数据
    this.$nextTick(() => {
      this._initScrollArea();
    })
    setTimeout(() => {
      this._initScrollData();
    }, 200);
  }
};
</script>
<style lang="scss" scoped>
@import 'src/assets/css/vars';
.shop_detail_item {
  .scroll {
    color: $emphasize-color;
    display: flex;
    .left {
      flex: 0 0 80px;
      .current {
        background: white;
        color: $title-color;
      }
      li {
        height: 45px;
        color: $emphasize-color;
        justify-content: center;
      }
    }
    .right {
      background: $white-color;
      flex: 1;
      .foods_item {
        min-height: 140px;
        color: $emphasize-color;
        padding: $pd-md;
        .title {
          display: flex;
          font-size: $fn-sm;
          border-bottom: 1px solid $divider-color;
          height: 30px;
          align-items: center;
          .biaoti {
            color: black;
            font-size: $fn-md;
            margin: 4px;
          }
        }
        .item_detail {
          min-height: 100px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid $divider-color;
          .h_img {
            width: 80px;
            height: 80px;
            border: none;
            background-size: 100% 100%;
          }
          .content {
            flex: 1;
            height: 100%;
            padding-left: 5px;
            .d_title {
              font-size: $fn-md;
              color: $title-color;
              margin-bottom: 5px;
            }
            .down {
              display: flex; //
              justify-content: space-between;
              align-items: center;
              margin-top: 5px;
              padding-right: 8px;
              .price {
                color: $warning-color;
                font-size: $fn-md;
              }
            }
          }
        }
      }
    }
    .wrapper {
      // .bscroll-indicator {
      //   border: none!important;
      //   width: 3px!important;
      //   right: 0px;
      // }
      position: relative;
      bottom: 0;
      overflow: hidden;
      ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px;
        padding-bottom: 10px;
        &::after {
          display: block;
          content: "";
          height: 110px;
        }
        .menu_item {
          height: 70px;
          font-size: $fn-md;
          border-bottom: 1px solid $divider-color;
          display: flex;
          width: 100%;
          text-align: center;
          align-items: center;
        }
      }
    }
  }
}
</style>

