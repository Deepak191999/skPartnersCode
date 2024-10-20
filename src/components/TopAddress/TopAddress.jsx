import React from 'react';
import { NavLink } from 'react-router-dom';
import skimg from '../../img/cropped-Simplify-second.png'
import './TopAddress.css'
const TopAddress = () => {
  return (
    <div style={{background: 'linear-gradient(to right, #128aa5, #0083B0)'}} className="container-fluid text-white d-none d-lg-flex">
      <div className="container py-2">
        <div className="d-flex align-items-center">
          <NavLink to="/">
            <h2 className="text-white fw-bold m-0">  <img className="custom-img"  style={{ height: '90px', width: 'auto' }} src={skimg} alt="my" /> </h2>
          </NavLink>
          <div className="ms-auto d-flex align-items-center">
            <small className="ms-4"><i className="fa fa-map-marker-alt me-3 fs-4"></i>30N, Gould St. Ste 4000 Sheridan, Wyoming 82801 USA</small>
            <small className="ms-4"><i className="fa fa-envelope me-3 fs-4"></i>For RFQ : sales@sk-mrpartners.com</small>
            <small className="ms-4"><i className="fa fa-phone-alt me-3 fs-4"></i>+91 9971139111</small>
            <div className="ms-3 d-flex">
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://www.instagram.com/sk.mrpartners/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-instagram"></i></a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href="https://x.com/sk_mrpartners"  target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
              <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2"  href="https://www.linkedin.com/company/simplified-knowledge-partners" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAddress;
