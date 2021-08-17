import EventEmitter from "./events.js";

export const requestDevice = options => {
  return navigator.bluetooth.requestDevice(options);
};

export class Bluetooth extends EventEmitter {
  open() {
    
  }
}
