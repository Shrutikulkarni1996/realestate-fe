import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/API";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password ❌");
      return;
    }

    try {
      const response = await API.post("/auth/login", {
        email,
        password,
      });

      const data = response.data;

      alert(data.message || "Login successful ✅");

      // ✅ Save token
      localStorage.setItem("token", data.token);

      // ✅ Save user
      localStorage.setItem("user", JSON.stringify(data));

      // 🚀 GO TO DASHBOARD
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="container">
      <div className="box login-box">
        <button className="close-btn" onClick={() => navigate("/")}>
          ×
        </button>
        <h3 className="title">Login</h3>

        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="forgot">
          <span
            className="link"
            onClick={() => navigate("/forgot-password")}
            style={{ cursor: "pointer" }}
          >
            Forgot Password?
          </span>
        </p>

        {/* ✅ UPDATED BUTTON */}
        <button className="button" onClick={handleLogin}>
          Login
        </button>

        <p className="footer1">
          Don’t have an account?
          <span
            className="link"
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer", marginLeft: "8px" }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
