import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div style={{background: 'linear-gradient(to right, #128aa5, #0083B0)'}}  className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5 justify-content-center">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Our Office</h4>
            <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3"></i>30N, Gould St. Ste 4000 Sheridan, Wyoming 82801 USA </p>
            <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3"></i> 8th floor Tower B, Ithum, A40, Sector 62, Noida, Uttar Pradesh 201301</p>
            <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3"></i>+91 9958393800</p>
            <p className="mb-2 text-white"><i className="fa fa-envelope me-3"></i>info@sk-mrpartners.com</p>
           
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="list-unstyled">
        <li className='mt-3'>
          <NavLink className="  text-light" to="/about">About Us</NavLink>
        </li>
        <li className='mt-3 l'>
          <NavLink className=" text-light" to="/contact">Contact Us</NavLink>
        </li>
        <li className='mt-3'>
          <NavLink className="text-light" to="/services">Our Services</NavLink>
        </li>
        <li className='mt-3'>
          <NavLink className="text-light " to="/terms">Terms & Condition</NavLink>
        </li>
        <li className='mt-3'>
          <NavLink className=" text-light" to="/support">Support</NavLink>
        </li>
      </ul>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <h4 className="text-white mb-4">Business Hours</h4>
            <p className="mb-1 text-light ">Monday - Friday</p>
            <h6 className="text-light mb-4">09:00 am - 07:00 pm</h6>
            <p className="mb-1 text-light">Saturday - Sunday</p>
            <h6 className="text-light ">Closed</h6>
          
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">We are Social</h4>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-light rounded-circle me-2" href="https://x.com/sk_mrpartners">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.instagram.com/sk.mrpartners/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="btn btn-square btn-light rounded-circle me-2" href="https://www.linkedin.com/company/simplified-knowledge-partners">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
