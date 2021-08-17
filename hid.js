
export const listDevices = () => {
  return navigator.hid.getDevices();
};

export const requestDevice = (filters = []) => {
  return navigator.hid.requestDevice({ filters });
};
