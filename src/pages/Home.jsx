import bg from "../assets/images/bg.jpg";
import "../styles/home.css";
import Navbar from "../components/HomeNavbar";

function Home({ setPage }) {
  return (
    <div>
      <Navbar setPage={setPage} />

      <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Welcome to MyProperty</h1>
        <p>Find your dream home easily and quickly</p>
      </div>
    </div>
  );
}

export default Home;
