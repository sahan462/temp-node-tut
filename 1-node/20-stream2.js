//streams

//read or write sequentially
//when we have to handle and manipulate streaming data
//extend event emitter class

// provide an efficient way to read from or write to data sources
// and destinations in small chunks, rather than loading the entire
// data into memory at once

// Streams allow you to process data incrementally as it becomes available,
// making them ideal for handling large files or network communication.

// Here are some common uses of streams in Node.js:
//
// Reading and Writing Files: Streams can be used to read data from files or
// write data to files. Instead of loading the entire file into memory, you
// can read or write data in small chunks, reducing memory usage and improving
// performance.
//
// Network Communication: Streams are extensively used in network communication,
// such as handling HTTP requests and responses. Incoming data from clients can
// be processed in chunks using readable streams, while outgoing data can be
// written in chunks using writable streams.
//
// Piping: Streams can be easily piped together using the pipe() method.
// Piping allows you to take the output from one stream and directly send
// it as input to another stream. This is useful for tasks like compressing
// or decompressing data, transforming data, or copying data from one location
// to another.
//
// Data Transformation: Transform streams are a type of duplex stream that
// allow you to modify or transform the data as it passes through the stream.
// This is useful for tasks like converting data formats, compressing or
// decompressing data, or performing data validation.
//
// Real-time Data Processing: Streams are well-suited for real-time data
// processing scenarios where you need to process data as it arrives. For
// example, you can use streams to build real-time chat applications or
// process live data streams from IoT devices.

const {createReadStream} = require('fs'); //createReadStream is the class

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream("./content/bigfile.txt", {highWaterMark: 90000})
//const stream = createReadStream("./content/bigfile.txt", {encoding: 'utf8'})

const stream = createReadStream('./content/bigfile.txt',{highWaterMark:9,encoding : "utf8"});


// data event
stream.on("data",(result)=>{
    console.log(result)
})

// In the provided code snippet, the result variable is not explicitly
// initiated within the code itself. Instead, it is a parameter passed
// to the callback function of the "data" event handler.
// When the "data" event is triggered during the file reading process,
// the Node.js runtime automatically invokes the callback function specified
// for that event. At that point, the runtime passes the data chunk that was
// read from the file as an argument to the callback function. This argument
// is conventionally named result in this code snippet, but you could name it
// anything you prefer.
// So, the result variable is not explicitly initiated in the code because it
// is assigned the value of the data chunk provided by the file stream during
// each "data" event occurrence.

//error event
stream.on('error',(err)=>{
    console.log(err)
})
