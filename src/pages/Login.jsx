import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login({ setPage }) {
  const navigate = useNavigate();

  // ✅ ADD STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ADD FUNCTION
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST", // IMPORTANT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      alert(data.message || "Login successful");

      // optional navigation
      // navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <button className="close-btn" onClick={() => setPage("home")}>
          ×
        </button>
        <br />
        <h3 className="title">LogIn</h3>
        <br />

        {/* ✅ UPDATED INPUT */}
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ✅ UPDATED INPUT */}
        <input
          type="password"
          placeholder="Enter your password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="forgot">
          <span className="link">Forgot Password?</span>
        </p>

        {/* ✅ UPDATED BUTTON */}
        <button className="button" onClick={handleLogin}>
          Login
        </button>

        <p className="footer1">
          Don’t have an account?
          <span
            className="link"
            onClick={() => setPage("register")}
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
