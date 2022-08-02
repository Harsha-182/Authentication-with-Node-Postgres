const express = require("express");
const {json}=require("express");
const cors=require( 'cors');
const dotenv =require( 'dotenv')
const cookieParser =require( 'cookie-parser');
const router=require('./api/routes/index.js')

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;
const corsOptions={credentials:true,origin:process.env.url || '*'};
app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

router(app)


app.listen(PORT,()=>console.log(`Server is listening in ${PORT}`))