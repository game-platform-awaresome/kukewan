/*
 * @Author: Greentea
 * @Date: 2017-12-26 10:34:37
 * @Last Modified by: Greentea
 * @Last Modified time: 2018-01-09 14:18:23
 */
import axios from 'axios'
import qs from 'qs'
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
    if (error.response) {
      // if (error.response.)
    }
    return Promise.reject(error.response)
  })

export default axios
