  //例子父路由
  const Mine = r => require.ensure([], () => r(require('../pages/mine/Mine.vue')), 'Mine')
    // 例子首页
  export default [{
    name: 'mine',
    path: 'mine',
    component: Mine,
    children: []
  }]
