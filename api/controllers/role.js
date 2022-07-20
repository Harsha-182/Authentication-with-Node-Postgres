
//model
const {Organization}=require("../../db/models")
console.log(Organization);
//1.Add Role
const addRole=async(req,res)=>{
    let data={
       id:req.body.id,
       name:req.body.name,
    }

    const role=await Organization.create(data)
    res.status(200).send(role);
}

//2.Get All Role

const getAllRole=async(req,res)=>{
    const role=await Organization.findAll({})
    res.status(200).send(role)
}

module.exports={
    addRole,
    getAllRole
}

