import axios from './config-axios'

// 获取充值方式
export function getPayType() {
  const url = '/pay/channel1'
  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

// 获取订单号
export function getOrderId() {
  const url = `/pay/ordersn`
  return axios.get(url)
    .then(res => {
      return Promise.resolve(res.data)
    })
}

export function charge(formData) {
  const url = 'pay'
  return axios.post(url, formData)
    .then(res => {
      return Promise.resolve(res.data)
    })
}
