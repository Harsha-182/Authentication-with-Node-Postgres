const router=require('express').Router();
const {
        checks:{
            CREDENTIALS,
            SIGNUP_CHECKS,
            EMAIL_CHECK,
            PASSWORD_CHECK
        },
        validateRequest
    
}=require ("../middlewares/validator");

const {passport} = require('../middlewares/passport');
const {userController}=require("../controllers")
require("../controllers/")
const jwt=require("jsonwebtoken");
const {authenticateToken}=require("../middlewares/authorization.js");
const UserController=require('../controllers/user.js');
const {authenticateTokenALlUsers}=require("../middlewares/validator/authorizationAllUsers.js")


/**
 * @description Route for users to signup users with email/username, password and name.
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @param {integer} id
 */
router.post('/signup',  //Accepts id,email,password,confirmPassword,name,org_id
  SIGNUP_CHECKS,
  validateRequest, async (req, res, next) => {
    const {
      id,
      email,
      password,
      name,
      org_id
    } = req.body;

    try {
      const userExists = await userController.checkIfUserExists({email});
      if (userExists)
       return res.status(400).json({error:"Email in Use"});
      const user = await userController.createUserWithCredentials({id,email, name, password,org_id });
      ;const token = await user.getJwtToken();
      return res.status(200).json({
        userInfo: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        accessToken: token,
      });
    } catch (error){
      console.log(error);
      res.status(400).json({error:error})
    }
  });


/**
 * @description Route to login users with username/email ans password.
 * @param {string} email
 * @param {string} password
 */
router.post('/login',  //Accepts email,password,name
  CREDENTIALS,
  validateRequest,
  passport.authenticate('local', {
    session: false,
  }),
  async(req,res,next)=>{
     try {
       const{user}=req;
      const userWithOrg = await userController.checkIfUserExists({ id:req.user.id });
      const token = await user.getJwtToken();
        return res.status(200).json({
          accessToken: token,
          userInfo: {
            user_id: userWithOrg.id,
            name: userWithOrg.name,
            email: userWithOrg.email,
          },
        });
     } catch (error) {
        res.status(400).json({error:error})

     }
  }
 )

/**
 * @description Used to send the password reset email.
 * @param {String} email The email to be sent the password reset link.
 */
 router.post('/forgot-password',  //Accepts email
 EMAIL_CHECK,
 validateRequest,
  async (req, res, next) => {
  try {
    const { email} = req.body;
    const userExists = await userController.checkIfUserExists({email});
    if (!userExists) res.status(400).json({error:"User Not found"})
    
 
    await userExists.sendPasswordResetMail();
    
    return res.status(200).json(
     {success:"Link Sent to Email"}
    );
  } catch (error) {
  res.json({eror:error})
  }
}
 );

 /**
 * @description Used to reset the password.
 * @param {String} password
 */
  router.post('/reset-password',   //Accepts email,password,confirmPassword
  PASSWORD_CHECK,
  validateRequest,
  authenticateToken,
  async (req, res, next) => {
    try {
      const { password } = req.body;
      await userController.updatePassword(req.user.id, password);
      return res.status(200).json({success:"Password Updated"})
       
    } catch (error) {
      return res.status(401).json({error:error})

    }
  });

  router.get('/allUsers',
  authenticateTokenALlUsers,
  UserController.getAllUser);

module.exports=router;


