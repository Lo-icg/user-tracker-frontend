import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      
      {/* Home Button */}
      <button className="home-button" onClick={() => navigate("/home")}>🏠 Home</button>


      {/* Map Display */}
      <div className="map-container">
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Your Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
