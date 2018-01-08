import axios from './http'

export function login(formData) {
  const url = '/users'

  return axios.post(url, formData)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
