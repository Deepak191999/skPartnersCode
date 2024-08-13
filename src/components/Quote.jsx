import React from 'react'

const Quote = () => {
  return (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="fs-5 fw-medium text-primary">Get A Quote</p>
                <h1 className="display-5 mb-4">Need Our Expert Help? We're Here!</h1>
                <p> At Simplified Knowledge Partners, we specialize in providing actionable insights that drive decision-making. Our dedicated team is here to support your business goals with comprehensive research solutions.</p>
                <p className="mb-4">Whether you’re launching a new product or seeking to understand your market landscape, we’re committed to delivering high-quality, data-driven results tailored to your needs.</p>
                  <div className="d-flex align-items-center rounded overflow-hidden" style={{ padding: '5px' }}>
                     <span className="btn-lg-square rounded-circle bg-primary" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa fa-phone-alt text-white"></i>
                     </span>
                     <span className="fs-5 fw-medium mx-3">+91 9958393800</span>
                </div>

              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <h2 className="mb-4">Get A Free Quote</h2>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                      <label htmlFor="mail">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                      <label htmlFor="mobile">Your Mobile</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '130px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Quote