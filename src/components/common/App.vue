<template>
  <router-view>
  </router-view>
</template>

<script>
export default {
  name: 'app',
  created() {
    // utils.wx.wxConfig().then(req => {
    //   console.log("获取微信配置返回数据", req)
    // });
  }
}
</script>
