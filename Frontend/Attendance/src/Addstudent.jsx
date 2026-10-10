import { useState } from "react";

function AddStudent() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("First Year");

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      rollNo,
      email,
      year,
    };

    setStudents((prev) => [...prev, newStudent]);

    setName("");
    setRollNo("");
    setEmail("");
    setYear("First Year");
  };

  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="student-container">
      <h2>Add Student</h2>
      <p>Add a new student to the attendance system.</p>

      <form onSubmit={addStudent} className="student-form">
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Roll Number</label>
        <input
          type="number"
          placeholder="Enter roll number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option>First Year</option>
          <option>Second Year</option>
          <option>Third Year</option>
          <option>Final Year</option>
        </select>

        <button type="submit">+ Add Student</button>
      </form>

      <h3>Student List ({students.length})</h3>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5">No students added yet.</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.rollNo}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.year}</td>
                  <td>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddStudent;