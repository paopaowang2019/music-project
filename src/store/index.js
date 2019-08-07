import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const logger = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
  plugins: logger,
  state,
  getters,
  mutations,
  actions
})
