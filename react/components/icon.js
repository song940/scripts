import { h } from '../../components/react.js';

export const icon = ({ icon }) => {
  const src = `https://api.iconify.design/${icon}.svg`;
  return h('img', { src });
};
