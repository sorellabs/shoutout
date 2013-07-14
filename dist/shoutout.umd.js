(function(e){if("function"==typeof bootstrap)bootstrap("shoutout",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeShoutout=e}else"undefined"!=typeof window?window.shoutout=e():global.shoutout=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// # Module shoutout
//
// The simplest eventing library that could possible work.
//
//
// :licence: MIT
//   Copyright (c) 2011 Quildreen "Sorella" Motta <quildreen@gmail.com>
//
//   Permission is hereby granted, free of charge, to any person
//   obtaining a copy of this software and associated documentation files
//   (the "Software"), to deal in the Software without restriction,
//   including without limitation the rights to use, copy, modify, merge,
//   publish, distribute, sublicense, and/or sell copies of the Software,
//   and to permit persons to whom the Software is furnished to do so,
//   subject to the following conditions:
//
//   The above copyright notice and this permission notice shall be
//   included in all copies or substantial portions of the Software.
//
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//   LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
//   OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
//   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// -- Helpers ----------------------------------------------------------

// ### Function isnt
//
// Compares inequality of two values.
//
// :: A -> B -> bool
function isnt(a) { return function(b) { return b !== a }}


// -- Core implementation ----------------------------------------------

// ### Function signal
//
// Constructs a new signal instance.
//
// :: () -> Signal
function signal() {
  var handlers = []

  notify.add    = add
  notify.once   = once
  notify.remove = remove

  return notify


  // ### Function Signal
  //
  // Notifies all handlers of a signal.
  //
  // :: A... -> ()
  function notify() {
    var args = arguments
    handlers.forEach(function(f){ f.apply(null, args) }) }

  // ### Function add
  //
  // Adds a new handler.
  //
  // :: (A... -> B) -> Signal
  function add(f)  {
    if (handlers.every(isnt(f)))  handlers.push(f)
    return notify }

  // ### Function once
  //
  // Adds a new handler that'll be executed at most once.
  //
  // :: (A... -> B) -> Signal
  function once(f) {
    add(function() { f.apply(this, arguments)
                     remove(f) })
    return notify }

  // ### Function remove
  //
  // Removes a handler.
  //
  // :: (A... -> B) -> Signal
  function remove(f) {
    handlers = handlers.filter(isnt(f))
    return notify }
}

// -- Exports ----------------------------------------------------------
module.exports = signal
},{}]},{},[1])(1)
});
;