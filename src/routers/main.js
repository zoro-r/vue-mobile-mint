  //例子父路由
  const main = r => require.ensure([], () => r(require('../pages/main/main.vue')), 'main')
    // 例子首页
  const mainHome = r => require.ensure([], () => r(require('../pages/main/mainHome.vue')), 'mainHome')
  export default [{
    name: 'main',
    path: 'main',
    component: main,
    children: [{
      name: 'mainHome',
      path: 'mainHome',
      component: mainHome,
      meta: {
        hasFooter: true
      }
    }]
  }]