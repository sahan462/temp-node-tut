const http = require('http');
const {log} = require("debug");

//get all files
const {readFileSync} = require('fs');

const homepage = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\navbar-app\\index.html');
const homeStyles = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\navbar-app\\styles.css');
const homeImage = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\navbar-app\\logo.svg');
const homeLogic = readFileSync('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\navbar-app\\browser-app.js');

//we are not invoking this every time
//we require this file when initiate our server
//basically at the initial start time when the server start to run
//if we put inside createserver() it invokes file every time user hit the server

const server = http.createServer((req,res)=>{
    const url = req.url;
    //homepage
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});//provide metadata of our response 200 - status code
        res.end(homepage); //also can use res.write();
        //after doing whatever(something like use res.write(); res.end();) you want, you have explicitly call res.end();
    }
    //about
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});//provide metadata of our response 200 - status code
        res.end('<h1>About</h1>'); //also can use res.write();
        //after doing whatever(something like use res.write(); res.end();) you
    }
    //styles.css
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'});
        res.write(homeStyles);
        res.end();
    }
    //logic file
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.end(homeLogic);
    }
    //logo
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }
    //404
    else{
        res.writeHead(404, {'content-type':'text/html'});
        res.end('<h1>404 Error</h1>');
    }

    console.log('user hit the server');
})

server.listen(5000); //our programme which is stored in a server is always listening to the port number 80 0r 443 in the server
//in local development we can use arbitrary number as the port number
//but when it comes to real world we have to use either port number 80 or 443

//port numbers are used to identify the service from the server(http,smtp,ftp or any other service)
//format ==>> ip address:port number
//there are also local port numbers available
//you can view your computer's connections using netstat -n


