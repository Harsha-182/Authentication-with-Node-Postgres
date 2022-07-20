const db=require('../../db/models')
const {Organization}=require('../../db/models');
const jwt =require('jsonwebtoken');


//model
const {User}=require('../../db/models')
const bcrypt=require('bcrypt');
const { jwtTokens } = require('../../utils/jwt-helpers');

console.log(User);
//1.Add User
const addUser=async(req,res)=>{
    const body = req.body;
    if (!(body.email && body.password)) {
      return res.status(400).send({ error: "Data not formatted properly" });
    }   

    const user1 = new User(body);
    const salt = await bcrypt.genSalt(10);
    let hashedpassword = await bcrypt.hash(user1.password, salt);
    
    let data={
        id:body.id,
        name:body.name,
        email:body.email,
        password:hashedpassword
     }
    const user=await User.create(data);
    console.log(user);
    
    
    
    // const generateJWT = (id,name,email,password) => jwt.sign(id,name,email,password, JWT_SECRET, {
    //     issuer: 'Backend1',
    //     expiresIn: '2h',
    //   });
    //   function jwtTokens({id,name,email,password}){
    //     const user={id,name,email,password};
    
        const token=jwt.sign(data,"secret",{expiresIn:'10m'});
        // const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'5m'});
        // return ({accessToken,refreshToken});
    // }
    // let token = await jwtTokens(user)
    return res.status(200).json(({
        userInfo: {
          id: user.id,
          name: user.name,
          email: user.email,
          password:user.password
        },
        accessToken: token,
        Organization,
      }))
}

//2.Get All Role

const getAllUser=async(req,res)=>{
    const user=await User.findAll({})
    res.status(200).send(user)
}

module.exports={
    addUser,
    getAllUser
}