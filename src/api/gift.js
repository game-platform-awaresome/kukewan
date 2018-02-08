import * as axios from './config'

// 获取游戏礼包列表 5
export function giftList() {
  const url = '/card'
  const params = {
    'per-page': 5
  }
  return axios.axiosGet(url, params)
}

export function getGiftDetail(giftId) {
  const url = `/card/${giftId}`
  return axios.axiosGet(url)
}
