# Ignite settings

[![Build Status](https://travis-ci.org/igniteonline/ignite-settings.svg?branch=master)](https://travis-ci.org/igniteonline/ignite-settings)
[![Coverage Status](https://coveralls.io/repos/github/igniteonline/ignite-settings/badge.svg?branch=master)](https://coveralls.io/github/igniteonline/ignite-settings?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

This is a tiny utility library that will hit our API and retrieve our common settings.

This makes it easier for us to maintain/update all our clients platforms without having to charge hours to go through each on of them and manually run the updates.

---

### Usage
The library is written in ES6 but transpiled with babel for your usage.
It relies on the fetch API as well, so remember to polyfill if necessary!

```import getToken from 'ignite-settings'```

It returns a `Promise` which resolves to the settings if successful or an error message otherwise:

```
 getToken()
.then(token => { // do stuff })
.catch(error => { // oh no! });
```
### Building
We use [Flow](https://flow.org/en/docs/) for type checking before the build process.
Ensure you have `flow` running when developing.

Once finished you can build with:
```javascript
yarn run build
```
or
```javascript
npm run build
```
### Testing
We use [Jest](https://github.com/facebook/jest) to run our tests.
Simply run: 

```npm run test```

The tests will display coverage results too.
We require 100% test coverage.

### Contributing
Please shoot us an [email](mailto:studio@igniteonline.com.au) for support/suggestions!