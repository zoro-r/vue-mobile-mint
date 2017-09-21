window.globalConfig = {
  rootUrl: "http://10.0.16.28:8080/com.ifp.ipartner/",
  iosUrl: "",
  env: "int", //目前版本环境分别为---int---uat---sh
  isDebug: false, //是否开启接口debug模式
  plat: 'WEB', //WEB、NATIVE
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
import Page from './components/common/Page'
import vueScrollBehavior from 'vue-scroll-behavior'
import utils from './utils'
import 'vue-awesome/icons'
import VueLazyImage from "vue-lazy-images";
Vue.use(VueLazyImage)
  /* Register component with one of 2 methods */
import Icon from 'vue-awesome/components/Icon'
Vue.use(MintUI)

/**引入图标库 */

Vue.component('icon', Icon)
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
  keyName: 'RH'
})
Vue.mixin({
  data() {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    go(url) {
      this.$router.push(url)
    },
    back(url) {
      router.goBack(url)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})