import * as axios from './config'

export function recommend() {
  const url = '/server'
  const params = {
    'per-page': 6,
    recommend: 0,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}

export function newServerTrailer() {
  const url = '/server'
  const params = {
    'per-page': 6,
    openstatus: 1,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}

export function hasNewServer() {
  const url = '/server'
  const params = {
    'per-page': 6,
    openstatus: 2,
    expand: 'server_img'
  }
  return axios.axiosGet(url, params)
}
