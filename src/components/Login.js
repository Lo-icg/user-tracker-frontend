import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);


    try {
      const response = await fetch("https://dutch-melly-spring-boot-api-e977e717.koyeb.app/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          userPassword: password
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Store user session
      localStorage.setItem("user", JSON.stringify(data));
      if (onLogin) onLogin(data); // Update parent state in Home.js

      navigate("/home");  // Redirect to home
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message); // Show error message to the user
    }

    
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account?</p>
      <button className="switch-button" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
};
export default Login;
