import { define, wrap } from '../webcomponent.js';
import { format, parse } from '../date.js';

define('x-time', class extends wrap('time') {
  mount() {
    const t = parse(this.textContent);
    const f = this.getAttribute('format');
    this.textContent = format(f, t);
  }
}, { extends: 'time' });
