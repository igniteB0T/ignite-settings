import getToken from '.';
import { addHost } from '.';
const fetch = require('node-fetch');

beforeAll(() => {
  global.fetch = fetch;
  Object.defineProperty(window.location, 'hostname', {
    value: 'awesome'
  });
});

test('it exports a function', () => {
  expect(typeof getToken).toBe("function");
});

test('it returns a promise', () => {
  return getToken()
    .then(response => {
      expect(response.length).toBeTruthy();
    });
});

test('it returns an error message if no valid endpoint is specified', () => {
  return getToken({ url: 'localhost' })
    .catch((err) => {
      expect('Something went terribly wrong! How embarrassing!').toBe(err);
    });
});

test('it appends the client hostname to the request', () => {
  const url = 'localhost';
  const newUrl = addHost(url);
  expect(newUrl).toBe('localhost?client=awesome');
  expect(newUrl).not.toBe('localhost?client=rainbows');
});