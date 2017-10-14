<template>
  <page class="orderCom">
    <mt-header slot="header" class="primary_bg" title="订单" :fixed="true">
    </mt-header>
    <div slot="content" class="order_content has-header">
      <div style="margin-top:10px;background:white" v-for="(item,index) in list" :key="index">
        <OrderItem :value="item" />
      </div>
    </div>
  </page>
</template>
<script type="text/babel">
export default {
  name: "OrderCom",
  components: {
    OrderItem: r => { require.ensure([], () => r(require('./components/OrderItem'))), "OrderItem" }
    // OrderItem:r => { require(['./components/orderItem'], r) },
  },
  data() {
    return {
      list: [
        {
          title: "艾比克（明珠广场店）",
          content: "招牌卤肉-招牌卤肉等两件商品",
          img: require('../../assets/img/order/1.jpeg'),
          color: "rgb(255, 151, 0)"
        }, {
          title: "西城港式创意茶餐厅",
          content: "最夯外卖指南",
          img: require('../../assets/img/order/2.jpeg'),
          color: "rgb(245, 120, 93)"
        }, {
          title: "大唐酸菜鱼",
          content: "5元现金拿不停",
          img: require('../../assets/img/order/3.png'),
          color: "rgb(27, 169, 225)"
        }, {
          title: "土耳其烤肉饭",
          content: "领取口碑好卷",
          img: require('../../assets/img/order/4.png'),
          color: "rgb(245, 120, 93)"
        }, {
          title: "老盛昌（三林店）",
          content: "领取口碑好卷",
          img: require('../../assets/img/order/5.png'),
          color: "rgb(245, 120, 93)"
        }
      ]
    };
  },
  methods: {
    hide() {
    }
  }
};
</script>
<style lang='scss'>
@import 'src/assets/css/vars.scss';
.orderCom {
  .primary_bg {
    z-index: 20140202;
  }
}
</style>
