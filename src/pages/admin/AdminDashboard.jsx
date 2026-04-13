import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import PropertiesAdmin from "./PropertiesAdmin";
import InquiriesAdmin from "./InquiriesAdmin";

function AdminDashboard() {
  return (
    <div style={{ display: "flex" }}>
      {/* SIDEBAR */}
      <div
        style={{
          width: "230px",
          height: "100vh",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Admin Panel</h2>

        <nav style={{ marginTop: "30px" }}>
          <p>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="properties"
            >
              🏠 Properties
            </Link>
          </p>

          <p>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="inquiries"
            >
              📩 Inquiries
            </Link>
          </p>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route index element={<PropertiesAdmin />} />
          <Route path="properties" element={<PropertiesAdmin />} />
          <Route path="inquiries" element={<InquiriesAdmin />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
