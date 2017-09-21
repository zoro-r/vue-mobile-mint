<template>
  <section class="va_ipt " v-bind:class="[btnClear && inputValue?'has_opt':'']" style="width:100%">
    <mu-text-field v-if="!isMultiLine" :hintText="hintText" @focus="changeKeyBoard(true)" @blur="changeKeyBoard(false)" :errorText="errorMsg||errorText" :type="type" :disabled="disabled" :label="label" v-model="inputValue" />
    <mu-text-field v-else :hintText="hintText" @focus="changeKeyBoard(true)" @blur="changeKeyBoard(false)" :errorText="errorMsg||errorText" :type="type" :disabled="disabled" :label="label" v-model="inputValue" multiLine :rows="1" :rowsMax="2" /><br/>
    <!-- <img @click="clear()" class="img_opt" src="../../assets/img/icon_clear.png" /> -->
    <button v-if="btnClear && inputValue" @click="clear()" class="btn_opt"></button>
  </section>
</template>

<script>
import utils from '../../utils'


export default {
  name: 'validator-input',
  props: ['label', 'value', 'validator', 'form', 'hintText', 'type', 'inputType', 'disabled', 'needRule', 'errorMsg', 'isMultiLine','btnClear'],
  data() {
    return {
      inputValue: this.value,
      errorText: null,
      rules: [],
      isOk: false
    }
  },
  methods: {
    /**
     * 键盘弹出时候
     */
    changeKeyBoard(isFocus) {
      if (isFocus) {
        this.errorText = null
        utils.help.keyBoardShow()
      } else {
        this.validate()
        utils.help.keyBoardHide()
      }
    },
		/**
		 * 验证规则
		 */
    validate(showError = true) {
      // this.changeKeyBoard(showError)
      //判断该组件是否需要重新初始化规则
      if (this.needRule) {
        this.rules = [];
        this.initRules(this.rules);
      }
      let result = utils.validator.validate(this.validator.label, this.inputValue, ...this.rules)
      if (!result.status) {
        showError && (this.errorText = result.msg)
        this.isOk = false
        this.$emit('update:form', result)
      } else {
        let datas = [], reObj = { status: true };
        for (let key in result.results) {
          if (result.results[key].data) {
            datas.push(result.results[key].data);
          }
        }
        if (datas.length > 0) {
          reObj.datas = datas;
        }
        this.errorText = null
        this.isOk = true
        this.$emit('update:form', reObj)
      }
    },
		/**
		 * 初始化规则
		 */
    initRules() {
      // let input = this.$refs.input.$refs.input
      //初始化规则
      for (let rule of this.validator.rules) {
        let realRule;
        if (typeof rule == 'string') {
          let list = rule.split(':');
          rule = utils.validator.rules[list[0]];
          if (rule.isMethods) {
            realRule = {
              isMethods: true,
              methods: rule.methods,
              msg: list[1] || rule.msg
            }
          }
          else {
            realRule = {
              reg: rule.reg,
              msg: list[1] || rule.msg
            }
          }
        } else {
          realRule = rule
        }
        this.rules.push(realRule)
      }
    },
    /**
     * 清除产品
     */
    clear() {
      console.log("clear")
      this.inputValue = "";
      // this.$emit('input', "")
    }
  },
  watch: {
    value(val) {
      this.inputValue = val;
      this.validate(false)
    },
    inputValue(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    // console.log(this.isMultiLine,this.isMultiLine.split("-"))
    // if (this.isMultiLine) {
    //   this.rows = parseInt(this.isMultiLine.split("-")[0]);
    //   this.rowsMax = parseInt(this.isMultiLine.split("-")[1]);
    // }
    // if (this.isMultiLine) {
    //   // text_input
    //   // this.$refs.text_input.$refs.text_input.onblur = () => {
    //   //   this.validate(true)
    //   // }
    // } else {
    //   this.$refs.input.$refs.input.onblur = () => {
    //     this.validate(true)
    //   }
    // }

    this.initRules()
    if (this.inputValue) {
      this.validate(true)
    }
  }
}
</script>
<style lang="scss" >
.va_ipt {
  .mu-text-field-hint.show{
    //  padding-left:2px;
  }
  // textarea{
  //   padding-left:-10px;
  // }
}

.has_opt {
	// .mu-text-field-hint.show{
  //   width:calc(100% - 20px)
  // }
  input,
  textarea{
    // background: url(../../assets/img/icon_clear.png);
    padding-right: 20px;
    background-repeat: no-repeat;
    background-position: 100% 11px;
    background-size: 14px;
  }
  .btn_opt {
    float: right;
    // background-image: url(../../assets/img/icon_clear.png);
    position: absolute;
    margin-top: -51px;
    right: 0px;
    width: 38px;
    border:none;
    background-repeat: no-repeat;
    background-position: 30% 8px;
    background-size: 14px;
    height:28px;
    // background-color:white;
    opacity: 0;
  }
}
</style>

