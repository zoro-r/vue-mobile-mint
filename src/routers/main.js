  //例子父路由
  const main = r => require.ensure([], () => r(require('../pages/main/main.vue')), 'main');
  const shopList = r => require.ensure([], () => r(require('../pages/main/shopList.vue')), 'shopList');
  const shopDetail = r => require.ensure([], () => r(require('../pages/main/shopDetail.vue')), 'shopDetail');
  // 例子首页
  export default [{
    name: 'main',
    path: 'main',
    component: main,
    children: [{
      name: 'shopList',
      path: 'shopList',
      component: shopList,
    }, {
      name: 'shopDetail',
      path: 'shopDetail',
      component: shopDetail,
      meta: {
        hasFooter: true
      }
    }]
  }]