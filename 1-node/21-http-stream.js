var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{

    const text = fs.readFileSync('./content/bigfile.txt');
    res.end(text)

    //above file reading method is not effective because

    // Asynchronous and Non-Blocking: createReadStream operates asynchronously,
    // meaning it doesn't block the execution of other tasks while reading ' +
    // 'the file. It allows the program to continue executing other operations ' +
    // 'while the file is being read. In contrast, readFileSync is synchronous, ' +
    // 'and it blocks the execution until the entire file is read, potentially ' +
    // 'leading to slower performance, especially when dealing with large files or ' +
    // 'multiple simultaneous file operations.

    // Memory Efficiency: createReadStream reads the file in smaller chunks, which
    // helps conserve memory, especially when working with large files. It buffers
    // a chunk of data at a time, processes it, and then moves on to the next chunk.
    // On the other hand, readFileSync reads the entire file into memory at once, which
    // can lead to memory limitations, particularly when working with large files or running
    // multiple file operations concurrently.

    // Scalability: createReadStream is more scalable as it can handle multiple simultaneous
    // file operations efficiently. Since it operates asynchronously, it allows other parts
    // of the application to continue executing while the file is being read. In contrast,
    // readFileSync blocks the execution of the entire program until the file is read,
    // potentially causing performance bottlenecks when dealing with concurrent file operations.

    // Stream Processing: createReadStream provides the ability to process the
    // file data as a stream, allowing you to perform transformations, filtering,
    // or analysis on the data as it is being read. This can be useful when
    // working with large files or implementing real-time data processing
    // scenarios. readFileSync does not provide similar stream processing
    // capabilities.

    // Error Handling: createReadStream emits error events if there are any issues
    // during the file reading process, allowing you to handle errors appropriately
    // in the code. readFileSync, on the other hand, throws exceptions directly, which
    // can be harder to handle and might crash the application if not properly caught.

    const fileStream = fs.createReadStream('./content/bigfile.txt','utf8');
    fileStream.on("open", ()=>{
        fileStream.pipe() //pushing readstream from to the write stream
    })

    fileStream.on("error",(err)=>{
        res.end(err)
    })

})

    .listen(5000);