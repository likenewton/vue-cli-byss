
const SET_TYPE = 'SET_TYPE'
const SET_ID = 'SET_ID'

export default {
  [SET_TYPE](state, paras) {
    state.TYPE = paras.TYPE
  },
  [SET_ID](state, paras) {
    state.ID = paras.ID
  }
}
