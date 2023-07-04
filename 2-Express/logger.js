const logger = (req,res,next) =>{
    const method = req.method; //get,post etc.
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
}

module.exports = logger;