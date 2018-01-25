import * as axios from './config'

export function getNav() {
  const url = '/public/menu'
  return axios.axiosGet(url)
}
