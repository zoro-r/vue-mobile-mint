  //例子父路由
  const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home')
  export default [{
    name: 'home',
    path: 'home',
    component: home,
    meta: {
      hasFooter: true,
      noScroll: true
    },
    children: []
  }]
