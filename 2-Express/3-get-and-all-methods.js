// minimal and flexible node js web app framework
const express = require('express'); //importing the module
const app = express(); //invoke module-->>The express() function returns an Express application object.

// Express.js does not require the new keyword to create an instance of the Express application object. This is because the Express module itself takes care of internally
// creating and returning a new instance of the application object.

app.get('/', (req, res)=>{
    res.status(200).send('Home Page');
})

app.get('/about', (req, res)=>{
    res.status(200).send('About Page');
})

//handle all http verbs
//creating your own 404 response
//app.all()
//take two arguments -> path and call back function
//* -> means all the undeclared paths
app.all('*', (req, res)=>{
    //res.send('<h1>resource not found</h1>');

    //you can also add status code
    res.status(404).send('<h1>resource not found</h1>');
})

app.listen(5000,()=>{
    console.log('server is listening');
})


//app.get -> Read Data
//app.post -> Insert Data
//app.put -> Update Data
//app.delete -> Delete Data
//app.all
//app.use
//app.listen

