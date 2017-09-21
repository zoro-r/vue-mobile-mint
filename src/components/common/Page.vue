<template>
  <div class="page-loadmore">
    <!-- <h1 class="page-title">Pull down</h1> -->
    <!-- <p class="page-loadmore-desc">translate : {{ translate }}</p> -->
    <!-- <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }"> -->
    <!-- translateScale : {{ moveTranslate }} -->
    <!-- </div> -->
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: screenHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
        <section :style="{ height: screenHeight + 'px' }">
          <slot></slot>
        </section>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus === 'pull'">
            下拉刷新
          </span>
          <span v-show="topStatus === 'drop'">
            释放刷新
          </span>
          <!-- <mt-spinner v-show="topStatus === 'loading'" :type="3" :size="15" color="#26a2ff"></mt-spinner> -->
          <span v-show="topStatus === 'loading'">
            <icon style="margin: 17px -20px;position: absolute;" name="eercast" v-show="topStatus === 'loading'" spin color="#26a2ff"></icon>
            正在刷新
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>
<script type="text/babel">
import '../../assets/lib/drop/drop.js'
export default {
  name: "page",
  data() {
    return {
      list: [],
      topStatus: '',
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    };
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
    loadTop() {
      this.$emit("top-method", this.$refs.loadmore.onTopLoaded)
      //   this.$refs.loadmore.onTopLoaded();
    }
  },
  created() {
  },
  mounted() {
    // this.wrapperHeight = document.documentElement.clientHeight;
  }
};
</script>
<style lang='scss'>
.page-loadmore {
  .list_item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    width: 100%;
    background: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(128, 128, 128);
  }
  .page-title {
    text-align: center
  }
  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
    &:last-of-type {
      border-bottom: solid 1px #eee;
    }
  }
  .page-loadmore-wrapper {
    margin-top: -1px;
    overflow: scroll;
  }

  .mint-spinner {
    display: inline-block;
    vertical-align: middle;
  }

  .loading-background {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .2s linear;
  }
  .mint-loadmore {
    overflow: scroll;
  }
  .mint-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle; // transform: rotate(180deg);
    }
  }
}
</style>
