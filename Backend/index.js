// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Attendance Backend is Running!");
// });

// app.get("/api/test", (req, res) => {
//     res.json({
//         message: "Backend API is working successfully"
//     });
// });

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express")
const cors = require("cors")
const app = express()

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