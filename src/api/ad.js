import * as axios from './config'

// 首页轮播
export function indexSlide() {
  const url = '/ad'
  const params = {
    type: 1
  }
  return axios.axiosGet(url, params)
}
// 友情链接
export function friendlyLink() {
  const url = '/ad'
  const params = {
    type: 2
  }
  return axios.axiosGet(url, params)
}
// 中部广告条
export function midAd() {
  const url = '/ad'
  const params = {
    type: 3
  }
  return axios.axiosGet(url, params)
}
// 游戏大厅轮播
export function gameHallSlide() {
  const url = '/ad'
  const params = {
    type: 4
  }
  return axios.axiosGet(url, params)
}
// 游戏大厅-游戏页轮播
export function gameHallSingleSlide() {
  const url = '/ad'
  const params = {
    type: 4
  }
  return axios.axiosGet(url, params)
}
