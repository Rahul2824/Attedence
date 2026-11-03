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
  )
}
export default Dashbord;