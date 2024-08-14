import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import skimg from '../img/cropped-Simplify-second.png'
const Navbar = () => {
  return (
    <div className="container-fluid bg-white sticky-top p-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <NavLink to="/" className="navbar-brand d-lg-none">
            <h1 className="fw-bold m-0">  <img className="custom-img" style={{ width: '50%', height: '100px', objectFit: 'contain' }} src={skimg} alt="Image" /> </h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav fs-5 gap-3">
              <NavLink to="/" className="nav-item nav-link " activeClassName="active">Home</NavLink>
              <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
              <NavLink to="/services" className="nav-item nav-link" activeClassName="active">Services</NavLink>
              <NavLink to="/projects" className="nav-item nav-link" activeClassName="active">Projects</NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <NavLink to="/features" className="dropdown-item">Features</NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                  <NavLink to="/quote" className="dropdown-item">Quotation</NavLink>
                  <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                </div>
              </div>
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
              <NavLink to="/joinourteam" className="nav-item nav-link">Join our Team</NavLink>
            </div>
            <div className="ms-auto d-none d-lg-block">
              {/* Uncomment if you want to add a button */}
              {/* <NavLink to="#" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</NavLink> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
