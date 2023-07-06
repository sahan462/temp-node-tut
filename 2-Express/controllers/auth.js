const login = (req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }else{
        res.status(200).send("Please provide credentials");
    }
}

module.exports = login;