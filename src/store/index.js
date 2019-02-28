import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  TYPE: 'NEWS',
  ID: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
