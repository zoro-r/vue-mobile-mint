<template>
  <page class="searchHome">
    <mt-header slot="header" class="primary_bg" title="发现" :fixed="true">
    </mt-header>
    <div slot="content" class="order_cell has-header row">
      <div v-for="(item,index) in list" :key="index" class="col">
        <div class="col_item">
          <h2 class="fn-16" v-bind:style="{color:item.color}">{{item.title}}</h2>
          <span class="fn-12">{{item.content}}</span>
        </div>
        <img :src="item.img" />
      </div>
      <div>
        <img style="margin:5px 0px;width:100%;" src="../../assets/img/mine/rrr.jpeg" />
      </div>
      <div style="width:100%;">
        <SearchItem :type="1" label="美食热推" />
      </div>
      <div style="width:100%;margin-top:10px">
        <SearchItem :type="2" label="天天特价" />
      </div>
      <div style="width:100%;margin-top:10px">
        <SearchItem :type="3" label="限时好礼" />
      </div>
    </div>
  </page>
</template>
<script type="text/babel">
export default {
  name: "SeacthCom",
  components: {
    SearchItem: r => { require.ensure([], () => r(require('./components/SearchItem')), 'SearchItem') },
    //  r => { require(['./components/SearchItem'], r) },
  },
  data() {
    return {
      list: [
        {
          title: "积分商城",
          img: require("../../assets/img/mine/1.jpeg"),
          content: "0元好物在这里！",
          color: "rgb(255, 151, 0)"
        }, {
          title: "必吃爆料",
          img: require("../../assets/img/mine/2.jpeg"),
          content: "最夯外卖指南",
          color: "rgb(245, 120, 93)"
        }, {
          title: "推荐有奖",
          img: require("../../assets/img/mine/3.jpeg"),
          content: "5元现金拿不停",
          color: "rgb(27, 169, 225)"
        }, {
          title: "周边优惠",
          img: require("../../assets/img/mine/4.jpeg"),
          content: "领取口碑好卷",
          color: "rgb(245, 120, 93)"
        },
      ]
    };
  },
  methods: {
    hide() {
      this.$store.commit('SHOW_FOOTER', !this.$store.state.common.hasFooter)
    }
  }
};
</script>
<style lang='scss'>
@import 'src/assets/css/vars.scss';
.searchHome {
  .order_cell {
    .col {
      flex: 0 0 50%;
      min-height: 85px;
      background: white;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .col_item {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        span {
          margin-top: 3px;
          color: $memo-color-light;
        }
      }
      img {
        flex-shrink: 0;
        width: 40px; //
        height: 40px;
        margin-right: 10px;
      }
    }
  }
}
</style>
