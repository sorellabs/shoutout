Shoutout
========

Shoutout is a dead-simple eventing library that favours safety,
abstraction and compositionality. Thus, `signals` are modelled as
fist-class applicable objects.


Getting started
---------------

To start interacting with the library, just grab the module::

    var signal = require('shoutout')
    // If you're not using modules, the name `signal` in your global
    // object will have the module instantiated for you.

Once you got the module kickin' and running, it's time to create some
signals. You do so by just calling the module function::

    var clicked = signal()

And now you have a brand new signal instance which can emit
signals. Call the signal instance with the values you want to emit::

    clicked(10, 20) // emits a signal with the values (10, 20)

It's not interesting if nothing happens when you emit signals, so you
should add listeners that handle the values going through a signal
instance to do interesting things::

    function logger(x, y) {
      console.log('Clicked at (', x, ',', y, ')')
    }
    clicked.add(logger)

Do note that the listeners are only called when new signals are emitted,
so `logger` has seen no action yet — we emitted a value before adding it
as a listener. Let's fix that by emitting new signals::

    clicked(15, 20)
    // => Clicked at (15, 20)

If you're not interested in listening to a certain event with a
particular function, you can just remove it::

    clicked.remove(logger)

You can also remove all the listeners by not providing any function to
the `remove` method::

    clicked.remove()



API Reference
-------------

.. js:function:: signal()

   :returns: Signal

   Constructs a new `Signal` instance.


.. js:function:: Signal.add(f)

   :param Function f: The function that'll listen to the signal.
   :returns: Signal the signal instance.

   Adds a new listener to the signal. This listener will start receiving
   the next signals emitted by the object.


.. js:function:: Signal.once(f)

   :param Function f: The function that'll listen to the signal.
   :returns: Signal the signal instance.

   Adds a new listener to the signal. The listeners will only handle the
   next signal emitted by the object, and then stop listening.


.. js:function:: Signal.remove(f)

   :param Function f: The function that'll stop listening to the signal.
   :returns: Signal the signal instance.

   Removes a listener from the signal.


.. js:function:: Signal.removeAll()
   
   :returns: Signal the signal instance.

   Removes all listeners from the signal.
