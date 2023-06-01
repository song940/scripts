

export const parse = url => {
  const pattern = /^((\w+):\/\/)?((.+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
  const match = pattern.exec(url);
  return Object.entries({
    url: 0,
    protocol: 2,
    auth: 4,
    host: 5,
    port: 6,
    path: 7,
    querystring: 8,
    hash: 9,
  }).reduce((out, [k, v]) => {
    out[k] = match[v] || '';
    return out;
  }, {});
}
