<template>
  <div @click="showPopup()" class="address_district">
    <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="showPopup(false)">
      <div>
        <mu-appbar :title="title">
          <mu-icon-button disabled slot="left" />
          <mu-icon-button slot="right" style="color:rgb(57, 64, 67);" icon="close" color="white" @click="showPopup(false)" />
        </mu-appbar>
        <!-- <div style="height:36px;border-top: 1px solid rgb(246, 246, 246);"></div> -->
        <div class="has-header no-padding" v-bind:style="{height:screenHeight+'px'}">
          <v-distpicker @selected="onSelected" :province="data.provinceDesc" :city="data.cityDesc" :area="data.areaDesc" type="mobile">
          </v-distpicker>
        </div>
      </div>
    </mu-popup>
  </div>
</template>
<script>
import VDistpicker from '../../assets/lib/vDistpicker/src/Distpicker'
export default {
  name: 'DistrictAddress',
  components: {
    'v-distpicker': VDistpicker
  },
  data() {
    return {
      bottomPopup: false,
      screenHeight: document.documentElement.clientHeight * 0.55,
    }
  },
  methods: {
    onSelected(data) {
      this.data.province = data.province.code;
      this.data.city = data.city.code;
      this.data.area = data.area.code;
      this.data.provinceDesc = data.province.value;
      this.data.cityDesc = data.city.value;
      this.data.areaDesc = data.area.value;
      this.$emit('onSelected', this.data);
      this.bottomPopup = false;
    },
    showPopup() {
      this.bottomPopup = !this.bottomPopup;
    }
  },
  //data:Object, title:String, openModal:Boolean
  props: ["data", "title", "openModal"],
  watch: {
    openModal(value) {
      this.bottomPopup = true;
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>
<style lang='scss'>
.address_district {
  .mu-content-block {
    padding-top: 40px;
  }
  .address_img {
    height: 1.2rem;
    margin-top: 10px!important;
    position: absolute;
    z-index: 2;
    right: 8px!important;
    background: rgb(255, 255, 255);
  }

  .box {
    height: 200px
  }
}
</style>

