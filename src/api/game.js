import * as axios from './config'

// 推荐游戏
export function recommend() {
  const url = '/game/recommend'
  const params = {
    'per-page': 3
  }
  return axios.axiosGet(url, params)
}

// 精品游戏
export function boutique() {
  const url = '/game/good'
  const params = {
    'per-page': 3
  }
  return axios.axiosGet(url, params)
}

// 游戏中心
export function gameCenter() {
  const url = '/game/good'
  const params = {
    'per-page': 10
  }
  return axios.axiosGet(url, params)
}
