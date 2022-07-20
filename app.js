const express = require("express");
const {json}=require("express");
const cors=require( 'cors');
const dotenv =require( 'dotenv')
const cookieParser =require( 'cookie-parser');
const {dirname,join} =require( 'path');
const { fileURLToPath } =require( "url");
const userrouter =require('./api/routes/users.js')
// const bodyparser =require( 'body-parser')
const authRouter =require( './api/routes/auth.js')

dotenv.config();

// const _dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const PORT=process.env.PORT || 2008;
const corsOptions={credentials:true,origin:process.env.url || '*'};
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
// app.use(express.urlencoded({extended:false}));


// app.use("/",express.static(join(_dirname,"public")));
app.use('/api/users',userrouter);
// app.use('/api/auth',authRouter);

app.listen(PORT,()=>console.log(`Server is listening in ${PORT}`))