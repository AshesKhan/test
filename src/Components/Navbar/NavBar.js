import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div>
            <a className="navbar-brand">Navbar</a>
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
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


              <NavLink to="/">
                <li className="nav-item ">
                  <a className="nav-link text-light" aria-current="page">
                    Home
                  </a>
                </li>
              </NavLink>


              <NavLink to="/about">
                <li className="nav-item">
                  <a className="nav-link text-light">
                    About
                  </a>
                </li>
              </NavLink>


              <NavLink to="/contact">
                <li className="nav-item">
                  <a className="nav-link text-light">
                    Contact
                  </a>
                </li>
              </NavLink>


              <NavLink to="/signup">
                <li className="nav-item">
                  <a className="nav-link text-light">
                    SignUp
                  </a>
                </li>
              </NavLink>

              <NavLink to="/doctorprofile">
                <li className="nav-item">
                  <a className="nav-link text-light">
                    Doctor Profile
                  </a>
                </li>
              </NavLink>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
