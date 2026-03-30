import { Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      {/* 🔷 NAVBAR */}
      <div style={styles.navbar}>
        <h3
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
        >
          MyProperty
        </h3>

        <button onClick={handleLogout} style={styles.btn}>
          Logout
        </button>
      </div>

      {/* 🔷 PAGE CONTENT */}
      <div style={{ marginTop: "60px", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "60px",
    background: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1000,
  },
  btn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default DashboardLayout;
