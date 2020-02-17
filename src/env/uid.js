import Cookie from '../lib/cookie'

export default function() {
  return (
    Cookie.get('ACCESS_USER_ID') ||
    localStorage.getItem('user-id') ||
    ''
  ).replace(/^"(.*)"$/, '$1')
}
