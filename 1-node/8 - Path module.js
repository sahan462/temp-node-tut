//path module

// In Node.js, the path module provides utilities for working with file and directory paths. The path separator in Node.js is platform-dependent.
//
// On Windows, the path separator is a backslash (\), while on Unix-like systems (such as Linux and macOS), it is a forward slash (/).
//
// To handle this platform difference, Node.js provides the path.sep property, which represents the platform-specific path separator. You can use path.sep to dynamically construct paths in a platform-independent manner.




const path = require('path');

//path separator0   QZAX3WE4
console.log(path.sep);

//joining a path
const filepath = path.join('/content','subfolder','text.txt');
console.log(filepath);

//render base file name
const base = path.basename(filepath);
console.log(base);

//getting absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);

//we need absolute path since we run this application on a total different environment like a cloud server.
