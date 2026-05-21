import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/media/images/trade.png" className="logo" />
          <span className="brand-text-navbar">INVESTIQ</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
    >
      ☰
    </a>
    <ul className="dropdown-menu dropdown-menu-end">
      <li><a className="dropdown-item" href="#">Login</a></li>
      <li><a className="dropdown-item" href="#">Dashboard</a></li>
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="#">Logout</a></li>
    </ul>

  </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
