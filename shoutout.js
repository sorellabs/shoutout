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