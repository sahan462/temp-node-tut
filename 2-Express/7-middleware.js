const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');//third party middleware
//req => middleware => res
//**middleware is something that happens between the time the server gets the request
//and the time that the server sends out a response.
//**call back functions in get functions are also middleware functions .
//**the point of having next() is to pass control from one middleware function to the next function in the chain.
//**If you do not include the next() function in a middleware function, the request-response cycle will not proceed
// to the next middleware function in the chain. This means that subsequent middleware functions will not be executed, and the response to the client will not be sent.
//** it runs the code below next() after all middleware function finished.
//**refer -> https://stackoverflow.com/questions/16810449/when-to-use-next-and-return-next-in-node-js

//advantages of using middleware function over adding code inside the route function(app.get())

// 1.Code organization and reusability: Middleware functions allow you to
// separate different aspects of request processing into discrete units.
// For example, you might have middleware functions for authentication
// , error handling, logging, parsing request bodies, or performing specific
// pre-processing tasks. By modularizing your code into middleware, you can
// easily reuse and compose these functions across different routes or even
// in different parts of your application.

// 2.Chaining and order of execution: Middleware functions can be chained
// together, and the order in which they are defined determines the order
// of execution. This allows you to control the flow of request processing
// and apply multiple layers of functionality to a single route. For example,
// you can have authentication middleware that runs before the route handler
// to ensure the user is authenticated before accessing a protected route.

// 3.Error handling: Middleware functions provide a convenient way to handle
// errors in a centralized manner. By placing error-handling middleware at the
// end of the middleware chain or using a specific error-handling middleware,
// you can catch and process errors that occur during request processing.
// This helps avoid repetitive error-handling code in each route handler.

// 4.Code readability and maintainability: Separating your logic into middleware
// functions improves code readability and maintainability. It allows you to
// focus on specific tasks within each middleware, making the code easier to
// understand and modify. Middleware functions also make it easier to add,
// remove, or reorder functionality without modifying the route handlers
// themselves.

// 5.Promotes code sharing and community libraries: Middleware functions are a
// common pattern in web frameworks like Express.js, which means you can take
// advantage of community libraries and middleware packages. Many third-party
// middleware packages provide pre-built functionality for common tasks like
// authentication, request validation, compression, and more. By utilizing
// middleware, you can leverage these existing solutions and benefit from the
// expertise of the community.



//this is a middleware function
// const logger = (req,res,next) =>{
//     const method = req.method; //get,post etc.
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
//     next();
// }
//next -> when you work with middleware you have to pass it to the next middleware.that is why
//either you respond inside the middleware or pass to next middleware
//next is needed.
//req,res and next are passed by express to the middleware function(behind the scenes)

//instead of adding middleware for all the routes manually, we can use app.use()
//app.use([logger,authorize]);
//order matters
//you have to add this above all the routes.

app.use(morgan);

app.get('/',(req, res)=>{

    // const method = req.method; //get,post etc.
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method,url,time);

    //if we have 15 routes we have to add these code inside all those routes.
    //instead we can add these code inside a function.

    res.send('Home');
});

app.get('/about',(req, res)=>{

    // const method = req.method; //get,post etc.
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method,url,time);

    res.send("About");
})

app.get('/api/products',(req, res)=>{
    console.log(req);
    console.log(req.user);
    res.send('products');
})

app.get('/api/items',(req, res)=>{
    res.send('items');
})

//passing two middlewares to same get function
// app.get('/api/items',(req, res)=>{
//     res.send('items');
// })

app.listen(5000,()=>{
    console.log('server listening on port 5000....');
})