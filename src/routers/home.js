  //例子父路由
  const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
    // 例子首页
  const homeShow = r => require.ensure([], () => r(require('../pages/home/homeShow.vue')), 'homeShow')
  export default [{
    name: 'home',
    path: 'home',
    component: home,
    children: [{
      name: 'homeShow',
      path: 'homeShow',
      component: homeShow,
    }]
  }]