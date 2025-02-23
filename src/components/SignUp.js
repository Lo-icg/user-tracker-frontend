import { useState } from "react";
//import { auth, db } from "../firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";
//import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Store success message
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous messages

    try {
      const response = await fetch("https://dutch-melly-spring-boot-api-e977e717.koyeb.app/user/signup", {
     // const response = await fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          userPassword: password,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const successMessage = await response.text();
      setSuccessMessage(`🎉 ${successMessage}`); // ✅ Show success message
      setTimeout(() => navigate("/login"), 2000); // ✅ Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing up:", error.message);
      setSuccessMessage("❌ " + error.message); // ✅ Display error message
    }
  };

  // return (
  //   <div className="container">
  //     <h2>Sign Up</h2>
  //     <form onSubmit={handleSignUp}>
  //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
  //       <button type="submit">Sign Up</button>
  //     </form>

  //     {successMessage && <p className="success-message">{successMessage}</p>} {/* ✅ Show success message */}

  //     <p>Already have an account?</p>
  //     <button className="switch-button" onClick={() => navigate("/login")}>Log In</button>
  //   </div>
  // );

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>} {/* ✅ Show success message */}

      <p>Already have an account?</p>
      <button className="switch-button" onClick={() => navigate("/login")}>Log In</button>
    </div>
  );
};

export default SignUp;
