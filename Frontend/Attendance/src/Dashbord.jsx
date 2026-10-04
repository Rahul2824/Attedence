function Dashbord() {
    return(
        <>
        <div className="navbar">
        <h1>Attendance System</h1>
         <h3>Dashbord</h3>
         <h3>Principal</h3>
         <h3>HOD</h3>
         <h3>Teacher</h3>
         <h3>Student</h3>
         <h3>Logout</h3></div>
        <div>
         <h4>here is a quick overview of a Attendance</h4> 
         <div className="year">
            <h2 className="first-year">first year</h2>
            <h2 className="second-year">second year</h2>
            <h2 className="third-year">third year</h2>
            <h2 className="final-year">final year</h2>
         </div>
          <div>
            <h1>Student Data</h1> <span>view all</span>
          </div>
        </div>
        </>
    )
}
export default Dashbord ;