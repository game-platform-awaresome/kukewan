import * as types from './mutation-types'

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  },
  [types.SET_FORMDATA](state, formData) {
    state.formData = formData
  },
  [types.OPEN_PAY_WINDOW](state, flag) {
    if (flag) {
      state.openPayWindow = flag
    } else {
      if (state.openPayWindow) {
        state.openPayWindow = false
      } else {
        state.openPayWindow = true
      }
    }
  }
}

export default mutations
