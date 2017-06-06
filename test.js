import test from 'ava';
import getToken from './index';

test('it exports a function', t => {
  t.is(typeof getToken, "function");
});

test('it returns a promise', t => {
  return getToken()
    .then(response => {
      t.truthy(response.length);
    });
});
test('it returns an error message if no valid endpoint is specified', t => {
  return getToken({ url: 'localhost' })
    .catch((err) => {
      t.is('Something went terribly wrong! How embarrassing!', err);
    });
});