const RoleController=require('../controllers/role.js')

const router=require('express').Router()

router.post('/addRole',RoleController.addRole);
router.get('/allRoles',RoleController.getAllRole);


const UserController=require('../controllers/users.js');

router.post('/addUser',UserController.addUser);
router.get('/allUsers',UserController.getAllUser);

module.exports=router;