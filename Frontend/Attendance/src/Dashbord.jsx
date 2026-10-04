function Dashbord() {
    return(
        <>
        <div className="navbar">
        <h1>Attendance System</h1>
         <h3>Dashbord</h3>
         <h3>Student</h3>
         <h3>Attendance History</h3>
         <h3>Subject</h3>
         <h3>Profile</h3>
         <h3>Logout</h3></div>
        <div>
         <h4>here is a quick overview of a Attendance</h4> 
         <div className="year">
            <h2 className="first-year">first year</h2>
            <h2 className="second-year">second year</h2>
            <h2 className="third-year">third year</h2>
            <h2 className="final-year">final year</h2>
         </div>
         <div className="year">
            <h2 className="first-year">Add Student </h2>
            <h2 className="second-year">Edit Student</h2>
            <h2 className="third-year">Delete Student</h2>
            <h2 className="final-year">Delete Batch</h2>
         </div>
        </div>
        </>
    )
}
export default Dashbord ;