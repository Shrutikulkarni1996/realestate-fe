import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Properties from "../pages/Properties";
import PostProperty from "../pages/PostProperty";
import PropertyDetail from "../pages/PropertyDetails";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="properties" element={<Properties />} />
        <Route
          path="add-property"
          element={
            <ProtectedRoute allowedRoles={["SELLER", "AGENT"]}>
              <PostProperty />
            </ProtectedRoute>
          }
        />
        <Route path="property/:id" element={<PropertyDetail />} />
      </Route>
      <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
