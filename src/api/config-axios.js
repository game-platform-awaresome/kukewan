/*
 * @Author: Greentea
 * @Date: 2017-12-26 10:34:37
 * @Last Modified by: Greentea
 * @Last Modified time: 2018-01-30 16:41:16
 */
import axios from 'axios'
import qs from 'qs'
// import md5 from 'blueimp-md5'
// import router from 'vue-router'

// axios 配置
axios.defaults.timeout = 5000
const debug = process.env.NODE_ENV !== 'production'
axios.defaults.baseURL = debug ? 'http://api.yii.com:88' : 'api.kukewan.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// let refreshToken = localStorage.refresh_token ? localStorage.refresh_token : ''
let accessToken = localStorage.access_token ? localStorage.access_token : ''

axios.interceptors.request.use((config) => {
  // POST传参序列化
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // token
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
}, (error) => {
  alert('errror params')
  return Promise.reject(error)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // if (error.response.status === 401) {
    //   if (error.response.code === -1) {
    //     localStorage.removeItem('access_token')
    //     localStorage.removeItem('refresh_token')
    //     alert('账号存在异常,请重新登录!')
    //   } else if (error.response.code === 0) {
    //     alert('账号不存在或已被冻结!')
    //   } else if (error.response.code === -2) {
    //     let url = `/user-token/${accessToken}`
    //     let randStr = Math.random().toString()
    //     let data = {
    //       randStr,
    //       sign: md5(localStorage.refresh_token + randStr + accessToken)
    //     }
    //     axios.put(url, data)
    //       .then(res => {
    //         console.log(res)
    //       })
    //   }
    // }
    return Promise.reject(error)
  })

export default axios
