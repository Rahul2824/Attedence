import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Thirdyeardata() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/Attendance/Collage-Data/Third-year-Data")
        .then((resp)=>setdata(resp.data));
    },[])
      const markAttendance = (id, status) => {
    setdata((prev) =>
      prev.map((student) =>
        student._id === id ? { ...student, status } : student
      )
    );
  };
    return (
        <>
            <div className="student-table">
                <h1>this is Third year data</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Roll number</td>
                            <td>Name of the student</td>
                            <td>Year</td>
                            <td>PRN</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
              <tr>
                <td colSpan="5">No student data found.</td>
              </tr>
            ) : (
              data.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.year}</td>
                </tr>
              ))
            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Thirdyeardata;