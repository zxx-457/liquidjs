import { stringify } from '../util'
import { Emitter } from './emitter'

export class SimpleEmitter implements Emitter {
  public buffer = '';

  public write (html: any) {
    this.buffer += stringify(html)
  }
}
