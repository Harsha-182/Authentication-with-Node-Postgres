const router=require('express').Router();
const authRouter=require('./auth.js')

router.use('/api/auth',authRouter);


module.exports=(app)=>app.use(router);

// Organization Model
// const OrgController=require('../controllers/role.js')
// router.post('/addOrg',RoleController.addOrganization);
// router.get('/allOrgs',RoleController.getAllOrganization);
// router.get("/OrgUser",RoleController.getOrgUser);