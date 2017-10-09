<template>
  <section class="searchPop">
    <!-- popup-transition="popup-fade" -->
    <mt-popup position="right" v-model="$store.state.common.popObj.searchPop" class="mint-popup" :modal="true">
      <div class="primary_flex_center searchBar">
        <img @click="$store.state.common.isPop = false" v-bind:style="{width:isFocus?'0rem':'2.2rem'}" src="static/img/icon/left.png" class="transition_3" />
        <section class="search">
          <!-- <mt-search v-model="value" :result.sync="result"></mt-search> -->
          <input ref="input" @focus="onfocus" @blur="onblur" class="fn-12" type="search" placeholder="请输入商家、商品名称" />
        </section>
        <span @click="cancel" class="cancel fn-15 transition_3">取消</span>
      </div>
      <!-- 历史搜索 -->
      <section class="hot_search">
        <h2>历史搜索</h2>
        <div class="row">
          <mt-button v-for="(item,index) in history" :key="index" class="item">{{item}}</mt-button>
        </div>
      </section>
      <br/>
      <!-- 热门搜索 -->
      <section class="hot_search">
        <h2>热门搜索</h2>
        <div class="row">
          <mt-button v-for="(item,index) in data" :key="index" class="item">{{item}}</mt-button>
        </div>
      </section>
    </mt-popup>
  </section>
</template>
<script >
export default {
  name:"SearchPop",
  data() {
    return {
      value: "",
      isFocus: true,
      data: ['沙拉', '麦当劳', '粥', '奶茶', '我的菜', '肯德基', '麻辣烫', '咖啡', '面', '蛋糕', '烤鸡', '烧烤'],
      history: ['手扒鸡']
    };
  },
  components: {
  },
  methods: {
    /**
     * 取消搜索
     */
    cancel() {
      this.$store.commit('POP_STATUS_S', this.value !== '')
    },
    /**
     * 当进入焦点的时候
     */
    onfocus() {
      this.isFocus = true;
    },
    /**
     * 失去焦点
     */
    onblur() {
      this.isFocus = false;
    }
  },
  watch: {
    ['$store.state.common.popObj.searchPop'](newVal) {
      newVal && setTimeout(() => {
        this.$refs.input.focus()
      }, 300);;
    }
  },
  mounted() {
    this.$refs.input.focus();
  }
};
</script>
<style lang='scss'>
$btnWidth:4.5rem;
.searchPop {
  .hide {
    opacity: 0;
    width: 0px;
  }
  .hot_search {
    padding: .5rem;
    .row {
      justify-content: left;
      .item {
        font-size: 1.4rem;
        height: 3rem;
        color: rgb(102, 102, 102);
        background-color: rgb(247, 247, 247);
        margin-right: 1rem;
        margin-top: 1rem;
        align-items: center;
        display: flex;
        border-radius: 3px;
      }
    }
  }
  .searchBar {
    padding: 0.5rem 0px;
    img {
      width: 0px;
      margin: 5px 0px;
    }
    .search {
      margin-left: .5rem;
      height: 3rem;
      width: calc(100% - 4rem);
      input {
        width: 100%;
        border-radius: 0px;
        appearance: none;
        border: 0px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        background-image: url('../../../../static/img/icon/search1.png');
        background-repeat: no-repeat;
        background-size: 1.2rem;
        padding-left: 3rem;
        padding-right: 1rem;
        line-height: 3rem;
        background-position-y: center;
        background-position-x: 10px;
        background-color: rgb(248, 248, 248);
        color: gray;
      }
    }
    .cancel {
      text-align: center;
      width: $btnWidth;
    }
  }
}
</style>
