import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/smartphone">
                  Smartphone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Wireless devices
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/laptops">
                  Laptops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Cameras
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accessories
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="link-dark mx-3">
              <img
                title="Go to Cart"
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/50/000000/external-cart-marketing-flatart-icons-solid-flatarticons.png"
                alt="..."
              />
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login / Sign up
            </Link>
            <Link to="/sell" className="btn btn-primary mx-2">
              Seller
            </Link>
            <Link to="/admin" className="btn btn-primary mx-2">
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "E-Mart",
  about: "About us",
};
