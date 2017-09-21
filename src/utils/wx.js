import store from '../vuex/store'
import axios from 'axios'
import format from './format'



let instance = axios.create({
  timeout: 50000,
  method: 'get',
});
//当请求异常，网络异常,返回异常时候进行提示
function showError() {
  store.commit('LOADING', {
    loading: false
  })
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '网络异常,请检查网络'
  })
};
//请求拦截器
instance.interceptors.request.use(config => {
  store.commit('LOADING', {
    loading: true,
    msg: '正在加载'
  })
  return config
}, error => {
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '发送请求失败！'
  })
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网络异常,请检查网络"
  })
});
//返回拦截器
instance.interceptors.response.use(response => {
  console.log("%c 返回数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(response)))
  store.commit('LOADING_DISABLED', false)
  store.commit('LOADING', {
    loading: false
  })
  try {
    //保存微信用户信息
    if (!response.errcode) {
      store.commit('WX_USERINFO', response.data);
      return response.data
    } else {
      return Promise.reject({
        isLogicError: true,
        errorMessage: "获取用户信息失败",
        data: response.data
      })
    }
  } catch (e) {
    console.log(e)
    showError();
    return Promise.reject({
      isLogicError: false,
      errorMessage: "网络异常,请检查网络"
    })
  }
}, error => {
  store.commit('LOADING_DISABLED', false)
  showError();
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网络异常,请检查网络"
  })
})
export default {
  //获取微信用户信息
  wxUserInfo1(callback) {
    console.log("微信用户信息", store.state.common.wxUserInfo)
    if (!store.state.common.wxUserInfo) {
      return instance.get(globalConfig.rootUrl + "weixin/getInfo&openId=" + utils.cache.get("wxConfig").openId);
    } else {
      return new Promise(function(resolve) {
        resolve(store.state.common.wxUserInfo);
      });
    }

  },
  //获取微信用户信息 第二次
  wxUserInfo(callback) {
    console.log("微信用户信息", store.state.common.wxUserInfo)
    if (!store.state.common.wxUserInfo) {
      return instance.get(globalConfig.rootUrl + "weixin/getInfo1?openId=" + utils.cache.get("wxConfig").openId + "&token=" + utils.cache.get("wxConfig").token);
    } else {
      return new Promise(function(resolve) {
        resolve(store.state.common.wxUserInfo);
      });
    }

  },
  //获取微信配置信息
  wxConfig() {
    return instance.get(globalConfig.rootUrl + "weixin/getConfig");
  },
  //微信支付接口
  wxPay() {
    function onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": "wx4ab795b130ab802e", //公众号名称，由商户传入
          "timeStamp": new Date().getTime, //时间戳，自1970年以来的秒数
          "nonceStr": "e61463f8efa94090b1f366cccfbbb444", //随机串
          "package": "prepay_id=u802345jgfjsdfgsdg888",
          "signType": "MD5", //微信签名方式：
          "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {} // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
      );
    }
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  },
  //关闭微信窗口返回聊天界面
  wxClose() {
    WeixinJSBridge && WeixinJSBridge.call('closeWindow');
  }
}