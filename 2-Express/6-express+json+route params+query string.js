const express = require('express');
const app = express();
const {products,people} = require('./data');

//importing exports from data.js


//sends a json response.
//res.json([body])
//this method sends a json response(with the correct content type) that is the parameter converted to a json string using
//JSON.stringify()

//res.json(null)
//res.json({user:'tobi'})
//res.status(500).json({error:'message'})
app.get('/products',(req, res)=>{
    //res.json(products); //if there are more than one,they should be added to array and pass it.
    res.send('<h1>Product Page</h1><a href="/api/products">products</a>')
})

app.get('/people',(req, res)=>{
    res.json(people);
})

//:productID is called a route parameter
app.get('/api/products/:productID',(req, res)=>{


    //send only specific properties
    // const newProducts = products.map((product)=>{
    //     const {id,name,image} = product;
    //     return {id,name,image};
    // })

    //The map() method is still used to iterate over each element of the products array.
    //Inside the arrow function, the destructuring assignment is used to extract the id, name, and image properties from the product object.
    //Finally, the return statement is used to return the newly created object. This means that for each product in the products array, a new
    // object with the id, name, and image properties is created, and all of these objects are collected into a new array called newProducts.



    //send a specific product
    // const singleProduct = products.find((product)=>{
    //     product.id === 1;
    //     return product;
    // })
    //

    //use of params(route parameters) to get a specific product
    //these parameters comes as STRINGS
    //console.log(req);
    //console.log(req.params);

    const {productID} = req.params;

    const paramProduct = products.find((product)=> product.id === Number(productID))
    //if product can not find it returns as 'undefined'
    //if so
    if(!paramProduct){
        res.status(404).send('Product is not available');
    }
    res.json(paramProduct);
})


//response to query parameters
app.get('/api/v1/query',(req, res)=>{
    //console.log(req.query);
    const {search, limit} = req.query;

    let sortedProducts = [...products];
    //console.log(products);
    //console.log(sortedProducts)
    //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    //refer - https://www.w3schools.com/react/react_es6_spread.asp

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        res.status(200).send('no products matched your search');
    }else{
        res.status(200).json(sortedProducts);
    }

    // the response is being sent as a JSON file because the API is designed
    // to provide data in JSON format.

    //you cannot send two responses for the same request(it is not show any error in the front end but server side)


})

app.get('*',(req, res)=>{
    res.status(404).send('page not found');
    //return res.status(200).json({success: true, data:[]});
})



app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})