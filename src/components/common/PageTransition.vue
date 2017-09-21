<template>
  <section>
    <transition name="slide-x-transition">
      <navigation>
        <router-view class="child-view"></router-view>
      </navigation>
    </transition>
    <mt-tabbar style="position: fixed;bottom: 0px;" v-model="selected">
      <mt-tab-item id="1">
        <icon name="cutlery" slot="icon"></icon>
        外卖
      </mt-tab-item>
      <mt-tab-item id="2">
        <icon name="eye" slot="icon"></icon>
        发现
      </mt-tab-item>
      <mt-tab-item id="3">
        <icon name="file-text-o" slot="icon"></icon>
        订单
      </mt-tab-item>
      <mt-tab-item id="4">
        <icon name="user-o" slot="icon"></icon>
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
      selected: "1"
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
.child-view {
  /*position: absolute;*/
  top: 0;
  width: 100%;
  height: 100%;
}
.mint-tab-item{
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
</style>
