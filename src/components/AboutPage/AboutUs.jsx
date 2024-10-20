import React from 'react';

const AboutUs = () => {
  return (
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-10  wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white rounded-top p-5 ">
              <p className="fs-5 fw-medium text-primary">About Us</p>
              <h1 className="display-6 mb-4"style={{color:'#576FFF'} }>The Best Marketing Agency to Improve Your Business</h1>
              <p className="mb-4">
              At Simplified Knowledge MR Partners, we recognize the complexities of today’s marketing landscape. Our skilled team is committed to turning your ideas into reality. With a focus on excellence, we create customized strategies that engage your audience and deliver measurable results.
              </p>
              <div className="row g-5 pt-2 mb-5">
                <div className="col-sm-6">
                  <img className="img-fluid mb-4" src="img/icon/icon-5.png" alt="" />
                  <h5 className="mb-3"style={{color:'#576FFF'} }>Managed Services</h5>
                  <span>We provide comprehensive management solutions that streamline your operations and enhance efficiency.</span>
                </div>
                <div className="col-sm-6">
                  <img className="img-fluid mb-4" src="img/icon/icon-2.png" alt="" />
                  <h5 className="mb-3"style={{color:'#576FFF'} }>Dedicated Experts</h5>
                  <span>Our team of professionals is committed to your success, offering insights and expertise every step of the way.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;
