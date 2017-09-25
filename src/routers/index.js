import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import main from './main'
import home from './home'
import mine from './mine'

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    redirect: '/page/main/mainHome'
  }, {
    path: '/page',
    component(resolve) {
      require.ensure([], () => resolve(require('../components/common/PageTransition.vue')), 'pageTransition')
    },
    children: [...main, ...home, ...mine]
  }]
})

//制作权限控制
router.beforeEach((to, from, next) => {
  store.state.common.hasFooter = to.meta.hasFooter;
  next()
})
Router.prototype.goBack = function(path) {
  this.isBack = true
  if (typeof path == 'string') {
    router.push(path)
  } else {
    window.history.go(-1)
  }
}

export default router