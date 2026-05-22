import { useState } from "react";
import axios from "axios";
import "../Login.css";
import { toast } from "react-toastify";  
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://investiq-backend-emic.onrender.com/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      toast.success("Login successful 🚀");
      setTimeout(() => {
        window.location.href = `https://investiq-dashboard.onrender.com/?token=${res.data.token}`;
      }, 1500);

      // 🔥 redirect to dashboard app
      //window.location.href = `http://localhost:5174?token=${res.data.token}`;

    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;