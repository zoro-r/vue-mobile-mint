<template>
  <div class="shopAds">
    <div class="primary_mg_hor primary_bg_white" style="height:90px">
       <mt-swipe :auto="2000" height="100%">
        <mt-swipe-item v-for="(item,index) in imgList" :key="index">
          <img src="static/img/common/youhui.png" style="width: 100%" />
        </mt-swipe-item>
      </mt-swipe>
      <!-- <img src="static/img/common/youhui.png" style="width: 100%" /> -->
    </div>
    <div>
      <!-- 第一列 -->
      <div class="row">
        <div class="col_1">
          <h2>限量抢购</h2>
          <h3>超值美味 9.9元起</h3>
          <h3>
            <font style="color:red">333人</font> 正在抢 ></h3>
          <img src="static/img/shop/3.png" />
        </div>
        <div class="col_1">
          <h2 style="color:black">热卖套餐</h2>
          <h3>销量最高，好评最多</h3>
          <h3>
            <font style="color:rgb(175, 130, 96)">TOP 100 ></font>
          </h3>
          <img src="static/img/shop/4.png" />
        </div>
      </div>
      <!-- 第二列 -->
      <div class="row">
        <div class="col_1 col_2">
          <h3 class="fn-14">天天特价</h3>
          <font class="box" style="color:red">低至一折</font>
          <img src="static/img/shop/5.png" />
        </div>
        <div class="col_1 col_2">
          <h3 class="fn-14">乐享鲜果</h3>
          <font class="box">鲜果7折</font>
          <img src="static/img/shop/6.png" />
        </div>
        <div class="col_1 col_2">
          <h3 class="fn-14">品质优选</h3>
          <font class="box">尖货来袭</font>
          <img src="static/img/shop/7.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
export default {
  name:"ShopAds",
  data() {
    return {
      imgList:[1,1,1,1,1]
    };
  },
  components: {
  },
  methods: {
  }
};
</script>
<style lang='scss'>
.shopAds {
  .row {
    background: white;
    .col_1 {
      text-align: center;
      min-height: 10rem;
      background: linear-gradient(0deg, rgb(244, 244, 244) 5%, rgb(250, 250, 250) 95%);
      margin: 1rem; // min-height: 11rem;
      margin: 1rem;
      padding: 2px 1.3rem;
      text-align: left;
      position: relative;
      &:first-of-type {
        margin-right: 0px;
      }
      &:last-of-type {
        // margin-right: 0px;
      }
      h2 {
        color: rgb(232, 25, 25);
      }
      h2,
      h3 {
        margin-top: .2rem;
      }
      img {
        margin-bottom: -1.5rem;
        bottom: 0px;
        position: absolute;
        right: 0px;
        width: 10rem;
      }
    }
    .col_2 {
      overflow: hidden;
      height: auto;
      min-height: 9rem;
      text-align: center;
      &:last-of-type {
        margin-left: 0px;
        font-size: 10px;
        border-radius: 3px;
      }
      h3 {
        margin-bottom: .5rem;
      }
      .box {
        border: 1px solid rgb(187, 187, 187);
        font-size: 1rem;
        color: gray;
        text-align: center;
        padding: 0px;
        margin-top: .5rem;
      }
      img {
        width: 90%;
        margin-bottom: 0px;
        left: 5%;
      }
    }
  }
}
</style>
