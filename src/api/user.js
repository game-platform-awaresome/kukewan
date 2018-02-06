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

// 支付-账号是否存在
export function hasAccount(username) {
  const url = '/public/check'
  const params = {
    type: 'account',
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

// 判断身份证号
export function judgeId(id) {
  const url = '/public/check'
  const params = {
    type: 'idcard',
    string: id
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
export function trueVerification(verificationCode) {
  const url = '/public/check'
  const params = {
    type: 'captcha',
    string: verificationCode
  }
  return axios.get(url, {params})
    .then(res => {
      return Promise.resolve(res.data)
    })
}

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
}
// 短信
export function checkMessage(data) {
  const url = '/send-phone-captcha'
  return axios.post(url, data)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
// 退出登录
export function quit() {
  const url = `/user-token/${localStorage.refresh_token}`
  axios.delete(url)
    .then(res => {
      if (res.status === 204) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        location.reload()
      }
    })
}

// 通过uid获取用户信息
export function getUserInfoByUid(uid) {
  const url = `/user/${uid}`
  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
