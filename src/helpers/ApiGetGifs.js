import {api_key} from '../config/config';

export const getGifs = async (category, limit = 10) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  const gifs = data.map(({id, title, images: {downsized_large: {url}}}) => ({id, title, url}));
  // console.log(gifs);
  return gifs;
};
