/*import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-home">
      {/* 🔷 HEADER }
      <div className="dashboard-header">
        <h2>Welcome, {user?.email || "User"} 👋</h2>
      </div>

      {/* 🔷 HERO SECTION }
      <div className="hero">
        <h1>Find Your Perfect Property Fast</h1>
        <p>Buy, Sell or Rent properties easily</p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard/properties")}
          >
            Explore Properties
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/dashboard/add-property")}
          >
            List Your Property
          </button>
        </div>
      </div>

      {/* 🔷 CATEGORY SECTION }
      <div className="categories">
        <h2>Choose Category</h2>

        <div className="category-cards">
          <div className="card">🏠 Buy / Sell</div>
          <div className="card">🏢 Rent Homes</div>
          <div className="card">🛏 PG / Hostel</div>
        </div>
      </div>

      {/* 🔷 WHY CHOOSE US }
      <div className="why-us">
        <h2>Why Choose Our Platform</h2>

        <div className="features">
          <div className="feature">
            <h3>Verified Listings</h3>
            <p>All properties are verified for trust and safety.</p>
          </div>

          <div className="feature">
            <h3>No Brokerage</h3>
            <p>Save money by connecting directly with owners.</p>
          </div>

          <div className="feature">
            <h3>Easy Search</h3>
            <p>Find properties with advanced filters.</p>
          </div>
        </div>
      </div>

      {/* 🔷 HOW IT WORKS }
      <div className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <h3>1. Search</h3>
            <p>Browse properties based on your needs.</p>
          </div>

          <div className="step">
            <h3>2. Connect</h3>
            <p>Contact owners or agents directly.</p>
          </div>

          <div className="step">
            <h3>3. Deal</h3>
            <p>Finalize and move in easily.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
*/

import { useState } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("BUY");
  const [city, setCity] = useState("");

  return (
    <div className="dashboard">
      {/* 🔷 HERO */}
      <div className="hero-section">
        <h1>Find Your Dream Property</h1>
        <p>Select from thousands of options without brokerage</p>

        {/* 🔷 TABS */}
        <div className="tabs">
          <span
            className={activeTab === "BUY" ? "active" : ""}
            onClick={() => setActiveTab("BUY")}
          >
            Buy / Sell
          </span>

          <span
            className={activeTab === "RENT" ? "active" : ""}
            onClick={() => setActiveTab("RENT")}
          >
            Rent
          </span>

          <span
            className={activeTab === "PG" ? "active" : ""}
            onClick={() => setActiveTab("PG")}
          >
            PG / Hostel
          </span>
        </div>

        {/* 🔷 SEARCH */}
        <div className="search-box">
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option>Pune</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
          </select>

          <button
            disabled={!city}
            onClick={() => navigate("/dashboard/properties")}
          >
            Search
          </button>
        </div>
      </div>

      {/* 🔷 ACTION CARDS */}
      <div className="action-section">
        <div
          className="action-card"
          onClick={() => navigate("/dashboard/properties")}
        >
          <h2>Find Property</h2>
          <p>Select from thousands of options</p>
          <button>Find Now</button>
        </div>

        <div
          className="action-card"
          onClick={() => navigate("/dashboard/add-property")}
        >
          <h2>List Your Property</h2>
          <p>Post property for FREE</p>
          <button>Free Posting</button>
        </div>
      </div>

      {/* 🔷 FOOTER */}
      <div className="footer">
        <div className="footer-links">
          <span>About Us</span>
          <span>Careers</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>FAQs</span>
        </div>

        <p>© 2025 MyProperty</p>
      </div>
    </div>
  );
}

export default Dashboard;
