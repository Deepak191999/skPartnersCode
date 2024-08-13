import React from 'react';
import icon5 from '../img/icon/icon-5.png'
import icon6 from '../img/icon/icon-6.png'
import icon7 from '../img/icon/icon-7.png'
import icon8 from '../img/icon/icon-8.png'
import icon9 from '../img/icon/icon-9.png'
import icon10 from '../img/icon/icon-10.png'
const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '500px' }}
        >
          <p className="fs-5 fw-medium text-primary">Our Services</p>
          <h1 className="display-5 mb-5">Digital Marketing Services that We Offer</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon5} alt="Icon" />
                </div>
                <h5 className="mb-3">Digital Marketing</h5>
                <p className="mb-0">
                Drive engagement and conversion with data-driven digital marketing strategies tailored to your business needs.
                </p>
              </div>
            
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon6} alt="Icon" />
                </div>
                <h5 className="mb-3">Internet Marketing</h5>
                <p className="mb-0">
                Enhance your online presence through targeted campaigns across various digital platforms and channels.
                </p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon7} alt="Icon" />
                </div>
                <h5 className="mb-3">Content Marketing</h5>
                <p className="mb-0">
                Create valuable content that attracts and engages your target audience, driving organic traffic to your site.
                </p>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon8} alt="Icon" />
                </div>
                <h5 className="mb-3">Social Marketing</h5>
                <p className="mb-0">
                Build brand loyalty and community through strategic social media marketing that resonates with your audience.
                </p>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon9} alt="Icon" />
                </div>
                <h5 className="mb-3">B2B Marketing</h5>
                <p className="mb-0">
                Target business clients effectively with tailored B2B marketing strategies designed to generate leads and drive sales.
                </p>
              </div>
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item position-relative h-100">
              <div className="service-text rounded p-5">
                <div
                  className="btn-square bg-light rounded-circle mx-auto mb-4"
                  style={{ width: '64px', height: '64px' }}
                >
                  <img className="img-fluid" src={icon10} alt="Icon" />
                </div>
                <h5 className="mb-3">E-mail Marketing</h5>
                <p className="mb-0">
                Reach your audience directly with personalized email marketing campaigns that drive engagement and conversions.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
