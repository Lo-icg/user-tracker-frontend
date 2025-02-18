import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "../styles.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="home-container">
      {!user ? (
        <Login /> // Show Login if not logged in
      ) : (
        <>
          {/* Logout Button on the Top Right */}
          <button className="logout-button" onClick={handleLogout}>🚪 Log Out</button>
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
