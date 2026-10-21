import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Firstyeardata() {
  const [data, setdata] = useState([]);
  const [division, setDivision] = useState("A");
  const [loading, setLoading] = useState(false);

 const fetchData = async (selectedDivision) => {
  try {
    const resp = await axios.get(
      `http://localhost:5000/Attendance/Collage-Data/First-year-Data/${selectedDivision}`
    );

    setdata(resp.data);
    setDivision(selectedDivision);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    fetchData("A");
  }, []);

 const markAttendance = async (id, status) => {
  try {
    await axios.patch(
      `http://localhost:5000/Attendance/Collage-Data/First-year-Data/${division}/${id}/status`,
      { status }
    );

    setData((prev) =>
      prev.map((student) =>
        student._id === id
          ? { ...student, status }
          : student
      )
    );
  } catch (error) {
    console.error("Attendance update failed:", error);
  }
};

  return (
    <div className="student-table">
      <div className="add">
        <h1>First Year Data - Division {division}</h1>

<button onClick={() => fetchData("A")}>A</button>
<button onClick={() => fetchData("B")}>B</button>
<button onClick={() => fetchData("C")}>C</button>
<button onClick={() => fetchData("D")}>D</button>

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
          {loading ? (
            <tr>
              <td colSpan="5">Loading student data...</td>
            </tr>
          ) : data.length === 0 ? (
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