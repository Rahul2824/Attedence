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
                  <td>{Student.rollno}</td>
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
