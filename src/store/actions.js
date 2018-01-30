import * as types from './mutation-types'
// import * as user from 'api/user'

export const setUser = ({commit}) => {
  // user.getUserInfo()
  //   .then(res => {
  //     console.log(res)
  //     // commit(types.SET_USER, res)
  //   })
  commit(types.SET_USER, {a: 1})
}
