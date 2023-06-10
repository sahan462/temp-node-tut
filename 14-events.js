const EventEmitter = require('events')

const customEmitter = new EventEmitter();

//on - listen for an event
//emit - emit an event

customEmitter.on('response', (name,id)=>{
    console.log(`data received ${name} with id:${id}`)
})

customEmitter.on('response', ()=>{
    console.log('some other logic here')
})



//customEmitter.emit('response')
// we can pass arguments when we are emitting events
customEmitter.emit('response','john',34)