import React from 'react';

const AboutUs = () => {
  return (
    <div className="container-xxl about my-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-4">
            {/* <div
              className="h-100 d-flex align-items-center justify-content-center"
              style={{ minHeight: '300px' }}
            >
              {/* Uncomment and use this button if needed */}
              {/* <button type="button" className="btn-play" data-bs-toggle="modal"
                  data-src="https://youtu.be/RgKAFK5djSk?si=nGFduvIjanWbqKjA" data-bs-target="#videoModal">
                  <span></span>
              </button>
            </div> */} 
          </div>
          <div className="col-lg-8 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white rounded-top p-5 mt-lg-5">
              <p className="fs-5 fw-medium text-primary">About Us</p>
              <h1 className="display-6 mb-4">The Best Marketing Agency to Improve Your Business</h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
              </p>
              <div className="row g-5 pt-2 mb-5">
                <div className="col-sm-6">
                  <img className="img-fluid mb-4" src="img/icon/icon-5.png" alt="" />
                  <h5 className="mb-3">Managed Services</h5>
                  <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                </div>
                <div className="col-sm-6">
                  <img className="img-fluid mb-4" src="img/icon/icon-2.png" alt="" />
                  <h5 className="mb-3">Dedicated Experts</h5>
                  <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                </div>
              </div>
              {/* Uncomment and use this button if needed */}
              <a className="btn btn-primary rounded-pill py-3 px-5" href="">Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
