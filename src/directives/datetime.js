import Vue from 'vue'
Vue.directive('datetime', {
  inserted: function(el, binding) {
    require([
      '../assets/lib/mobiscroll/js/mobiscroll.custom-3.0.0-beta2.min.js',
      '../assets/lib/mobiscroll/css/mobiscroll.custom-3.0.0-beta2.min.css'
    ], function(module) {
      let id = 'datetime-' + new Date().getTime()
      el.getElementsByTagName("input")[0].setAttribute('id', id)
      console.log(document.getElementById(id))
      mobiscroll.date('#' + id, {
        theme: 'android-holo-light',
        display: 'bottom',
        dateFormat: 'yy-mm-dd',
        lang: 'zh',
        onSet: function(value, inst) {
          console.log(value.valueText)
          console.log(binding)
        }
      });
    })
  },
  update: function(el, binding) {
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      console.log('update')
    }
  }
})