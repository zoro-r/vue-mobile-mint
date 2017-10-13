<template>
  <div class="box">
    <div class="tabs">
      <div class="tab-bar">
        <div v-for="(item,index) in tabs" :key="index" @click="change(item,index)" class="tab-item" :style="{width:100/tabs.length+'%'}" :class="{active:tabIndexValue==index}">{{item}}</div>
      </div>
      <div class="tab-line" style="transition:all .3s ease-out;" :style="{width:100/tabs.length-4+'%',left:100/tabs.length*tabIndexValue+13.5+'%'}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabIndexValue: this.tabIndex
    }
  },
  methods: {
    change(item, index) {
      this.tabIndexValue = index
      this.$emit('update:tabIndex', index)
    }
  }
}
</script>
<style  lang="scss">
.tabs {
  position: relative;
  .tab-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35px;
    background: #FFF;
    border-bottom: 2px solid #E5E5E5;
    .tab-item {
      text-align: center;
      padding: 0 10px;
      font-size: 13px;
      height: 35px;
      line-height: 35px;
      transition: all .3s;
    }
  }
  .tab-item.active {
    color: #3399FF;
  }
  .tab-line {
    position: absolute;
    bottom: 0;
    width: 20px!important;
    border-bottom: 3px solid #3399FF;
    border-radius: 4px;
  }
}
</style>
