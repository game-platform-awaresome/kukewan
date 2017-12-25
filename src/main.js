import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'common/stylus/index.styl'
import axios from 'axios'

// axios global config
const debug = process.env.NODE_ENV !== 'production'
axios.defaults.baseURL = debug ? 'http://api.yii.com:88' : 'api.kukewan.com'
axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
