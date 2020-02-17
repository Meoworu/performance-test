import * as cookie from 'cookie'

export class Cookie {
  static get(name) {
    return cookie.parse(document.cookie)[name]
  }

  static set(name, value, options) {
    document.cookie = cookie.serialize(name, value, options)
  }

  static remove(name, options) {
    options = options || {}
    options.expires = new Date(0)
    Cookie.set(name, '', options)
  }
}

export default Cookie
