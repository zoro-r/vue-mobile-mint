<template>
  <section class="main_page">
    <div>
      <transition name="slide-x-transition">
        <navigation>
          <router-view v-bind:style="{'overflow-y':isScroll && !$store.state.common.isPop? 'auto':'hidden'}" class="child-view scroll-content"></router-view>
        </navigation>
      </transition>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <div slot="icon" v-show="selected != '1'" class="icon_tabs" style="background-image:url(static/img/common/e.png)"></div>
        <div slot="icon" v-show="selected == '1'" class="icon_tabs" style="background-image:url(static/img/common/e-active.png)"></div>
        外卖
      </mt-tab-item>
      <mt-tab-item id="2">
        <div slot="icon" v-show="selected != '2'" class="icon_tabs" style="background-image:url(static/img/common/compass.png)"></div>
        <div slot="icon" v-show="selected == '2'" class="icon_tabs" style="background-image:url(static/img/common/compass-active.png)"></div>
        发现
      </mt-tab-item>
      <mt-tab-item id="3">
        <div slot="icon" v-show="selected != '3'" class="icon_tabs" style="background-image:url(static/img/common/order.png)"></div>
        <div slot="icon" v-show="selected == '3'" class="icon_tabs" style="background-image:url(static/img/common/order-active.png)"></div>
        订单
      </mt-tab-item>
      <mt-tab-item id="4">
        <div slot="icon" v-show="selected != '4'" class="icon_tabs" style="background-image:url(static/img/common/user.png)"></div>
        <div slot="icon" v-show="selected == '4'" class="icon_tabs" style="background-image:url(static/img/common/user-active.png)"></div>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </section>
</template>

<script>
import Toast from '../common/Toast.vue'
export default {
  components: {
    'toast': Toast
  },
  data() {
    return {
      selected: "1",
      isScroll: false
    }
  },
  watch: {
    //监听底部切换
    selected(newVal, oldVal) {
      // if (newVal == '4') {
      // } else {
      //   newVal == '1' ? StatusBar.hide() : StatusBar.show();
      //   StatusBar.overlaysWebView(newVal != '2');
      //   console.log(StatusBar, 'black')
      //   StatusBar.backgroundColorByName(newVal == '2' ? "blue" : 'white');
      // console.log(navigator, StatusBar)
      // navigator.camera.getPicture(e => {
      //   console.log(e);
      // }, e => {
      //   console.log(e);
      // }, {
      //     quality: 50,
      //     destinationType: Camera.DestinationType.DATA_URL,
      //     encodingType: Camera.EncodingType.JPEG,
      //     sourceType: 1
      //   })
      // }
    },
    onSuccess(e) {
      console.log(e);
    },
    onFail(e) {
      console.log(e);
    }
  },
  created() {
      setTimeout(e=>{
          this.isScroll = true;
      },200)
  }
}
</script>

<style lang="scss">
.main_page {
  .icon_tabs {
    background-size: 100%;
  }
  .is-selected,
  .icon_tabs {
    transition: all ease .5s;
  }
  .scroll-content {
    // z-index: 0;
    // -webkit-overflow-scrolling: touch;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; // z-index: 1;
    display: block;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    contain: size style layout;
    margin-bottom: 4.5rem;
    &::before {
      position: absolute;
      width: 1px;
      height: 1px;
      content: "";
      bottom: -1px;
    }
    &::after {
      top: -1px;
    }
  }

  .mint-tab-item {
    color: rgb(189, 189, 189)
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
}
</style>
