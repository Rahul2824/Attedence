import { Routes ,Route } from "react-router-dom";
import './App.css'
import Dashbord from './Dashbord'
import Logine from "./Logine"
import NotFound from "./NotFound"
import Principal from "./Principal";
import HOD from "./HOD";
import Teacher from "./Teacher";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Logine/>}/>
      <Route path="/Dashbord" element={ <Dashbord Firstyeardata={()=>setFirstyeardata(true)}/>}/>
       <Route path="*" element={<NotFound />} />  
       <Route path="/Principal" element={<Principal/>}/>
       <Route path="/HOD" element={<HOD/>}/>
       <Route path="/Teacher" element={<Teacher/>}/>
    </Routes>


    </>

  )
}

export default App
