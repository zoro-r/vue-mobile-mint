<template>
  <section class="demo">
    <mt-header slot="header" v-bind:style="{'background-color': 'rgba(38, 162, 255,'+Math.abs(0)/50+')'}" :fixed="true">
      <mt-button @click="back" slot="left" icon="back"></mt-button>
    </mt-header>
    <h2 class="title" v-bind:style="{'top':Math.abs(top)>40?'10px': 50 + top + 'px','margin-left': Math.abs(top)>40?'10%': Math.abs(top)+'px'}">江氏国际饭店</h2>
    <div class="scroll" ref="scroll">
      <div>
        <ShopDetailHeader :top="top" />
        <div class="item" v-for="(item,index) in scroll_list" :key="index">
          {{index}}
        </div>
      </div>
    </div>
    </div>
  </section>
</template>
<script type="text/babel">
import BScroll from 'better-scroll'
import ShopDetailHeader from '../../pages/main/components/ShopDetailHeader'
export default {
  name: "demo",
  components: {
    ShopDetailHeader
  },
  data() {
    return {
      scroll_list: [],
      foot_index: 0,
      needChange: true,
      top: 0,
      imgStyle: {}
    };
  },
  methods: {
  },
  watch: {
  },
  mounted() {
    for (let i = 0; i <= 1000; i++) {
      this.scroll_list.push(i)
    }
    this.$nextTick(e => {
      this.meunScrollR = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3,
        bounce: false
      });
      this.meunScrollR.on("scroll", pos => {
        console.log(parseInt(pos.y))
        this.top = parseInt(pos.y)
        this.imgStyle = {
          transform: this.top < 50 ? 'scale(' + (80 + this.top) / 80 + ')' : 'scale(1)'
        };
      })
    })
  }
};
</script>
<style lang="scss">
@import 'src/assets/css/vars';
$height:80px;
.title {
  position: absolute;
  top: 46px;
  padding: 3px;
  left: 100px;
  font-size: 14px;
  z-index: 11;
  color: rgb(255, 255, 255);
}

.shopDetail_header {
  color: $bg-color;
  padding: 0px $pd-md;
  width: 100%;
  min-height: 150px;
  background-color: rgb(141, 40, 18);
  .back {
    min-height: 45px;
  }
  .heard_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: $height;
      height: $height;
    }
    .detail {
      padding-top: 20px;
      width: calc(100% - 90px);
      span {
        width: 100%;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: $fn-tn;
        padding: 3px;
      }
      .pinpai {
        content: "品牌";
        left: 0px;
        background: linear-gradient(-139deg, rgb(255, 241, 0), rgb(255, 227, 57));
        margin-right: .22rem;
        font-size: $fn-tn;
        padding: 3px;
        border-radius: .2rem;
        width: .3rem;
        color: rgb(111, 63, 21);
      }
    }
  }
  .youhui {
    padding-top: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .man {
      &::before {
        content: "满";
        background: red;
        width: 20px;
        box-sizing: border-box;
        margin-right: $pd-md/2;
      }
    }
    .huodong {
      display: flex;
      align-items: center;
      img {
        width: 8px;
        transform: rotate(-90deg)
      }
    }
  }
}

.base_header {
  margin-top: 60px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: $primary-color;
  font-size: $fn-hg;
  display: flex;
  .left {
    flex: .5;
  }
  .title {
    height: 100%;
    flex: 1;
    position: relative;
    h1 {
      // bottom: 0px;
      position: absolute;
    }
  }
  .right {
    flex: .5;
  }
}

.scroll {
  position: relative;
  bottom: 0px;
  overflow: hidden;
  height: 500px;
  .item {
    height: 50px;
    color: white;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid black;
    background: red;
  }
}
</style>

