import { Routes ,Route } from "react-router-dom";
import './App.css'
import Dashbord from './Dashbord'
import Logine from "./Logine"
import NotFound from "./NotFound"
import Principal from "./Principal";
import HOD from "./HOD";
import Teacher from "./Teacher";
import AddStudent from "./Addstudent";
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
       <Route path="/AddStudent" element={<AddStudent/>}/>
    </Routes>


    </>

  )
}

export default App
