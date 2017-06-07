import getToken from './index';
const fetch = require('node-fetch');

beforeAll(() => {
  global.fetch = fetch;
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