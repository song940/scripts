
export const search = async name => {
  const url = `https://itunes.apple.com/search?entity=podcast&term=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
