const EventEmitter = require('events'); //EventEmitter is a class

const customEmitter = new EventEmitter(); //creating an object of that class


//There are many methods of an object of a EventEmitter class
// we are interested in on method and emit method.

//on - listen for an event

customEmitter.on('response',  (name,id)=>{
    console.log(`data received user ${name} with id ${id}`);
})//pass name of the event as an argument

//we can have as many methods we would want
customEmitter.on('response', ()=>{
    console.log('do some other logic for the same event'); //do some other logic here for the same event
})

//we can pass

//we first listen for an event and then emit it
//on -> emit -> on is not possible

//emit - emit an event
//we can pass arguments when we are omitting events
//can access these arguments as parameters in callback functions
customEmitter.emit('response','john',34);


