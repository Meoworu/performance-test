// Object 转为url
export function objToUrl(obj) {
  let arr = []
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      arr.push(i + '=' + obj[i])
    }
  }
  return arr.join('&')
}

// 发送埋点
export function sendMessage(link) {
  if (navigator && navigator.sendBeacon) {
    navigator.sendBeacon(link)
  } else {
    new Image().src = link
  }
}
