import validatorFuc from './validatorFuc'
//检验方法
const validator = {
  reg: {
    require: /^[\s\S]+$/,
    Positive: /^([1-9]\d*|[0]{1,1})$/, //匹配非负整数（正整数 + 0）
    positive: /^[0-9]*[1-9][0-9]*$/, //匹配正整数
    Negative: /^((-d+)|(0+))$/, //匹配非正整数（负整数 + 0）
    negative: /^-[0-9]*[1-9][0-9]*$/, //匹配负整数
    integer: /^-?d+$/, //匹配整数
    PositiveFloat: /^d+(.d+)?$/, //匹配非负浮点数（正浮点数 + 0）
    positiveFloat: /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/, //匹配正浮点数
    NegativeFloat: /^((-d+(.d+)?)|(0+(.0+)?))$/, //匹配非正浮点数（负浮点数 + 0）
    negativeFloat: /^(-(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/, //匹配负浮点数
    letter: /^[A-Za-z]+$/, //匹配由26个英文字母组成的字符串
    numberLetter: /^[A-Za-z0-9]+$/,
    mobile: /^(13|14|15|17|18)\d{9}$/, //手机号
    mobileOrEmpty: /^\s*$|^(13|14|15|17|18)\d{9}$/, //手机号(或为空)
    telephone: /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/, //电话
    chineseLetter: /^[a-z A-Z\u4E00-\u9FA5]+$/, //汉字+字母
    chinese: /^[\u4E00-\u9FA5]+$/, //汉字
    email: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i, //email
    // email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //email
    carNO: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/, //车牌号
    pwd: /^[A-Za-z0-9]{6,20}$/, //密码验证
    passport: /^[G|E][0-9]{8}$|^[S|P|D][0-9]{7}$/, //护照
    bankCode: /^[0-9]+$/, //银行卡号
    //护照 ^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$
  },
  validate(label, val, ...rules) {
    const result = {
      status: true,
      msg: '验证通过',
      results: [],
    }
    for (let rule of rules) {
      const ruleResult = {
        status: true,
        reg: rule.reg,
        msg: '验证通过'
      }
      if (rule.isMethods) {
        //进行方法校验
        if (!rule.methods(val)) {
          result.status = false;
          ruleResult.status = false;
          let msg = null;
          if (typeof rule.msg == 'function') {
            msg = rule.msg(label)
          } else {
            msg = rule.msg
          }
          if (result.results.length == 0) {
            result.msg = msg
          }
          ruleResult.msg = msg
        } else {
          ruleResult.status = true;
          ruleResult.data = rule.methods(val);
        }
        result.results.push(ruleResult)
      } else {
        //正则判断
        if (!rule.reg.test(val)) {
          result.status = false;
          ruleResult.status = false;
          let msg = null;
          if (typeof rule.msg == 'function') {
            msg = rule.msg(label)
          } else {
            msg = rule.msg
          }
          if (result.results.length == 0) {
            result.msg = msg
          }
          ruleResult.msg = msg
          result.results.push(ruleResult)
        }
      }
    }
    return result
  }
}

validator.rules = {
  require: {
    reg: validator.reg.require,
    msg(label) {
      return (label || '') + '必填项'
    }
  },
  chinese: {
    reg: validator.reg.chinese,
    msg(label) {
      return (label || '') + '中文格式不匹配'
    }
  },
  number: {
    reg: validator.reg.Positive,
    msg(label) {
      return (label || '') + '数字格式不匹配'
    }
  },
  mobile: {
    reg: validator.reg.mobile,
    msg(label) {
      return (label || '') + '手机号格式不匹配'
    }
  },
  mobileOrEmpty: {
    reg: validator.reg.mobileOrEmpty,
    msg(label) {
      return (label || '') + '手机号格式不匹配'
    }
  },
  email: {
    reg: validator.reg.email,
    msg(label) {
      return (label || '') + '电子邮箱格式不匹配'
    }
  },
  pwd: {
    reg: validator.reg.pwd,
    msg(label) {
      return (label || '') + '密码不正确'
    }
  },
  name: {
    reg: validator.reg.chinese,
    msg(label) {
      return (label || '') + '姓名格式不匹配'
    }
  },
  idcard: {
    isMethods: true,
    methods: validatorFuc.isID,
    msg(label) {
      return (label || '') + '身份证格式不匹配'
    }
  },
  passport: {
    reg: validator.reg.passport,
    msg(label) {
      return (label || '') + '护照格式不匹配'
    }
  },
  bank: {
    reg: validator.reg.bankCode,
    msg(label) {
      return (label || '') + '格式不为整数'
    }
  }
}

export default validator