const {people} = require("../data");
const getPeople = (req,res)=>{
    const {name} = req.query;
    res.status(200).json({success:true,name:name});
}

const addPeople = (req,res)=>{
    const {name} = req.body;
    console.log(req.query);
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"});
    }
    res.status(201).send({success:true,person:name});

}

const addPeoplePostman = (req,res)=>{
    const {name} = req.body;

    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'});
    }

    res.status(201).send({success:true, data: [...people,name]});

}

const updatePeople = (req,res)=>{
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
}

const deletePeople = (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id));

    if(!person){
        return res.status(404).json({success:false,msg:"id is not found"});
    }else{
        const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
        return res.status(200).json({success:true,msg:"found",data:[...newPeople]});
    }
}

module.exports = {
    getPeople,
    addPeople,
    addPeoplePostman,
    deletePeople,
    updatePeople
}