import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import main from './main'
import home from './home'

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
    children: [...main, ...home]
  }]
})

//制作权限控制
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title || document.title
//   store.commit('TOGGLE_TAB', to.meta.hasFooter == true)
//   if (to.meta.login != false && !store.state.common.user) {
//     store.commit('TOGGLE_TOAST', {
//       toast: true,
//       toastMsg: '请先登录！'
//     })
//     next('/page/login')
//   } else {
//     next()
//   }
// })

// router.afterEach(route => {
// document.body.scrollTop = 0
// })
Router.prototype.goBack = function(path) {
  this.isBack = true
  if (typeof path == 'string') {
    router.push(path)
  } else {
    window.history.go(-1)
  }
}

export default router