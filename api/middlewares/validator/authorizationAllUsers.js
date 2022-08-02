const jwt=require ('jsonwebtoken');
const {JWT_SECRET}=require('../../constants/index.js')

function authenticateTokenALlUsers(req,res,next){
    const authHeader=req.headers['authorization'];//Bearer Token
    const token=authHeader && authHeader.split(' ')[1];
    // const {token}=req.query  //Bearer Token
    if(token==null)
    return res.status(401).json({error:"Null Token"});
    jwt.verify(token,JWT_SECRET,(error,user)=>{
        if(error)
        return res.status(403).json({error:error.message});
        req.user=user;
        next();
    })

}

module.exports={authenticateTokenALlUsers};