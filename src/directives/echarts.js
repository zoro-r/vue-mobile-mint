import Vue from 'vue'
import chinaJson from './china.json'
const echarts = require('echarts/lib/echarts')
Vue.directive('echarts', {
  inserted: function(el, binding) {
    require([
      './macarons',
      'echarts/lib/chart/bar',
      'echarts/lib/chart/line',
      'echarts/lib/chart/pie',
      'echarts/lib/chart/radar',
      'echarts/lib/chart/funnel',
      'echarts/lib/chart/gauge',
      'echarts/lib/chart/map',
      'echarts/lib/component/tooltip',
      'echarts/lib/component/title',
      'echarts/lib/component/legend'
    ], () => {
      let width = el.style.width || el.parentNode.offsetWidth + 'px'
      let height = el.style.height || el.parentNode.offsetHeight + 'px'
      el.style.width = width
      el.style.height = height
      echarts.registerMap('china', chinaJson)
      let myChart = echarts.init(el, 'macarons')
      myChart.setOption(binding.value.options, true)
    })
  },
  update: function(el, binding) {
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      let myChart = echarts.getInstanceByDom(el)
      myChart.setOption(binding.value.options, true)
    }
  }
})