import refer from './refer'
import uid from './uid'
import uuid from './uuid'
import ua from './ua'
import href from './href'

export default function() {
  return {
    refer: refer(),
    uid: uid(),
    device_id: uuid(),
    ua: ua(),
    href: href()
  }
}
