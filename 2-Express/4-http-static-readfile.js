const express = require('express');
const path = require('path');
const app = express();

//basically, in express app we do not want to import all html,css and js files.
//invoking static resources -> css,js,image files etc.
//you have to create a file and store all static files in there.

//then apply below code
//setup static and middleware
app.use(express.static('C:\\Users\\ASUS\\IdeaProjects\\node\\2-Express\\public'));
//you can send html file also,if you add html file inside public you do not need to use sendFile


app.get('/',(req, res)=>{
    // res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
    //this is also possible
    //res.sendFile(path.join(__dirname,'./navbar-app/index.html'));
})

app.all('*',(req, res)=>{
    res.status(400).send('resource not found');
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})
