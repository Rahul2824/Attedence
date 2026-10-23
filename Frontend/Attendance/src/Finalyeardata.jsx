import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Finalyeardata() {
  const lectures = [
    "lecture-1",
    "lecture-2",
    "lecture-3",
    "lecture-4",
    "lecture-5",
    "lecture-6",
  ];
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/Attendance/Collage-Data/Final-year-Data")
      .then((resp) => setdata(resp.data));
  }, []);

  const markAttendance = (id, lectures, status) => {
    try {
      axios.patch(
        `http://localhost:5000/Attendance/Collage-Data/Final-year-Data/${id}/${lectures}/status`,
        { status },
      );
      setdata((prev) =>
        prev.map((student) =>
          student._id === id ? { ...student, [lectures]: status } : student,
        ),
      );
    } catch (error) {
      console.error(
        "Attendance update failed:",
        error.response?.data || error.message,
      );
      alert("Attendance update failed!");
    }
  };
  return (
    <>
      <div className="student-table">
        <h1>this is Final year data</h1>
        <table>
          <thead>
            <tr>
              <td>Roll number</td>
              <td>Name of the student</td>
              <td>Year</td>
              {lectures.map((lectures) => (
                <th key={lectures}>{lectures}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5">no student are added</td>
              </tr>
            ) : (
              data.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.year}</td>
                  {lectures.map((lectures) => (
                    <td key={lectures}>
                      <button
                        type="button"
                        className={
                          student[lectures] === "Present"
                            ? "present-btn"
                            : "absent-btn"
                        }
                        onClick={() =>
                          markAttendance(
                            student._id,
                            lectures,
                            student[lectures] === "Present" ? "Absent" : "Present",
                          )
                        }
                      >
                        {student.status || "Absent"}
                      </button>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Finalyeardata;
