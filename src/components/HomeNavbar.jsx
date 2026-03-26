import "./HomeNavbar.css";
function HomeNavbar({ setPage }) {
  return (
    <div className="navbar">
      <h3>MyProperty</h3>

      <button onClick={() => setPage("login")}>Login</button>
    </div>
  );
}

export default HomeNavbar;
