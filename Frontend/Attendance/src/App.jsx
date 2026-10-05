import { Routes ,Route } from "react-router-dom";
import './App.css'
import Dashbord from './Dashbord'
import Logine from "./Logine"
import NotFound from "./NotFound"
function App() {

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
