
function Logine() {

  return (
    <>
      <div className="box">
        <div className="img-box">
          <img src="image.png" alt="" /></div>
        <div className="input-box">
          <div className="welcome-box"><h1>WelCome Back</h1>
            <h3>Logine to your account continue</h3></div>
          <h5>Email Adress</h5>
          <input type="text" placeholder="Enter your email" className="input" />
          <h5>Password</h5>
          <input type="password" className="input" placeholder="Enter your Password" /><br /><br />
          <input type="checkbox" className="checkbox"  /><span>Remember Me</span>
        <span style={{paddingLeft:"250px",color:"blue", cursor:"pointer"}}> Forget password?</span><br /><br />
          <button className="button" style={{backgroundColor:"blue"}} >Logine</button>
          <h3 style={{ textAlign: "center" }}>OR</h3>
          <button className="button">Logine with Google</button>
          <h6 style={{textAlign:"center", fontSize:"10px"}}>Don't have an account? <span style={{color:"blue", cursor:"pointer"}}>Sign Up</span> </h6>
        </div>
      </div>
    </>
  )
}
export default Logine

