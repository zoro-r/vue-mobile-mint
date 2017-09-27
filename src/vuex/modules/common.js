import utils from '../../utils'

const types = {
  //弹出框信息
  POP_STATUS_S: "POP_STATUS_S",
  //弹出框信息
  POP_STATUS_L: "POP_STATUS_L",
  //是否显示底部导航
  SHOW_FOOTER: "SHOW_FOOTER",
  //底部导航tab显示
  TAB_SELECTED: "TAB_SELECTED",
  //判断是否是home页面
  IS_HOME: "IS_HOME"
}

const state = {
  popObj: {
    searchPop: false,
    locationPop: false
  },
  hasFooter: true,
  tabSelected: 1,
  isHome: true
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
  [types.POP_STATUS_L](state, params) {
    state.popObj.locationPop = params;
  },
  //提交pop信息
  [types.POP_STATUS_S](state, params) {
    state.popObj.searchPop = params;
  },
  //显示底部导航
  [types.SHOW_FOOTER](state, params) {
    state.hasFooter = params;
  },
  //切换显示
  [types.TAB_SELECTED](state, params) {
    state.tabSelected = params;
  }, //切换显示
  [types.IS_HOME](state, params) {
    state.isHome = params;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}