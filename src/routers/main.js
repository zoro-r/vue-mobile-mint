  //例子父路由
  const main = r => require.ensure([], () => r(require('../pages/main/main.vue')), 'main')
    // 例子首页
  export default [{
    name: 'main',
    path: 'main',
    component: main,
    children: []
  }]