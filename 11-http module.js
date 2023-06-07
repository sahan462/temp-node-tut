//http module

const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short history')
    }else {
        res.end('<h1> oops </h1>')
    }
})//req and res are objects

//req is representing incoming request
//res is representing response to the request

server.listen(5000)




