
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
 }
passdemo()

//JWT start here

const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    userId: "12345",
    role: "Teacher",
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h",
  }
);

console.log(token);


app.listen(PORT,()=>{
  console.log(`server is running on PORT ${PORT}`);
  
})