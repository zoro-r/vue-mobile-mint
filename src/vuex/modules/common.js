import utils from '../../utils'

const types = {
  //微信用户信息
  POP_STATUS: "POP_STATUS",
  //是否显示底部导航
  SHOW_FOOTER: "SHOW_FOOTER"
}

const state = {
  isPop: false,
  isScroll: true,
  hasFooter: true,
}

const getters = {
  isShowFooter: () => {
    return state.hasFooter
  }
}

const actions = {
  add({
    commit,
    state
  }, product) {
    commit(types.ADD_PRODUCT, product)
  }
}

const mutations = {
  //提交pop信息
  [types.POP_STATUS](state, params) {
    state.isPop = params;
  },
  //显示底部导航
  [types.SHOW_FOOTER](state, params) {
    state.hasFooter = params;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}