import { useNavigate } from "react-router-dom";
import "../styles.css";

const Devices = () => {
  const navigate = useNavigate();

  return (
    <div className="devices-container">
      <h2>📡 Devices</h2>
      <p>Manage and track your connected devices.</p>

     {/* Home Button */}
     <button className="home-button" onClick={() => navigate("/home")}>🏠 Home</button>
    </div>
  );
};

export default Devices;
