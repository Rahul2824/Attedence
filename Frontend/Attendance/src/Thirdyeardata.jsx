
import { useEffect, useState } from "react";
import axios from "axios";

function Thirdyeardata() {
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
      .get("http://localhost:5000/Attendance/Collage-Data/Third-year-Data")
      .then((resp) => setdata(resp.data))
      .catch((error) => {
        console.error("Data fetch failed:", error);
      });
  }, []);

  const markAttendance = async (id, lecture, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/Attendance/Collage-Data/Third-year-Data/${id}/${lecture}/status`,
        { status }
      );

      setdata((prev) =>
        prev.map((student) =>
          student._id === id
            ? { ...student, [lecture]: status }
            : student
        )
      );
    } catch (error) {
      console.error(
        "Attendance update failed:",
        error.response?.data || error.message
      );
      alert("Attendance update failed!");
    }
  };

  return (
    <div className="student-table">
      <h1>This is Third Year Data</h1>

      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name of the Student</th>
            <th>Year</th>

            {lectures.map((lecture) => (
              <th key={lecture}>{lecture}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={9}>No student data found.</td>
            </tr>
          ) : (
            data.map((student, index) => (
              <tr key={student._id}>
                <td>{student.rollNo ?? index + 1}</td>
                <td>{student.name}</td>
                <td>{student.year ?? "Third Year"}</td>

                {lectures.map((lecture) => (
                  <td key={lecture}>
                    <button
                      type="button" 
                      className={
                        student[lecture] === "Present"
                          ? "present-btn"
                          : "absent-btn"
                      }
                      onClick={() =>
                        markAttendance(
                          student._id,
                          lecture,
                          student[lecture] === "Present"
                            ? "Absent"
                            : "Present"
                        )
                      }
                    >
                      {student[lecture] || "Absent"}
                    </button>
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Thirdyeardata;
