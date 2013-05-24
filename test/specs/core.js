var spec = require('brofist')()
var assert = require('assert')

var signal = require('../../')

module.exports = spec('Module: shoutout', function(it, spec) {
  spec('signal()', function(it) {
    it('Should construct a new Signal.', function() {
      var s = signal()
      assert(typeof s == 'function')
      assert(typeof s.add == 'function')
      assert(typeof s.once == 'function')
      assert(typeof s.remove == 'function')
    })
  })

  spec('signal:add(f)', function(it) {
    it('Should add a handler.', function() {
      var s = signal()
      var p = []
      s.add(function(a){ p.push(a) })
      s(1)

      assert.deepEqual(p, [1])
    })

    it('Should not allow duplicates.', function() {
      var s = signal()
      var p = []
      var push = function(a){ p.push(a) }

      s.add(push).add(push)
      s(1)

      assert.deepEqual(p, [1])
    })
  })

  spec('signal:once(f)', function(it) {
    it('Should notify the handler once.', function() {
      var s = signal()
      var p = []
      var push = function(a){ p.push(a) }

      s.once(push)
      s(1)

      assert.deepEqual(p, [1])
    })
  })

  spec('signal:remove(f)', function(it) {
    it('Should remove a previous handler.', function() {
      var s = signal()
      var p = []
      var push = function(a){ p.push(a) }

      s.add(push).remove(push)
      s(1)

      assert.deepEqual(p, [])
    })
  })
})