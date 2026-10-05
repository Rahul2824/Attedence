
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p> 
          The page you are looking for might have been removed
          or is temporarily unavailable.
        </p>

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>

      <div className="floating-circle circle-one"></div>
      <div className="floating-circle circle-two"></div>
      <div className="floating-circle circle-three"></div>
    </div>
  );
}

export default NotFound;