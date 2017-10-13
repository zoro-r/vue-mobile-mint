<template>
  <section class="demo">
    <mt-header class="primary_bg" title="发现" style="position: sticky;top: 0px;" :fixed="true">
    </mt-header>
    <div class="scroll">
      <div class="wrapper left" ref="wrapper_left">
        <ul class="content">
          <li class="menu_item" v-bind:class="[foot_index == index?'current':'']" @click="toFood($event,index)" v-for="(item,index) in list_left" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="wrapper right" ref="wrapper_right">
        <ul class="content">
          <li class="foods_item" v-for="(item,index) in list_right" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script type="text/babel">
import BScroll from 'better-scroll'
export default {
  name: "demo",
  components: {
  },
  data() {
    return {
      scroll_right: [],
      list_left: [],
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
      this.foot_index = index;
      let el = this.scroll_right[index].el;
      this.needChange = false;
      this.meunScrolllR.scrollToElement(el, 200)
      setTimeout(() => {
        this.needChange = true;
      }, 200);
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
    }

  },
  watch: {
    //控制左边菜单栏的滚动
    foot_index(newVal) {
      this.meunScrollL.scrollToElement(this.$refs.wrapper_left.getElementsByClassName('menu_item')[newVal], 800, 0, -100)
    }
  },
  mounted() {
    for (let i = 0; i <= 20; i++) {
      this.list_left.push(i)
    }
    for (let i = 0; i <= 20; i++) {
      this.list_right.push(i)
    }
    this.$nextTick(() => {
      this.meunScrollL = new BScroll(this.$refs.wrapper_left, {
        click: true,
        probeType: 3,
        scrollbar: true
      });
      this.meunScrolllR = new BScroll(this.$refs.wrapper_right, {
        click: true,
        probeType: 3,
        scrollbar: true
      });
      this.meunScrolllR.on('scroll', (pos) => {
        // if (this.scroll_right[this.foot_index].top < Math.abs(parseInt(pos.y))) {
        //   console.log(this.scroll_right[this.foot_index])
        // }
        let top = Math.abs(parseInt(pos.y))
        for (let i = 0; i < this.scroll_right.length; i++) {
          if (top > this.scroll_right[i].top && top < this.scroll_right[i].bottom) {
            this.needChange && (this.foot_index = this.scroll_right[i].index)
          }
        }
      })
      //初始化数据
      this._initScrollData()
    })
  }
};
</script>
<style lang="scss">
.scroll {
  display: flex;
  .left {
    flex: 0 0 80px;
    .current {
      background: blue;
    }
    li {
      height: 80px;
    }
  }
  .right {
    flex: 1;
    li {
      height: 140px;
    }
  }
  .wrapper {
    .bscroll-indicator {
      border: none!important;
      width: 3px!important;
      right: 0px;
    }
    position: relative;
    margin-top: 80px;
    bottom: 0;
    overflow: hidden;
    background: rgba(1, 1, 1, .2);
    overflow: hidden;
    height: 300px; // width: 120px;
    ul {
      list-style-type: none;
      padding: 0px;
      margin: 0px;
      li {
        font-size: 15px;
        border-bottom: 1px solid black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>

