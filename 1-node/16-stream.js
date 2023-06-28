// //streams
//
// //writeable
// //readable
// //duplex
// //transform
//
// What are Streams?
//     Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −
//
// Readable − Stream which is used for read operation.
//
//     Writable − Stream which is used for write operation.
//
//     Duplex − Stream which can be used for both read and write operation.
//
//     Transform − A type of duplex stream where the output is computed based on input.
//
//     Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −
//
// data − This event is fired when there is data is available to read.
//
//     end − This event is fired when there is no more data to read.
//
//     error − This event is fired when there is any error receiving or writing data.
//
//     finish − This event is fired when all the data has been flushed to underlying system



//link --- >>> https://www.tutorialspoint.com/nodejs/nodejs_streams.htm

const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigfile.txt', {highWaterMark : 9000,
    encoding : "utf8"})

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream - createReadStream('./content/bigfile.txt', {highWaterMark : 9000})
//const stream - createReadStream('./content/bigfile.txt', {encoding : 'utf8'})
stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',()=>{
    console.log(error)
})