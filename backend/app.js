const express=require("express");
const cors =require("cors");
const app= express();
require("./db/conn");
require("./controllers/income");
require('dotenv').config();
const {readdirSync}=require('fs');
const PORT= process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello world");
})

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/'+ route)))

const server=()=>{
    app.listen(8000,()=>{
        console.log(`listening to port 8000`);
    });
}
server();