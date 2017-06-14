'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHost = undefined;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  url: 'https://time.ignitestaging.com.au/api/settings/index'
};

var addHost = function addHost(url) {
  return url + '?' + _querystring2.default.stringify({
    client: window.location.hostname
  });
};

var getToken = function getToken() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;

  return new Promise(function (resolve, reject) {
    fetch(addHost(config.url)).then(function (response) {
      return response.json();
    }).then(function (response) {
      return resolve(response.instagramToken);
    }).catch(function () {
      reject('Something went terribly wrong! How embarrassing!');
    });
  });
};

exports.default = getToken;
exports.addHost = addHost;