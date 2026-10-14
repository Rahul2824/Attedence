
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
app.use(cors({
  origin: [
    "http://localhost:5173"
  ]
}));
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
app.post("/api/students", async (req, res) => {
  try {
    const db = await Connection();

    const { name, rollNo, email, year } = req.body;

    if (!name || !rollNo || !email || !year) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Year nusar collection select hoil
    const collections = {
      "First Year": "First-year-Data",
      "Second Year": "Second-year-Data",
      "Third Year": "Third-year-Data",
      "Final Year": "Final-year-Data"
    };

    const collectionName = collections[year];

    if (!collectionName) {
      return res.status(400).json({
        message: "Invalid year"
      });
    }

    const result = await db.collection(collectionName).insertOne({
      name,
      rollNo: Number(rollNo),
      email,
      year,
      createdAt: new Date()
    });

    res.status(201).json({
      message: "Student added successfully",
      collection: collectionName,
      studentId: result.insertedId
    });

  } catch (error) {
    console.error("Add Student Error:", error);

    res.status(500).json({
      message: "Failed to add student"
    });
  }
});

app.listen(PORT,()=>{
  console.log(`server is running on PORT ${PORT}`);
  
})