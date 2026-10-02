
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
            <input type="text" placeholder="Enter your email" />
            <h5>Password</h5>
            <input type="password" /><br />
            <input type="checkbox" /><h5>Remember me</h5>
            <h5>Forget password?</h5>
            <button>Logine</button>

            <button>Logine with Google</button>
            <h6>Don't have an account? Sign Up</h6>
           </div>
      </div>
    </>
  )
} 
export default Logine

