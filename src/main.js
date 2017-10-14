window.globalConfig = {
  rootUrl: "http://10.0.16.28:8080/com.ifp.ipartner/",
  iosUrl: "",
  env: "int", //目前版本环境分别为---int---uat---sh
  isDebug: false, //是否开启接口debug模式
  plat: 'NATIVE', //WEB、NATIVE
  timeout: 1000 * 180 //默认是3000毫秒
}
import Vue from 'vue'
import App from './components/common/App'
import store from './vuex/store'
import router from './routers'
//引入手机ui框架 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//----------
import '@/assets/css/main.scss'
import '@/filters/globalFilter.js'
import '@/assets/lib/finger/alloy_finger.js'
import '@/assets/lib/finger/alloy_finger.vue.js'
// import '@/directives/title.js'
import Navigation from 'vue-navigation'
import vueScrollBehavior from './components/common/scrolleBhavior/src/vue-scroll-behavior'
import utils from './utils'
import Page from './components/common/Page.vue'
// import 'vue-awesome/icons'
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage)
Vue.use(MintUI)
//引入swiper滑动组件
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//页面级别组件
/**引入图标库 太大暂时不引入*/
// Vue.component('icon', Icon)
window.Vue = Vue
window.utils = utils
Vue.use(AlloyFingerVue)
Vue.component('page', Page)
Vue.config.productionTip = false
Vue.use(vueScrollBehavior, {
  router: router
})
Vue.use(Navigation, {
  router,
  store,
  moduleName: 'policy',
  keyName: 'RH',
  id: "scroll-content"
})
// Vue.use(vueg, router)

Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      loaddingImg: "static/img/common/loading1.gif",
      isMobile: window.navigator.platform == 'iPhone'
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back(url) {
      router.goBack(url)
    },
    //返回首页
    toHome() {
      router.goBack("/baseHome")
    }
  }
})
if (window.navigator.platform == 'iPhone') {
  console.log("app模式启动")
  //移动端组件---------------------start---------------------
  document.addEventListener('deviceready', function () {
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: {
        App
      }
    })
    window.navigator.splashscreen.hide();
    StatusBar.overlaysWebView(true)
    StatusBar.styleDefault();
    if (navigator.appVersion.indexOf('11') < 0) {
      //ios11 以下判断
    }
  }, false);
} else {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
      App
    }
  })
}
window.addEventListener('statusTap', function () {
  // scroll-up with document.body.scrollTop = 0; or do whatever you want
  document.getElementsByClassName("child-view")[0].body.scrollTop = 0;
  console.log("我点击的statusTap")
});
//移动端组件---------------------end---------------------
