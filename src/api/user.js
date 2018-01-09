import axios from './http'

export function login(formData) {
  const url = '/user-token'

  return axios.post(url, formData)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
