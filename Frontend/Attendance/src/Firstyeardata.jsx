import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Firstyeardata() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Attendance/Collage-Data/First-year-Data")
      .then((resp) => setdata(resp.data))
      .catch((error) => console.log(error));
  }, []);

  const markAttendance = (id, status) => {
    setdata((prev) =>
      prev.map((student) =>
        student._id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="student-table">
      <div className="add">
        <h1>This is First Year Data</h1>
        <Link to="/Addstudent">
          <button type="button">+</button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name of the Student</th>
            <th>Year</th>
            <th>PRN</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5">No student data found.</td>
            </tr>
          ) : (
            data.map((student) => (
              <tr key={student._id}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.year}</td>
                <td>{student.prn}</td>
                <td>
                  <button
                    type="button"
                    className={
                      student.status === "Present"
                        ? "present-btn"
                        : "absent-btn"
                    }
                    onClick={() =>
                      markAttendance(
                        student._id,
                        student.status === "Present"
                          ? "Absent"
                          : "Present"
                      )
                    }
                  >
                    {student.status || "Absent"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Firstyeardata;