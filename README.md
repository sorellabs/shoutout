Shout-out [![Build Status](https://travis-ci.org/killdream/shoutout.png)](https://travis-ci.org/killdream/shoutout) ![Dependencies Status](https://david-dm.org/killdream/shoutout.png)
==========

The simplest eventing library that could possible work.


## Example

```js
var signal = require('shoutout')
var clicked = signal()

clicked.add(function(x, y){ console.log(x, y) })
clicked(10, 10)
// => 10 10
```


## Installing

The easiest way is to grab it from NPM (use [Browserify][] if you're on a
browser):

    $ npm install shoutout
    
If you **really** want to continue suffering with old and terrible module
systems (or use no module system at all), you can run `make bundle` yourself:

    $ git clone git://github.com/killdream/shoutout
    $ cd shoutout
    $ npm install
    $ make bundle
    # Then use `dist/shoutout.umd.js` wherever you want.
    
[browserify]: https://github.com/substack/node-browserify


## Platform support

This library assumes an ES5 environment, but can be easily supported in ES3
platforms by the use of shims. Just include [es5-shim][] :3

[es5-shim]: https://github.com/kriskowal/es5-shim

[![browser support](https://ci.testling.com/killdream/shoutout.png)](http://ci.testling.com/killdream/shoutout)


## Tests

For node:

    $ npm test
    
For the browser:

    $ npm install -g brofist-browser
    $ make test
    $ brofist-browser serve test/specs
    # Then point your browsers to the URL on yer console.


## API

### `signal()`

Creates a new signal object.

### `Signal:add(f)`

Adds the given function as a handler.

### `Signal:once(f)`

Adds the given function as a handler, evaluates it only once.

### `Signal:remove(f)`

Removes the function.

### `Signal(...)`

Calls all the handlers.



## Licence

MIT/X11. i.e.: Do whatever you fucking want, bro.
