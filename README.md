Shout-out
=========

[![Build Status](https://secure.travis-ci.org/robotlolita/shoutout.png?branch=master)](https://travis-ci.org/robotlolita/shoutout)
[![NPM version](https://badge.fury.io/js/shoutout.png)](http://badge.fury.io/js/shoutout)
[![Dependencies Status](https://david-dm.org/robotlolita/shoutout.png)](https://david-dm.org/robotlolita/shoutout)
[![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges)

[![Browser support](https://ci.testling.com/robotlolita/shoutout.png)](http://ci.testling.com/robotlolita/shoutout)


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

Easy-modo: grab it from NPM (use [Browserify][] if you're on a browser):

    $ npm install shoutout
    
> If you're using AMD or no module system at all, you can grab the
> `dist/shoutout.umd.js` file. Note that NPM is the recommended and
> officially supported way, and that the UMD bundle will include all the
> dependencies for the library.
    
[browserify]: https://github.com/substack/node-browserify


## Documentation

Read online at http://shoutout.rtfd.org/ or build your own local copy:

    $ make docs
    
> Note that you'll need [Sphinx](http://sphinx-doc.org/)


## Tests

For node:

    $ npm test
    
For the browser:

    $ npm install -g brofist-browser
    $ make test-browser


## Platform support

This library assumes an ES5 environment, but can be easily supported in ES3
platforms by the use of shims. Just include [es5-shim][] :3

[es5-shim]: https://github.com/kriskowal/es5-shim


## Support

  - Use the [Github tracker][] for reporting bugs/requesting features.
  - The [Google Group][] for general discussion.
  - Follow [@orphoundation][] on Twitter for quick updates.
  - Check the [Google+ community][] for major updates.


[Github tracker]: https://github.com/killdream/shoutout/issues
[Google group]: https://groups.google.com/group/orphoundation
[@orphoundation]: http://twitter.com/orphoundation
[Google+ community]: https://plus.google.com/communities/102026244049761348627


## Developers

  - Maintainers: [Quildreen Motta](https://github.com/robotlolita)
  - [Contributors](https://github.com/robotlolita/shoutout/contributors)
 


## Licence

MIT/X11. i.e.: do whatever you want.
