
//model
const {Organization}=require("../../db/models")
const {User}=require ("../../db/models")
//1.Add Organization
const addOrganization=async(req,res)=>{
    let data={
       id:req.body.id,
       name:req.body.name,
    }

    const organization=await Organization.create(data)
    res.status(200).send(organization);
}

//2.Get All Organization

const getAllOrganization=async(req,res)=>{
    const organization=await Organization.findAll({})
    res.status(200).send(organization)
}

//3.Get Organization-Users

const getOrgUser=async(req,res)=>{
    const organization=await Organization.findAll({
        include:[{
            model:User,
            as:"users"
        }],
   where:({id:10})     
    })
    res.status(200).send(organization)
  }
  

module.exports={
    addOrganization,
    getAllOrganization,
    getOrgUser
}

