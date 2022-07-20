const jwt =require('jsonwebtoken');

function jwtTokens({id,name,email,password}){
    const user={id,name,email,password};
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'});
    const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'5m'});
    return ({accessToken,refreshToken});
}

module.exports= {jwtTokens}