import env from './env'
import { objToUrl, sendMessage } from './utils/util'
import firstScreen from './lib/firstScreen'

class WebPerformance {
  constructor(option) {
    const { serverUrl, ...otherProperty } = option
    this.url = serverUrl
    this.otherProperty = otherProperty
    this.init()
  }

  init() {
    // 首屏加载信息
    window.addEventListener(
      'load',
      this.send(firstScreen(), () => window.removeEventListener(this.send))
    )
  }

  send(option, callback) {
    const queryString = objToUrl(
      Object.assign({}, env, this.otherProperty, option)
    )
    const link = `${this.url}?${queryString}`
    sendMessage(link)
    callback && callback()
  }
}

export default WebPerformance
