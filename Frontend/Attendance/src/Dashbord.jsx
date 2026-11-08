import { useState } from "react";
import Firstyeardata from "./Firstyeardata";
import Secondyeardata from "./secondyeardata";
import Thirdyeardata from "./Thirdyeardata";
import Finalyeardata from "./Finalyeardata";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Dashbord() {
  const [showyeardata, setshowyeardata] = useState(false);



  return (
    <>
      <div className="navbar">
       <p><FontAwesomeIcon icon={faGraduationCap}  style={{height:"60px",width:"60px"}}/> </p> <h1>Attendance System</h1>
        <Link to="/Dashbord"> <h3  style={{ color: "White", textDecoration: "none" }}><FontAwesomeIcon icon={faHouse} /> Dashbord</h3></Link>
        <Link to="/Principal"><h3 style={{ color: "White", textDecoration: "none" }}><FontAwesomeIcon icon={faUser} /> Principal</h3></Link>
        <Link to="/HOD"><h3 style={{ color: "White", textDecoration: "none" }}><FontAwesomeIcon icon={faUsers} /> HOD</h3></Link>
        <Link to="/Teacher"><h3 style={{ color: "White", textDecoration: "none" }}><FontAwesomeIcon icon={faUsers} /> Teacher</h3></Link>
        <h3><FontAwesomeIcon icon={faUsers} /> Student</h3>
        <h3> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</h3>
        <input type="search"  placeholder="Find Student..." /> <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div>
        <h4>here is a quick overview of a Attendance</h4>
        <div className="year">
          <h2 className="first-year" onClick={() => setshowyeardata("First")} >First Year</h2>
          <h2 className="second-year" onClick={() => setshowyeardata("Second")}>second year</h2>
          <h2 className="third-year" onClick={() => setshowyeardata("Third")}>third year</h2>
          <h2 className="final-year" onClick={() => setshowyeardata("Final")}>final year</h2>
        </div>
        <div>
          <h1>Student Data</h1> <span>view all</span>
          <div>   {showyeardata === "First" && <Firstyeardata />}
            {showyeardata === "Second" && <Secondyeardata />}
            {showyeardata === "Third" && <Thirdyeardata />}
            {showyeardata === "Final" && <Finalyeardata />}

          </div>
        </div>
      </div>
    </>
  )
}
export default Dashbord;