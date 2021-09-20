import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Smartphone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Wireless devices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Laptops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Cameras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Accessories
                </a>
              </li>
            </ul>
            <a href="/" className="link-info mx-3">
              <img
                title="Go to Cart"
                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/50/000000/external-cart-marketing-flatart-icons-solid-flatarticons.png"
                alt="..."
              />
            </a>
            <a href="/" className="btn btn-primary">
              Login / Sign up
            </a>
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
  title: "Enter title",
  about: "About us",
};
