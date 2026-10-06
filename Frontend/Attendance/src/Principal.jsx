import { useState } from "react";
import  Firstyeardata  from "./Firstyeardata";
import Secondyeardata from "./secondyeardata";
import Thirdyeardata from "./Thirdyeardata";
import Finalyeardata from "./Finalyeardata";
import HODlist from "./HODlist";
function Principal() {
  const [showyeardata, setshowyeardata] = useState(false);
  
  

  return (
    <>
      <div className="navbar">  
        <h1>Attendance System</h1>
        <h3>Dashbord</h3>
        <h3>Principal</h3>
        <h3>HOD</h3>
        <h3>Teacher</h3>
        <h3>Student</h3>
        <h3>Logout</h3>
        <input type="search" placeholder="Find Student..."/>
        </div>
      <div>
        <h4>here is a quick overview of a Attendance</h4>
        <div className="year">
          <h2 className="first-year" onClick={() => setshowyeardata("First")} >First Year</h2>
          <h2 className="second-year" onClick={()=>setshowyeardata("Second")}>second year</h2>
          <h2 className="third-year" onClick={()=>setshowyeardata("Third")}>third year</h2>
          <h2 className="final-year" onClick={()=>setshowyeardata("Final")}>final year</h2>
          <h2 className="final-year" onClick={()=>setshowyeardata("HOD")}>HOD</h2>
        </div>
        <div>
          <h1>Student Data</h1> <span>view all</span>
          <div>   {showyeardata === "First"&& <Firstyeardata/>} 
                  {showyeardata === "Second" &&<Secondyeardata/>}
                  {showyeardata === "Third" &&<Thirdyeardata/>}
                  {showyeardata === "Final" &&<Finalyeardata/>}
                  {showyeardata === "HOD" &&<HODlist/>}

</div>
        </div>
      </div>
    </>
  )
}
export default Principal;