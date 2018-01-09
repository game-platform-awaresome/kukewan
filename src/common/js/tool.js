export let transformStr = (str, symbol) => {
  let strArr = str.split(symbol)
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }

  return strArr.join('')
}

export let monthDayHourMinutes = (seconds) => {
  const date = new Date(seconds)
  let dateStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  return dateStr
}
