import * as axios from './config'
// 区服推荐
export function recommend() {
  const url = '/server'
  const params = {
    'per-page': 6,
    recommend: 0,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}
// 新服
export function newServerTrailer() {
  const url = '/server'
  const params = {
    'per-page': 6,
    openstatus: 1,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}
// 已开新服
export function hasNewServer() {
  const url = '/server'
  const params = {
    'per-page': 6,
    openstatus: 2,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}
// 单个游戏服务器列表
export function gameServerList(gid) {
  const url = '/server'
  const params = {
    'per-page': 15
  }
  const newParams = Object.assign(params, {gid})
  return axios.axiosHeaderGet(url, newParams)
}
// 获取下一页区服列表
export function choicePagination(gid, page) {
  const url = '/server'
  const params = {
    'per-page': 15
  }
  const newParams = Object.assign(params, {gid, page})
  return axios.axiosGet(url, newParams)
}
// 单个游戏区服搜索
export function searchServer(gid, serverName) {
  const url = '/server'
  const params = {
    'per-page': 15
  }
  const newParams = Object.assign(params, {gid, server_name: serverName})
  return axios.axiosGet(url, newParams)
}
