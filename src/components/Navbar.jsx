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
            <h1 className="fw-bold m-0">  <img className="custom-img" style={{ width: '50%', height: '100px', objectFit: 'contain' }} src={skimg} alt="Imagemy" /> </h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  fw-semibold" id="navbarCollapse">
            <div className="navbar-nav fs-5 gap-3" >
              <NavLink to="/" className="nav-item nav-link" activeClassName="active" >Home</NavLink>
              <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About Us</NavLink>
           

              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  activeClassName="active"
                >
                  Services
                </NavLink>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <NavLink to="/qualitative" className="dropdown-item">Qualitative Service</NavLink>
                  <NavLink to="/quantitative" className="dropdown-item">Quantitative Service</NavLink>
                  <NavLink to="/itservice" className="dropdown-item">IT Service</NavLink>
                  <NavLink to="/onlineresearch" className="dropdown-item">Online Research</NavLink>
                  <NavLink to="businessresearch" className="dropdown-item">Business Research</NavLink>
                  <NavLink to="/telephonesurvey" className="dropdown-item">Telephone Surveys</NavLink>
                  <NavLink to="/otherservice" className="dropdown-item">Other Services</NavLink>
                </div>
              </div>

              <NavLink to="/getquote" className="nav-item nav-link">Get A Free Quote</NavLink>

              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Download Reports
                </NavLink>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <a 
                    href="https://drive.google.com/file/d/1lY_J5PYBRhj3GYl3_VL975mwcfMdq7TN/view?usp=drive_link"                     
                    className="dropdown-item" 
                    target='_blank'
                    rel="noopener noreferrer">
                    CAPABILITIES PRESENTATION
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1XrhDdnzykCrud3Pzc1KXeR_tuPLPo3ye/view?usp=drive_link"                     
                    className="dropdown-item" 
                    target='_blank'
                    rel="noopener noreferrer">
                    CASE STUDIES 
                  </a>
                  <a 
                   href="https://drive.google.com/file/d/1umf-8PRSpABfIFIB9HVKAFwGkK6qcHY-/view?usp=drive_link"                     
                   className="dropdown-item" 
                   target='_blank'
                   rel="noopener noreferrer">
                    ESOMAR 28
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1OEsbb_bBuCRgN0Nq6WHN0mo3_jM4ZU6u/view?usp=drive_link"                     
                    className="dropdown-item" 
                    target='_blank'
                    rel="noopener noreferrer">
                    GLOBAL PANEL BOOK
                  </a>                                  
                  <a 
                  href="https://drive.google.com/file/d/1CCq3zwyOCD3jZ8dN33A-L918lHCt1a8c/view"                     
                  className="dropdown-item" 
                  target='_blank'
                  rel="noopener noreferrer">
                    LLC Cases Study
                  </a>
                  <a 
                  href="https://drive.google.com/file/d/1N_hBZLydpKKB9Ag5cy0Q_8vxOJN1BUnO/view"                     
                  className="dropdown-item" 
                  target='_blank'
                  rel="noopener noreferrer">
                  LLC PIU & CIU Cases Study
                  </a>
                  <a 
                  href="https://drive.google.com/file/d/1W1VjsgCzI34zZI6oV4IuiVMUGmTD6Jk1/view?usp=drive_link"                     
                  className="dropdown-item" 
                  target='_blank'
                  rel="noopener noreferrer">
                   PANEL QUALITY MEASURES
                  </a>
                </div>
              </div>

              <NavLink to="/joinourteam" className="nav-item nav-link">Join our Team</NavLink>
              <NavLink to="/joinourpanel" className="nav-item nav-link">Join Our Panel</NavLink>
              <NavLink to="/faq" className="nav-item nav-link">FAQ</NavLink>
              <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>

           
             

            </div>
           
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
