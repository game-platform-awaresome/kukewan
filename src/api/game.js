import * as axios from './config'

// 全部游戏
export function allGame() {
  const url = '/game'
  return axios.axiosGet(url)
}

// 全部游戏---9
export function allGame9() {
  const url = '/game'
  const params = {
    'per-page': 9
  }
  return axios.axiosHeaderGet(url, params)
}

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
    'per-page': 9
  }
  return axios.axiosGet(url, params)
}

// 游戏中心
export function gameCenter() {
  const url = '/game/good'
  const params = {
    'per-page': 20
  }
  return axios.axiosGet(url, params)
}

// 热门游戏
export function hotGame() {
  const url = '/game/good'
  const params = {
    'per-page': 8
  }
  return axios.axiosGet(url, params)
}

/* ***************
      搜索
*************** */
const allParams = {
  'per-page': 9
}
// 游戏类型
export function selectType(gameListParams) {
  const url = '/game'
  const params = Object.assign(allParams, gameListParams)
  return axios.axiosHeaderGet(url, params)
}

// 游戏题材
export function selectStory(gameListParams) {
  const url = '/game'
  const params = Object.assign(allParams, gameListParams)
  return axios.axiosHeaderGet(url, params)
}

// 战斗形式
export function selectStyle(gameListParams) {
  const url = '/game'
  const params = Object.assign(allParams, gameListParams)
  return axios.axiosHeaderGet(url, params)
}

// 首字母
export function selectLetter(gameListParams) {
  const url = '/game'
  const params = Object.assign(allParams, gameListParams)
  return axios.axiosHeaderGet(url, params)
}

// 游戏名称
export function searchGame(name) {
  const url = '/game'
  const params = {
    'per-page': 9,
    name
  }
  return axios.axiosHeaderGet(url, params)
}

// 选择页数
export function choicePagination(page) {
  const url = '/game'
  const params = Object.assign(allParams, {page})
  return axios.axiosGet(url, params)
}

// 最近在玩
export function recentGame() {
  const url = '/game-login'
  let params = {
    'per-page': 3
  }
  return axios.axiosGet(url, params)
}

// 所有最近在玩
export function allRecentGame(account) {
  const url = '/game-login/game'
  let params = {
    account
  }
  return axios.axiosGet(url, params)
}

// 通过游戏id获取游戏信息
export function getGameInfoByGid(id) {
  const url = `/game/${id}`
  return axios.axiosGet(url)
}

// 获取iframe
export function getIframe(sid) {
  const url = `/game-login/${sid}`
  return axios.axiosGet(url)
}
