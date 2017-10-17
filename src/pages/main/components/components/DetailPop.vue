<template>
  <div class="detailPop">
    <mt-popup v-model="$parent.$parent.detailPop" position="bottom" popup-transition="popup-fade" class="mint-popup" :modal="true">
      <img v-lazy="img" class="detail-image" />
      <div class="content">
        <h2>湘西外婆菜丰盛套餐</h2>
        <span>月售512份 好评率100%</span>
        <div class="opt">
          <span class="price" v-html="$parent.$parent.detail.price"></span>
          <div class="add_content">
            <div v-bind:style="{width:$parent.$parent.detail.count>0?'50px':'0px'}" style="transition: all .25s linear;">
              <div style="height:20px;overflow:hidden;">
                <mt-button @click.stop="$parent.$parent.addToCar($event,$parent.$parent.detail)" type="primary" class="add_button" plain>-</mt-button>
                <span class="fn-12" v-html="$parent.$parent.detail.count"></span>
              </div>
            </div>
            <mt-button @click.stop="$parent.$parent.addToCar($event,$parent.$parent.detail,'add')" class="add_button" type="primary">+</mt-button>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script >
export default {
  name: "detailPop",
  data() {
    return {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      img: '../../../../assets/img/shop/detail.jpeg'
    };
  },
  components: {
  },
  methods: {
    /**
     *
     */
    close() {
      this.$store.commit('POP_STATUS_L', false)
    }
  },
  props: {
    top: {
      type: Number,
      default: 0
    }
  },
  watch: {
  },
  mounted() {
  }
};
</script>
<style lang='scss' scoped>
@import 'src/assets/css/vars';
.detailPop {
  .mint-popup {
    height: 430px;
    width: 86%;
    top: 15%;
    border-radius: 3px;
    .detail-image {
      width: 100%;
    }
    .content {
      padding: $pd-lg;
      .opt {
        display: flex; //
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-right: 8px;
        .price {
          color: $warning-color;
          font-size: $fn-md;
        }
      }
    }
  }
}
</style>
