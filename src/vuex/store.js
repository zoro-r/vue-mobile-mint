import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import policyStore from './modules/policyStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common: common,
    policyStore: policyStore
  }
})