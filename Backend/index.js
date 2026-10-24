
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
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

const { ObjectId } = require("mongodb");
const { log } = require("console");

app.patch(
  "/Attendance/Collage-Data/:year/:id/:lectures/status",
  async (req, res) => {
    try {
      const db = await Connection();

      const { year, id, lectures } = req.params;
      const { status } = req.body;

      const allowedYears = [
        "First-year-Data",
        "Second-year-Data",
        "Third-year-Data",
        "Final-year-Data",
      ];

      const allowedLectures = [
        "lecture-1",
        "lecture-2",
        "lecture-3",
        "lecture-4",
        "lecture-5",
        "lecture-6",
      ];

      if (!allowedYears.includes(year)) {
        return res.status(400).json({ message: "Invalid year" });
      }

      if (!allowedLectures.includes(lectures)) {
        return res.status(400).json({ message: "Invalid lecture" });
      }

      if (!["Present", "Absent"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid student ID" });
      }

      const result = await db.collection(year).updateOne(
        { _id: new ObjectId(id) },
        { $set: { [lectures]: status } }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({
        message: "Attendance updated successfully",
        year,
        lectures,
        status,
      });
    } catch (error) {
      console.error("PATCH Error:", error);
      res.status(500).json({ message: "Failed to update attendance" });
    }
  }
);

app.patch(
  "/Attendance/Collage-Data/First-year-Data/:division/:id/status",
  async (req, res) => {
    try {
      const db = await Connection();
      const { division, id } = req.params;
      const { status } = req.body;

      const result = await db
        .collection(`First-year-Data(${division.toUpperCase()})`)
        .updateOne(
          { _id: new ObjectId(id) },
          { $set: { status } }
        );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json({ message: "Attendance updated", status });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update attendance" });
    }
  }
);

app.get(
  "/Attendance/Collage-Data/First-year-Data/:division",
  async (req, res) => {
    try {
      const db = await Connection();

      const division = req.params.division.toUpperCase();

      // Only allow A, B, C, D
      if (!["A", "B", "C", "D"].includes(division)) {
        return res.status(400).json({
          message: "Invalid division",
        });
      }

      const collectionName = `First-year-Data(${division})`;

      const data = await db
        .collection(collectionName)
        .find({})
        .toArray();

      res.status(200).json(data);
    } catch (error) {
      console.error("Data fetch error:", error);

      res.status(500).json({
        message: "Failed to fetch student data",
      });
    }
  }
);
app.get("/Attendance/Collage-Data/Second-year-Data", async (req, resp) => {
  const db =await Connection();
  const data= await db.collection("Second-year-Data")
  .find({})
  .toArray()
  resp.status(200).json(data)
})
app.get("/Attendance/Collage-Data/Third-year-Data", async (req, resp) => {
  const db = await Connection();
  const data = await db
    .collection("Third-year-Data")
    .find({})
    .toArray();
  resp.status(200).json(data);
});
app.get("/Attendance/Collage-Data/Final-year-Data",async(req,resp)=>{
  const db = await Connection()
  const data = await db.collection("Final-year-Data")
  .find({})
  .toArray()
 resp.status(200).json(data)
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
      "First Year(A)": "First-year-Data(A)",
      "First Year(B)": "First-year-Data(B)",
      "First Year(C)": "First-year-Data(C)",
      "First Year(D)": "First-year-Data(D)",
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

// start authantication from here
 async function passdemo() {
   const password = "rahul@1234"

   const hashpassword = await bcrypt.hash(password,10)
   console.log("hashed password = ",hashpassword);
   
   const ismatch = await bcrypt.compare("rahul@1234",hashpassword)
   console.log("password correct:",ismatch);
   
 }
passdemo()
app.listen(PORT,()=>{
  console.log(`server is running on PORT ${PORT}`);
  
})