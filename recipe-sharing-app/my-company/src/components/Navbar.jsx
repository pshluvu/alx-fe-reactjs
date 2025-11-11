import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",            // Required: makes the nav a flex container
        justifyContent: "space-around", // Required: evenly space the links
        padding: "1rem",
        backgroundColor: "#282c34",
        color: "white"
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
