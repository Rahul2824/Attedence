
const express = require("express")
const cors = require("cors")
const app = express()
const { MongoClient } = require("mongodb");

app.use(cors())
app.use(express.json())

app.get("/api/user",(req,res)=>{
    res.json({
        message: "Backend is running now"
    })
})

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`server is running on port 5000`);
    
})