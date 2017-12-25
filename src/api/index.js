import axios from 'axios'

export function getSlider() {
  return axios.post('/ad')
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
