import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "../styles.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Simulating user authentication check (e.g., from localStorage or sessionStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser)); // Store user session
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear user session
    navigate("/login");
  };

  return (
    <div className="home-container">
      {!user ? (
        <Login onLogin={handleLogin} /> // Pass login function to Login component
      ) : (
        <>
          {/* Logout Button on the Top Right */}
          <button className="logout-button" onClick={handleLogout}>
            🚪 Log Out
          </button>

          {/* {Menu Button} */}
          <button className="menu-button">☰ Menu</button>

          <h2 className="welcome-text">Welcome to the Tracking System</h2>

          {/* Widgets Moved to Bottom */}
          <div className="widget-container">
            <div className="widget" onClick={() => navigate("/dashboard")}>
              <h3>📍 Map</h3>
              <p>View and track locations on the map.</p>
            </div>

            <div className="widget" onClick={() => navigate("/devices")}>
              <h3>📡 Devices</h3>
              <p>Manage connected tracking devices.</p>
            </div>

            {/* New History Widget */}
            <div className="widget" onClick={() => navigate("/history")}>
              <h3>📜 History</h3>
              <p>View past tracking records.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
