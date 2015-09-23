# pubsub
simple pubsub for argumants and events

### init

      $ npm install expubsub

      const PubSub = require('expubsub');

### methods

**PubSub.set(String paramName, value)**

Save an argument: `PubSub.set('hehe', 'yoo')`

Or attribute in an object: `PubSub.set('hehe.wow', 'yoo')` // will create a object 'hehe' while it is undefined.

**PubSub.get(String paramName)**

Get a argument, or attribute in an object.

**PubSub.remove(String paramName)**

Delete a argument, or attribute in an object.

**PubSub.on(String eventName, callback)**

Bind an event:

      PubSub.on('heheFunc', () => return 'hehe');

**PubSub.emit(String eventName)**

Emit an event:
  
      PubSub.emit('heheFunc') // 'hehe'

**PubSub.exit(String eventName, ref)**

Destory an event by ref, if ref is undefined, it will destory all homonymous events.
