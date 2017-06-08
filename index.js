'use strict';
import querystring from 'querystring';

const defaults = {
  url: 'https://time.ignitestaging.com.au/api/settings/index',
};

const addHost = (url) => {
  return `${url}?${querystring.stringify({
    client: window.location.hostname,
  })}`;
};

const getToken = function (config = defaults) {
  return new Promise((resolve, reject) => {
    fetch(addHost(config.url))
      .then(response => response.json())
      .then(response => resolve(response.instagramToken))
      .catch(() => {
        reject('Something went terribly wrong! How embarrassing!');
      });
  });
};

export default getToken;
export { addHost };