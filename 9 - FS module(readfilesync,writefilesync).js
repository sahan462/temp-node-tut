//fs module

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\content\\first.txt', 'utf8');
const  second = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\content\\second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`);
//if there is not a file available, node will create the file.
//if available and if it has a content, the content will be overwritten.

//but we can append to an existing file.
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`,{flag : 'a'
});

//for append add flag: 'a' as  the second parameter.





