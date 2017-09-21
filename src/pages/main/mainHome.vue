<template>
  <section class="mainHome" @top-method="loadTop">
    <section class="heard_card primary_mg primary_bg primary_flex_center fn-17">
      <div class="index_left">
        <icon scale="1.2" name="map-marker"></icon>
        <span class="fn-14">闵行区浦江第一中学(浦锦路西50米)</span>
        <icon scale=".8" name="sort-desc"></icon>
      </div>
      <aside class="index_right">
        <div>
          <h2>20.2°</h2>
          <p>晴夜</p>
        </div>
        <img src="static/img/dark.png" alt="">
      </aside>
    </section>
    <section class="primary_bg input_box primary_flex_center search primary_mg" style="height:3.5rem;z-index:10">
      <div class="ipt_item primary_flex_center fn-12">
        <icon scale=".8" name="search"></icon>&nbsp;&nbsp;搜索商家，商家名称
      </div>
    </section>
    <section class="primary_bg primary_mg_hor" style="height:0px;overflow:hidden;height:35px;">
      <div style="overflow-x: scroll;white-space: nowrap;position:relative;height:45px">
        <div class="input_box primary_flex_center scrllX" style="padding:0px;">
          <a v-for="item in tipList" :key="item">{{item}}</a>
        </div>
      </div>
    </section>
    <section class="primary_bg_white" style="height:170px;z-index:2">
      <mt-swipe :auto="0" height="100%">
        <mt-swipe-item v-for="(item,index) in menuList" :key="index">
          <div class="row">
            <div class="col col_item" v-for="(it,index1) in item" :key="index1">
              <div>
                <!-- <span>{{it.img}}</span> -->
                <img v-bind:src="it.img" />
              </div>
              <span>{{it.text}}</span>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <section class="primary_mg_hor primary_bg_white">
      <img src="static/img/common/youhui.png" style="width: 100%" />
    </section>
    <section class="shopList primary_bg_white">
      <div class="primary_mg">
        <span class="title ">推荐商家</span>
      </div>
      <div>
        <shopItem v-for="(item,index) in shopList" :key="index"></shopItem>
      </div>
    </section>
  </section>
</template>
<script type="text/babel">
import menuList from '../../assets/data/homeItem'
export default {
  data() {
    return {
      menuList: menuList,
      topStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0,
      tipList: [
        "烧烤", "馒头", "麻辣烫", "粥", "面包", "芒果", "拉面", "酸辣粉", "冒菜", "蛋糕"
      ],
      shopList: [1, 1, 1,2,3,4,5,6]
    };
  },
  components: {
    shopItem: r => { require(['../../components/common/ShopItem'], r) },
  },
  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop(isFinish) {
      setTimeout(function() {
        isFinish()
      }, 3000);
    }
  }
};
</script>
<style lang='scss'>
.mainHome {
  .mint-swipe-indicators {
    .mint-swipe-indicator {
      width: 5px;
      height: 5px;
    }
    .is-active {
      background: red;
    }
  }
  font-weight: 200;
  .youhui {
    width: 100%; // background: url('static/img/common/youhui.png');
    // padding: 0px 10px;
    img {
      width: calc(100% - 20px);
      margin-left: 10px;
    }
  }
  .col_item {
    min-height: 80px;
    text-align: center;
    div {
      padding-top: 5px;
      display: flex;
      justify-content: center;
      img {
        width: 4rem;
        height: 4rem;
        display: block;
      }
    }
    span {
      text-align: center;
      color: rgb(102, 102, 102);
    }
  }
  .scrllX {
    justify-content: left!important;
    position: absolute;
    z-index: 1;
    height: 50px;
    a {
      text-align: left;
      font-family: -webkit-body;
      color: white;
      margin-right: 2rem;
    }
  }
  .search {
    position: sticky;
    top: 0px;
     ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0px;
      left: 0;
      background-image: linear-gradient(90deg, rgb(0, 170, 255), rgb(0, 133, 255));
    }
  }
  .input_box {
    height: 35px;
    text-align: center;
    justify-content: center;
    color: gray;
    .ipt_item {
      text-align: center;
      background: rgb(255, 255, 255);
      width: 100%;
      height: 80%; // line-height: 39px;
      justify-content: center;
      border-radius: 2px;
    }
  }
  .heard_card {
    height: auto;
    color: rgb(255, 255, 255);
    justify-content: space-between;
    .index_left {
      align-items: center;
      height: 3rem;
      display: flex;
      -webkit-box-align: center;
      width: 60%;
      span {
        font-weight: 600;
        margin: 0 5px;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .index_right {
      // width: 40%;
      display: flex;
      align-items: center;
      text-align: right;
      img {
        height: 28px;
        margin: 0px 5px 0px 5px;
      }
      div {
        h2,
        p {
          font-size: 1rem;
          margin: 0px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
