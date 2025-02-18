import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // ✅ Store success message
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSuccessMessage(""); // Clear previous messages

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), { email });

      setSuccessMessage("🎉 Successfully signed up! Redirecting..."); // ✅ Show success message
      setTimeout(() => navigate("/login"), 2000); // ✅ Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing up:", error.message);
      setSuccessMessage("❌ " + error.message); // ✅ Display error message
    }
  };

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
