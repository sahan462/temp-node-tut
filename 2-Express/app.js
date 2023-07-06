const express = require('express');
const app = express();

const people = require('./routes/people');
const login = require('./routes/auth');

app.use(express.static('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\methods-public'));
app.use(express.urlencoded({extended:false})); //this is a built in middleware in express
app.use(express.json());

app.use('/api/people',people);
app.use('/login',login);

app.listen(5000,()=>{
    console.log("app is listening on port 5000");
})