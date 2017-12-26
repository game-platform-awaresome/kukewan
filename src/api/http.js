/*
 * @Author: Greentea
 * @Date: 2017-12-26 10:34:37
 * @Last Modified by: Greentea
 * @Last Modified time: 2017-12-26 16:00:49
 */
import axios from 'axios'
import qs from 'qs'
import router from 'vue-router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://api.yii.com:88'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const token = 'c07760cd9e2b8d1eab28c5420734d8f0'

axios.interceptors.request.use((config) => {
  // POST传参序列化
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
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
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)
  })

export default axios
