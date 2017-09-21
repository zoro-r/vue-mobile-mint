import utils from '../../utils'
const types = {
  PUTPOLICYINFO: 'PUTPOLICYINFO',
  GETPOLICYINFO: "POLICYINFO"
}

const state = {
  policyInfo: utils.cache.get(types.PUTPOLICYINFO)
}

const getters = {
  GETPOLICYINFO: () => utils.cache.get(types.PUTPOLICYINFO)
}

const actions = {
  putPolicyInfo: () => {}
}

const mutations = {
  [types.PUTPOLICYINFO](state, param) {
    console.log('store', param)
    utils.cache.set(types.PUTPOLICYINFO, param);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}