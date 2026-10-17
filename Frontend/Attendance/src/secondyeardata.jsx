import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Secondyeardata() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/Attendance/Collage-Data/Second-year-Data")
      .then((resp) => setdata(resp.data));
  }, []);
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
        <h1>this is Second year data</h1>
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
              data.map((Student, index) => (
                <tr key={Student._id}>
                  <td>{index + 1}</td>
                  <td>{Student.name}</td>
                  <td>{Student.year}</td>
                  <td>{Student.email}</td>
                  <td><button
                    type="button"
                    className={
                      Student.status === "Present"
                        ? "present-btn"
                        : "absent-btn"
                    }
                    onClick={() =>
                      markAttendance(
                        Student._id,
                        Student.status === "Present"
                          ? "Absent"
                          : "Present"
                      )
                    }
                  >
                    {Student.status || "Absent"}
                  </button></td>
                   
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Secondyeardata;
