export let transformStr = (str, symbol) => {
  let strArr = str.split(symbol)
  for (let i = 1; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }

  return strArr.join('')
}
