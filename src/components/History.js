import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const History = () => {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    // Dummy data (replace this with an API call if needed)
    const dummyData = [
      { id: 1, name: "Device A", number: "12345", time: "10:00 AM", longitude: "120.98", latitude: "14.60" },
      { id: 2, name: "Device B", number: "67890", time: "11:15 AM", longitude: "121.02", latitude: "14.65" },
    ];
    setHistoryData(dummyData);
  }, []);

  return (
    <div className="history-container">
      {/* Home Button */}
      <button className="home-button" onClick={() => navigate("/home")}>
        🏠 Home
      </button>

      <h2>📜 History</h2>
      <p>View tracking history of devices.</p>

      {/* Table for Displaying Data */}
      <table className="history-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Time</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {historyData.length > 0 ? (
            historyData.map((item) => (
              <tr key={item.id}>
                <td>{item.name || "N/A"}</td>
                <td>{item.number || "N/A"}</td>
                <td>{item.time || "N/A"}</td>
                <td>{item.longitude || "N/A"}</td>
                <td>{item.latitude || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No history data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
