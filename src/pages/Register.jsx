import { useState } from "react";
import "../styles/login.css";

function Register({ setPage }) {
  // ✅ STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ REGISTER FUNCTION
  const handleRegister = async () => {
    // 🔴 PASSWORD MATCH CHECK
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match ❌");
      return;
    }

    // 🔴 ROLE CHECK
    if (!formData.role) {
      alert("Please select a role ❌");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();
      console.log(data);

      alert(data.message || "Registered successfully ✅");

      // 👉 Redirect to login after success
      setPage("login");
    } catch (error) {
      console.error(error);
      alert("Registration failed ❌");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <button className="close-btn" onClick={() => setPage("home")}>
          ×
        </button>

        <h3 className="title">Sign Up</h3>

        {/* ✅ NAME */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="input"
          onChange={handleChange}
        />

        {/* ✅ EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input"
          onChange={handleChange}
        />

        {/* ✅ PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="input"
          onChange={handleChange}
        />

        {/* ✅ CONFIRM PASSWORD */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className="input"
          onChange={handleChange}
        />

        {/* ✅ ROLE DROPDOWN (NO ADMIN) */}
        <select name="role" className="input" onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="BUYER">Buyer</option>
          <option value="SELLER">Seller</option>
          <option value="AGENT">Agent</option>
        </select>

        {/* ✅ BUTTON */}
        <button className="button" onClick={handleRegister}>
          Register
        </button>

        <p className="footer">
          Already have an account?{" "}
          <span
            className="link"
            onClick={() => setPage("login")}
            style={{ cursor: "pointer", marginLeft: "5px" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
