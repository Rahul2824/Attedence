import { Routes ,Route } from "react-router-dom";
import './App.css'
import Dashbord from './Dashbord'
import Logine from "./Logine"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Logine/>}/>
      <Route path="/Dashbord" element={ <Dashbord/>}/>
    </Routes>

     
    </>
    
  )
}

export default App
