import * as axios from './config'

// 新闻列表
export function newsList() {
  const url = '/article'
  const params = {
    'per-page': 5,
    'catid': 1
  }
  return axios.axiosGet(url, params)
}
// 新闻通告
export function newsNotice() {
  const url = '/article'
  const params = {
    'per-page': 1,
    'catid': 2
  }
  return axios.axiosGet(url, params)
}
