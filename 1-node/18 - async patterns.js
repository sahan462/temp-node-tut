// const http = require("http");
//
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('Home Page');
//     }else if(req.url === '/about'){
//         res.end('about');
//     }else{
//         res.end('error');
//     }
// })
//
// server.listen(5000,()=>{
//     console.log("Server is listening on port 5000");
// })

//read file setup - asynchrnous

const {readFile} = require('fs');

// readFile('./content/first.txt','utf8',(err, data)=>{
//     if(err){
//         return;
//     }else{
//         console.log(data);
//     }
// })

//problem occurs when you have to import multiple files

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path,"utf8",(err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })

    })
}

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


const start = async() => {
    try {
        const first = await getText('./content/first.txt');
        console.log(first);
    }catch (error){
        console.log(error);
    }
}

start()


