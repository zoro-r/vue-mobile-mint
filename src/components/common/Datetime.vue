<template>
  <div class="com-date-time">
    <mu-text-field class="com-date-time-input" ref="datetime" :label="label" v-model="inputValue" labelFloat/>  
    <img v-if="icon" src="../../assets/img/icon_date.png"/>
  </div>
</template>

<script>
  export default {
    name: 'datetime',
    //icon:是否与图片；maxDate:日期选择最大值；minDate:日期选择最小值；isBirthday:是否是选择生日；hintText:默认提示
    props: ['label', 'value','icon','maxDate','minDate','isBirthday','hintText'],
    data() {
      return {
        inputValue: this.value
      }
    },
    methods: {
      
    },
    watch: {
      value (val) {
        this.inputValue = val
      },
      inputValue (val) {
        this.$emit('input', val)
      }
    },
    mounted () {
      require([
        '../../assets/lib/mobiscroll/js/mobiscroll.javascript.min.js',
        '../../assets/lib/mobiscroll/css/mobiscroll.javascript.min.css'
      ], (ms) => {
        if(!window.mobiscroll){
          window.mobiscroll = ms.mobiscroll
        }
        let input = this.$refs.datetime.$el.getElementsByTagName('input')[0]
        let id = 'datetime-' + new Date().getTime()
        input.setAttribute('id', id)
        //设置默认提示
        document.getElementById(id).placeholder = this.hintText;
        mobiscroll.date('#' + id, {
          theme: 'ios',
          display: 'bottom',
          dateFormat: 'yy-mm-dd',
          lang: 'zh',
          max: this.isBirthday ? (new Date()) : this.maxDate ? (new Date(this.maxDate)) : null,
          min: this.minDate ? (new Date(this.minDate)) : null,
          onSet: (value, inst) => {
            this.inputValue = value.valueText
            this.$emit('input', value.valueText)
            this.$emit('update', value.valueText)
          }
        })
      })
    }
  }
</script>
<style lang="scss" scoped>
  .com-date-time{
    position:relative;
  }
  .com-date-time img{
    width: 22px;
    height: auto;
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 1;
  }
  .com-date-time-input{
    z-index: 999;
  }
</style>
