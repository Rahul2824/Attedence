import { useState } from "react";

function Firstyeardata() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Prakash Patil",
      rollNo: 1,
      year: "First year",
      prn: "24067621242043",
      status: "",
    },
    {
      id: 2,
      name: "Amit Sharma",
      rollNo: 2,
      year: "First year",
      prn: "24067621242044",
      status: "",
    },
    {
      id: 3,
      name: "Sneha Patil",
      rollNo: 3,
      year: "First year",
      prn: "24067621242045",
      status: "",
    },
  ]);

  const markAttendance = (id, status) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  return (
    <div className="student-table">
      <h1>This is First Year Data</h1>

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
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>{student.prn}</td>

              <td>
                <button
                  className={
                    student.status === "Present"
                      ? "present-btn"
                      : "absent-btn"
                  }
                  onClick={() =>
                    markAttendance(
                      student.id,
                      student.status === "Present"
                        ? "Absent"
                        : "Present"
                    )
                  }
                >
                  {student.status || "Mark Attendance"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Firstyeardata;