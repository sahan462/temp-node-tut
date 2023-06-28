const http = require('http');
const {log} = require("debug");

const server = http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{'content-type':'text/plain'});//provide metadata of our response 200 - status code
    res.end('<h1>Home Page</h1>'); //also can use res.write();
    //after doing whatever(something like use res.write(); res.end();) you want, you have explicitly call res.end();
    console.log('ok');
})

server.listen(5000); //our programme which is stored in a server is always listening to the port number 80 0r 443 in the server
//in local development we can use arbitrary number as the port number
//but when it comes to real world we have to use either port number 80 or 443

//port numbers are used to identify the service from the server(http,smtp,ftp or any other service)
//format ==>> ip address:port number
//there are also local port numbers available
//you can view your computer's connections using netstat -n
