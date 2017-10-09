  //例子父路由
  const main = r => require.ensure([], () => r(require('../pages/main/Main.vue')), 'Main');
  const shopList = r => require.ensure([], () => r(require('../pages/main/ShopList.vue')), 'ShopList');
  const shopDetail = r => require.ensure([], () => r(require('../pages/main/ShopDetail.vue')), 'ShopDetail');
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
