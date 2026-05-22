import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Signup.css";
import { toast } from "react-toastify";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("https://investiq-backend-emic.onrender.com/signup", {
        name,
        email,
        password,
      });

      toast.success("Signup successful");
      //window.location.href = "/login";
      setTimeout(() => {
         navigate("/login");
      }, 2000);

    } catch (err) {
    if (err.response?.data === "User already exists. Please login.") {
    toast.error("User already exists. Please login.");
  } else {
    toast.error("Something went wrong");
  }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Signup</h2>

        <input placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={handleSignup}>Signup</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;