import { Routes ,Route } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Dashbord from './Dashbord'
import Logine from "./Logine"
import NotFound from "./NotFound"
function App() {
  const [Firstyeardata, setFirstyeardata] = useState(false);

  return (
    <>
    <Routes>
      <Route path="/" element={ <Logine/>}/>
      <Route path="/Dashbord" element={ <Dashbord Firstyeardata={()=>setFirstyeardata(true)}/>}/>
       <Route path="*" element={<NotFound />} />  
    </Routes>


    </>

  )
}

export default App
