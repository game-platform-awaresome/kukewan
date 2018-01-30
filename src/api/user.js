import axios from './config-axios'

// 登录
export function login(formData) {
  const url = '/user-token'

  return axios.post(url, formData)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 账号是否存在
export function hasUsername(username) {
  const url = '/public/check'
  const params = {
    type: 'username',
    string: username
  }
  return axios.get(url, {params})
    .then(res => {
      return Promise.resolve(res.data)
    })
}
// 判断手机号是否存在
export function hasPhone(phone) {
  const url = '/public/check'
  const params = {
    type: 'phone',
    string: phone
  }
  return axios.get(url, {params})
    .then(res => {
      return Promise.resolve(res.data)
    })
}

// 是否为真实姓名
export function isRealname(realname) {
  const url = '/public/check'
  const params = {
    type: 'realname',
    string: realname
  }
  return axios.get(url, {params})
    .then(res => {
      return Promise.resolve(res.data)
    })
}
// 判断验证码
// export function trueVerification(realname) {
//   const url = '/public/check'
//   const params = {
//     type: 'realname',
//     string: realname
//   }
//   return axios.get(url, {params})
//     .then(res => {
//       return Promise.resolve(res.data)
//     })
// }

// 注册
export function register(data) {
  const url = '/user?expand=usertoken'
  return axios.post(url, data)
    .then(res => {
      return Promise.resolve(res)
    })
}

// 获取用户信息
export function getUserInfo(data) {
  const url = '/user?expand=money'

  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
