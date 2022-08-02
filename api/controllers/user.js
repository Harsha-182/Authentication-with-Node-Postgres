const {User,Organization} =require("../../db/models");


const getAllUser=async(req,res)=>{
  const organization=await User.findAll({})
  res.status(200).send(organization)
}
const checkIfUserExists = async (query) => User.findOne({

  where: {
    ...query,
  },
  attributes: ['id', 'name', 'email', 'password', 'org_id'],
  // include: [Organization],
});

  const createUserWithCredentials = async ({
    id,email, name, password,org_id,
  }) =>
{
    const userDetails = {
      id,
      email,
      name,
      password,
      org_id
    }
    
    if (!org_id) {
      const defaultOrg = await Organization.findOne({
        where: {
          name: 'Public',
        },
      });
      userDetails.org_id = defaultOrg.id;
    }

     return User.create({
      ...userDetails,
    });
  };

  const getUserWithCredentials = async (userId) => User.findOne({
    where: {
      id: userId,
    }
  });

  const updatePassword = async (userId, password) => {
    const userWithCredentials = await getUserWithCredentials(userId);
    return userWithCredentials.update({
      password,
    });
  };
  
   

  module.exports={
    checkIfUserExists,
    createUserWithCredentials,
    getUserWithCredentials,
    updatePassword,
    getAllUser
  }