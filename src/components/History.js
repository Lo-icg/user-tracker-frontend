import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Import Firebase Database
import { collection, getDocs } from "firebase/firestore"; // Firestore methods
import "../styles.css";

const History = () => {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "history"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistory();
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
