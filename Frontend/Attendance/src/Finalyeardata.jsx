function Finalyeardata() {
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
                            <td>PRN</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
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
                  {student.status || "Absent"}
                </button>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Rahul Prakash patil</td>
                            <td>Final year</td>
                            <td>24067621242043</td>
                            <td>Present</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Finalyeardata;