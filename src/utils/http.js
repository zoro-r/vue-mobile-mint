import axios from 'axios'
import format from './format'
import store from '../vuex/store'

let instance = axios.create({
  timeout: 50000,
  method: 'post',
  headers: {
    post: {
      'Content-Type': ''
    }
  }
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
  let params = {
    "packageList": {
      "packages": {
        "header": {
          "requestType": config.url,
          "comId": globalConfig.comId,
          "from": globalConfig.from,
          "sendTime": new Date().format('yyyy-MM-dd HH:mm:ss'),
          "orderSerial": "orderId",
          "comSerial": "comSerial"
        },
        request: DES3.encrypt('', JSON.stringify({
          requestPayload: Base64.encode(JSON.stringify(config.data))
        }).replace(/\s/g, ""))
      }
    }
  }
  let paramStr = JSON.stringify(params)
  let sign = hex_hmac_md5(globalConfig.transfer, paramStr)
  config.url = globalConfig.rootUrl + 'interfaceChannel?sign=' + sign + '&com_id=' + globalConfig.comId
  config.data = paramStr
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
  store.commit('LOADING_DISABLED', false)
  store.commit('LOADING', {
    loading: false
  })
  try {
    response.data.packageList.packages.response = JSON.parse(DES3.decrypt('', response.data.packageList.packages.response).replace(/(\\)*"/g, '"').replace(/"{/g, '{').replace(/}"/g, '}'))
      // response.data.packageList.packages.response.responsePayload.result = false
    console.log("%c 返回数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(response)))
    if (!response.data.packageList.packages.response.responsePayload.result) {
      let errorMsg = "后台返回数据data为空";
      if (response.data.packageList.packages.response.responsePayload.data) {
        errorMsg = response.data.packageList.packages.response.responsePayload.data.ErrorMessage || response.data.packageList.packages.response.responsePayload.msg || "网络异常";
      }
      return Promise.reject({
        isLogicError: true,
        errorMessage: errorMsg,
        data: response.data.packageList.packages.response.responsePayload
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
  response.data = response.data.packageList.packages.response.responsePayload.data;
  return response
}, error => {
  store.commit('LOADING_DISABLED', false)
  showError();
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网络异常,请检查网络"
  })
})

export default {
  axios: axios,
  post(service, params) {
    console.log("%c 请求数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(params)))
    return instance.post(service, params)
  }
}