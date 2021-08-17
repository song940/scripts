import { addEventListener } from './dom.js';

export const onKeydown = (key, fn) => {
  return addEventListener(document, 'keydown', (e) => {
    if (e.key === key) fn();
  });
};
