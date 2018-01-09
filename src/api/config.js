import axios from './http'

// axios get
export function axiosGet(url, params) {
  return axios.get(url, {
    params: params
  })
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
