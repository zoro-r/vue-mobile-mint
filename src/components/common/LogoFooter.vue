<template>
  <div id="LogoFooter" class="logo_footer">
    jiangdaofeng@n22.com.cn2017.9.12
  </div>
</template>

<script>
export default {
  name: 'LogoFooter',
  data() {
    return {
    }
  },
  methods: {
    toHome() {
      if (globalConfig.isDebug) {
        this.go("/page/home")
      }
    }

  },
  computed: {

  },
  activated() {
    // let LogoFooter = document.querySelector('#LogoFooter');

    // //浏览器页面高度
    // let screenHeight = window.screen.height;

    // if (screenHeight > LogoFooter.offsetTop + LogoFooter.offsetHeight) {
    // 	LogoFooter.classList.add('footer-fixed');
    // } else {
    // 	LogoFooter.classList.remove('footer-fixed');
    // }
  },
}
</script>
<style lang='scss' scoped>
.logo_footer {
  min-height: 30px;
  text-align: center;
  clear: both;
  width: 100%;
  padding: 20px 0px;
  img {
    width: 183px;
  }
}

.footer-fixed {
  // position: fixed;
  bottom: 0px;
  left: 0px;
}
</style>

