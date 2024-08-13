import React from 'react';
import icon1 from '../img/icon/icon-1.png';
import icon2 from '../img/icon/icon-2.png';
import icon3 from '../img/icon/icon-3.png';
import icon4 from '../img/icon/icon-4.png';

const Features = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0 feature-row">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                <img className="img-fluid" src={icon1} alt="Icon" />
              </div>
              <h5 className="mb-3">Award Winning</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                <img className="img-fluid" src={icon2} alt="Icon" />
              </div>
              <h5 className="mb-3">Professional Staff</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                <img className="img-fluid" src={icon3} alt="Icon" />
              </div>
              <h5 className="mb-3">Fair Prices</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <div className="feature-item border h-100 p-5">
              <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                <img className="img-fluid" src={icon4} alt="Icon" />
              </div>
              <h5 className="mb-3">24/7 Support</h5>
              <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
