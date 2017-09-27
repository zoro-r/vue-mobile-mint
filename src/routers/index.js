import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import main from './main'
// import home from './home'
import mine from './mine'

Vue.use(Router)
const router = new Router({
  routes: [{
    name: "home",
    path: '/',
    redirect: '/home'
  }, {
    name: "home",
    path: '/home',
    component(resolve) {
      require.ensure([], () => resolve(require('../pages/home/home.vue')), 'home')
    },
    meta: {
      hasFooter: true
    },
    children: [...main, ...mine]
  }]
})

//制作权限控制
router.beforeEach((to, from, next) => {
  store.commit('SHOW_FOOTER', to.meta.hasFooter);
  store.commit('IS_HOME', to.name == 'home');
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