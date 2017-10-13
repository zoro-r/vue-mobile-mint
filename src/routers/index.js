import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import main from './main'
// import home from './home'
import mine from './mine'

Vue.use(Router)
const router = new Router({
  routes: [{
    name: "baseHome",
    path: '/',
    redirect: '/baseHome'
  }, {
    name: "baseHome",
    path: '/baseHome',
    component(resolve) {
      require.ensure([], () => resolve(require('../pages/home/BaseHome.vue')), 'baseHome')
    },
    meta: {
      hasFooter: true,
      noScroll: true
    },
    children: [...main, ...mine, ...[{
      name: "demo",
      path: 'demo',
      component(resolve) {
        require.ensure([], () => resolve(require('../pages/demo/Demo.vue')), 'Demo')
      },
      meta: {
        hasFooter: true,
        noScroll: true
      }
    }]]
  }]
})

//制作权限控制
router.beforeEach((to, from, next) => {
  console.log(to)
  //是否显示底部导航
  store.commit('SHOW_FOOTER', to.meta.hasFooter);
  //判断是否为baseHome页面
  store.commit('IS_HOME', to.name == 'baseHome');
  //页面是否需要滚动
  store.commit('NO_SCROLL', to ? to.meta.noScroll : true);
  next()
})
Router.prototype.goBack = function (path) {
  this.isBack = true
  if (typeof path == 'string') {
    router.push(path)
  } else {
    window.history.go(-1)
  }
}

export default router
