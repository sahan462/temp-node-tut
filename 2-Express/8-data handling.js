const express = require('express');
const app = express();
let {people} = require('./data');

//though urls are same, they are not always same. Depends on get,post,put,delete.

//app.use() applies middleware to all our routes
app.use(express.static('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\methods-public'));


/*
By default, Express does not parse the request body automatically.
It provides middleware functions to handle different types of payloads,
such as express.json() for JSON payloads and express.urlencoded() for
form data payloads.

The reason you cannot access the payloads directly without using the
appropriate middleware is that the raw payload data needs to be processed
and converted into a usable format. The middleware functions handle this
parsing and conversion for you, making it easier to work with the data
in your application.
 */

//parse form data
app.use(express.urlencoded({extended:false})); //this is a built in middleware in express

/*
 express.urlencoded() handle parsing of form data payloads, while additional
 middleware can be used to handle different types of payloads or custom parsing
 requirements.
*/


//middleware to handle incoming json data
app.use(express.json());
/*
The app.use(express.json()) middleware function in Express is used to
parse incoming requests with JSON payloads. It enables Express to
automatically parse the JSON data sent in the request body and make it
available in the req.body property.

Here's how it works:

When a request is received by the Express server, if the request
includes a JSON payload (i.e., the request has a Content-Type header of
application/json), the express.json() middleware is applied.

The middleware parses the JSON data from the request body and converts it
into a JavaScript object.

The parsed JSON data is then attached to the req.body property, allowing
subsequent route handlers or middleware functions to access the data easily.
*/


app.get('/api/people',(req,res)=>{
    const {name} = req.query
    res.status(200).json({success:true,name:name});
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'});
    }

    res.status(201).send({success:true, data: [...people,name]});

})


app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    console.log(req.query);
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"});
    }
    res.status(201).send({success:true,person:name});

})

app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }else{
        res.status(200).send("Please provide credentials");
    }
})

//update data

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    // console.log(req.params);
    // res.status(200).send("received");

    const person = people.find((person)=> person.id === Number(id));

    if(!person){
        return res.status(404).json({success:true,msg:`no person with ${id}`});
    }
    //iterating through each element in the people
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }

        return person;
    })

    res.status(200).json({success:true,data:newPeople});
})

//delete method

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false,msg:"id is not found"});
    }else{
        const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
        return res.status(200).json({success:true,msg:"found",data:[...newPeople]});
    }
})


/*
req.params refers to the route parameters in the URL of the
incoming HTTP request. Route parameters are defined in the route
pattern using a colon (:) followed by the parameter name. For example,
in the route /users/:id, the value of req.params.id would capture the
corresponding id value from the URL.
*/

/*
On the other hand, req.query refers to the query parameters in the URL
of the incoming HTTP request. Query parameters are appended to the URL
after a question mark (?) and can contain key-value pairs. For example,
in the URL /users?id=123, the value of req.query.id would be '123'.
*/



//listening to server port
app.listen(5000,()=>{
    console.log("app is listening on port 5000");
})