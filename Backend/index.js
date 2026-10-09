
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

const dbname = "Collage-Data";
const collectionname = "Principal";
const client = new MongoClient(url);

async function Connection() {
  try {
    await client.connect();
    console.log("connected sucessifully!");
    return client.db(dbname);
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
    throw error;
  }
}

app.get("/Collage-Data/Principal",async(req,resp)=>{
  try {
    const db =await Connection();
    const collection = db.collection(collectionname)
     const data = await collection.find({}).toArray();

     console.log("DATA FROM MONGODB:", data);

    resp.status(200).json(data);
  } catch (error) {
     console.log("GET ERROR:", error);
  }
})
app.listen(PORT,()=>{
  console.log(`server is running on PORT ${PORT}`);
  
})