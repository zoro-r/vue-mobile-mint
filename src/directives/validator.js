import Vue from 'vue'
import validator from '../utils/validator'
Vue.directive('validator', {
  inserted: function(el, binding) {
    console.log(binding)
    let input = el.getElementsByTagName('input')[0]
    input.onblur = () => {
      let result = validator.validate(binding.value.label, input.value, validator.rule.require)
      console.log(result)
    }
  }
})