<template>
  <div class="toast" :class="{show: slowShow}" :style="{visibility:visible?'visible':'hidden'}">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props:['show'],
  data() {
    return {
      slowShow: this.show,
      visible: false
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {
    show(val){
      if(val){
        this.visible = true
        this.slowShow = val
        setTimeout(()=>{
          this.slowShow = false
          setTimeout(()=>{
            this.$emit('update', false)
            this.visible = false
          }, 500)
        }, 3000)
      }
    }
  },
  mounted() { }
}
</script>
<style scoped>
  .toast{
    position: fixed;
    z-index:99999;
    display:flex;
    padding:10px;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 160px;
    width: 190px;
    text-align: center;
    color: #FFF;
    border-radius:8px;
    font-size: 15px;
    background-color: rgba(57,64,67,0.9);
    transition:all .5s;
    opacity:0;
  }
  .show{
    opacity:1;
  }
</style>

