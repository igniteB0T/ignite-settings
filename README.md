# Ignite settings

[![Build Status](https://travis-ci.org/igniteonline/ignite-settings.svg?branch=master)](https://travis-ci.org/igniteonline/ignite-settings)

This is a tiny utility library that will hit our API and retrieve our common settings.

This makes it easier for us to maintain/update all our clients platforms without having to charge hours to go through each on of them and manually run the updates.

---

### Usage
The library is written in ES6, hence you need babel support.
It relies on the fetch API as well, so remember to polyfill if necessary!

```import getToken from 'babel-loader!ignite-settings'```

It returns a `Promise` which resolves to the settings if successful or an error message otherwise:

```
 getToken()
.then(token => { // do stuff })
.catch(error => {// oh no! });
```
### Testing
We use [AVA](https://github.com/avajs/ava) to run our tests.
Simply run: 

```npm run test```

### Contributing
Please shoot us an [email](mailto:studio@igniteonline.com.au) for support/suggestions!