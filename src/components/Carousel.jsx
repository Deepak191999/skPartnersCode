import React from 'react';
import carouselImage1 from '../img/carousel-1.jpg'; // Adjust the path if necessary
import carouselImage2 from '../img/bg_banner1-3.jpg'
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="container-fluid px-0"style={{marginBottom:"86px"}}>
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carouselImage1}   style={{ height: '600px', objectFit: 'cover' }} alt="Imagemy" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7 text-start">
                    <p className="fs-4 text-white animated slideInRight">Welcome to <strong>Simpified Knowledge Partners LLC</strong></p>
                
                    
                    <h1 className="display-1 text-white mb-4 animated slideInRight fw-bolder">Unlock Your Business Growth</h1>
                    <NavLink to="/about" className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carouselImage2}  style={{ height: '600px', objectFit: 'cover' }} alt="Imagemy" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start ">
                  <div className="col-lg-7 text-end">
                  <p className="fs-4 text-white animated slideInRight">Welcome to <strong>Simpified Knowledge Partners LLC</strong></p>
                    
                    <h1 className="display-1 text-white mb-5 animated slideInLeft fw-bolder">Ready to Grow Your Business</h1>
                    <NavLink to="/about" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
