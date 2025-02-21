import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Devices from "./components/Devices";
import History from "./components/History";
import Login from "./components/Login";
import SignUp from "./components/SignUp"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/history" element={<History />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
