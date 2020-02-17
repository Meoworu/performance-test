import env from './env'
import { objToUrl, sendMessage } from './utils/util'

class WebPerformance {
  constructor(option) {
    const { serverUrl, ...otherProperty } = option
    this.url = serverUrl
    this.otherProperty = otherProperty
  }

  init() {}

  send(option) {
    const queryString = objToUrl(
      Object.assign({}, env, this.otherProperty, option)
    )
    const link = `${this.url}?${queryString}`
    sendMessage(link)
  }
}

export default WebPerformance
