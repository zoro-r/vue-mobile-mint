  //例子父路由
  const mine = r => require.ensure([], () => r(require('../pages/mine/mine.vue')), 'mine')
    // 例子首页
  const mineHome = r => require.ensure([], () => r(require('../pages/mine/mineHome.vue')), 'mineHome')
  export default [{
    name: 'mine',
    path: 'mine',
    component: mine,
    children: [{
      name: 'mineHome',
      path: 'mineHome',
      component: mineHome,
      meta: {
        hasFooter: true
      }
    }]
  }]