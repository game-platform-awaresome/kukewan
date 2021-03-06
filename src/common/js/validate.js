export let username = (username) => {
  let reg = /^\w{6,11}$/
  return validate(reg, username)
}

export let password = (password) => {
  let reg = /^.{8,16}$/
  return validate(reg, password)
}

export let truename = (trueName) => {
  let reg = /^[\u4e00-\u9fa5]{2,5}$/
  return validate(reg, trueName)
}

// export let id = (id) => {
//   let reg = /^\d{17}[0-9x]$/
//   return validate(reg, id)
// }

export let phone = (phone) => {
  let reg = /^\d{11}$/
  return validate(reg, phone)
}

export let email = (email) => {
  let reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/
  return validate(reg, email)
}

let validate = (reg, param) => {
  // console.log('validate' + reg.test(param))
  if (reg.test(param)) {
    return true
  } else {
    return false
  }
}
