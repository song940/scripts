

export const request = (method, url, payload, headers) => {
  return fetch(url, {
    method,
    headers,
    body: payload
  });
};

export const get = (url, headers) =>
  request('get', url, null, headers);

export const post = (url, payload, headers) =>
  request('post', url, payload, headers);

export const getJSON = (url, headers) =>
  Promise
    .resolve()
    .then(() => get(url, headers))
    .then(res => res.json());
