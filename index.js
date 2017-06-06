'use strict';
const fetch = require('node-fetch');

const defaults = {
  url: 'https://time.ignitestaging.com.au/settings/index',
};

const getToken = function (config = defaults) {
  return new Promise((resolve, reject) => {
    fetch(config.url)
      .then(response => response.json())
      .then(response => resolve(response.instagramToken))
      .catch(() => {
        reject('Something went terribly wrong! How embarrassing!');
      });
  });
};

module.exports = getToken;