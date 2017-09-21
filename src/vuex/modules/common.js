import utils from '../../utils'

const types = {
  LOADING: 'LOADING',
  LOADING_DISABLED: 'LOADING_DISABLED',
  LOGIN: 'LOGIN',
  LOCK_SCREEN: 'LOCK_SCREEN',
  TOGGLE_TAB: 'TOGGLE_TAB',
  TOGGLE_TOAST: 'TOGGLE_TOAST',
  TOGGLE_SNACKBAR: 'TOGGLE_SNACKBAR',
  TOGGLE_DIALOG: 'TOGGLE_DIALOG',
  TOGGLE_POPUP: 'TOGGLE_POPUP',
  //微信用户信息
  WX_USERINFO: "WX_USERINFO"
}

const state = {
  contentHeight: 0,
  user: utils.cache.get('user'),
  lockScreen: false,
  loading: false,
  loadingMsg: null,
  loadingDisabled: false,
  hasFooter: true,
  toast: false,
  toastMsg: '',
  snackbar: false,
  snackbarMsg: '',
  dialog: false,
  dialogMsg: '',
  dialogImg: '',
  dialogButtons: [],
  dialogCallback: null,
  popup: false,
  popupMsg: '',
  popupTitle: '',
  popupCallback: null,
  //微信用户
  wxUserInfo: null
}

const getters = {
  getUser: () => {
    return state.user
  },
  isLockScreen: () => {
    return state.lockScreen
  },
  isShowFooter: () => {
    return state.hasFooter
  },
  loading: () => {
    return state.loading
  },
  getWxUser: () => {
    return state.wxUserInfo
  },
}

const actions = {
  add({
    commit,
    state
  }, product) {
    commit(types.ADD_PRODUCT, product)
  },
  toggleTab({
    commit,
    state
  }, show) {
    alert('toggleTab')
    commit(types.TOGGLE_TAB, show)
  }
}

const mutations = {
  [types.LOADING](state, params) {
    state.loading = params.loading
    state.loadingMsg = params.msg || '';
  },
  [types.LOADING_DISABLED](state, flag) {
    state.loadingDisabled = flag
  },
  [types.LOGIN](state, user) {
    state.user = user
  },
  [types.LOCK_SCREEN](state, isLock) {
    state.lockScreen = isLock
  },
  [types.TOGGLE_TAB](state, show) {
    state.hasFooter = show
  },
  [types.TOGGLE_TOAST](state, params) {
    state.toast = params.toast
    state.toastMsg = params.toastMsg
    state.toastImg = params.toastImg || ''
    if (state.toast) {
      setTimeout(() => {
        state.toast = false
      }, 3000)
    }
  },
  [types.TOGGLE_SNACKBAR](state, params) {
    state.snackbar = params.snackbar
    state.snackbarMsg = params.snackbarMsg
    if (state.snackbar) {
      setTimeout(() => {
        state.snackbar = false
      }, 3000)
    }
  },
  [types.TOGGLE_DIALOG](state, params) {
    state.dialog = params.dialog
    state.dialogMsg = params.dialogMsg
    state.dialogImg = params.dialogImg
    state.dialogButtons = params.dialogButtons
    state.dialogCallback = params.dialogCallback
  },
  [types.TOGGLE_POPUP](state, params) {
    state.popup = params.popup
    state.popupTitle = params.popupTitle
    state.popupMsg = params.popupMsg
    state.popupCallback = params.popupCallback
  },
  //保存微信用户信息
  [types.WX_USERINFO](state, params) {
    state.wxUserInfo = params;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}