import React from "react";

const Contact = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-medium text-primary">Contact Us</p>
          <h1 className="display-5 mb-5">
            If You Have Any Query, Please Contact Us
          </h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "200px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary rounded-pill py-3 px-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h3 className="mb-4">Contact Details</h3>
            <div className="d-flex border-bottom pb-3 mb-3">
              <div className="flex-shrink-0 bg-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}>
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h6>Our Offices</h6>
                <span>30N, Gould St. Ste 4000 Sheridan, Wyoming 82801 USA,</span><br />
                {/* <span> 8th floor Tower B, Ithum, A40, Sector 62, Noida, Uttar Pradesh 201301</span> */}
              </div>
            </div>

            <div className="d-flex border-bottom pb-3 mb-3">
              <div className="flex-shrink-0 bg-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h6>Call Us</h6>
                <span>+91  9971139111</span>
              </div>
            </div>

            <div className="d-flex border-bottom-0 pb-3 mb-3">
              <div className="flex-shrink-0 bg-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "50px", height: "50px" }}>
                <i className="fa fa-envelope text-white"></i>
              </div>
              <div className="ms-3">
                <h6>Mail Us</h6>
                <span>info@sk-mrpartners.com</span>
              </div>
            </div>

            <iframe
              className="w-100 rounded"
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11324.672344494016!2d-106.9549523!3d44.797763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a650d27%3A0x6ae43d2ca3ecd327!2sSimplified%20Knowledge%20Partners!5e0!3m2!1sen!2sin!4v1725125597740!5m2!1sen!2sin" 
               title="30N, Gould St. Ste 4000 Sheridan, Wyoming 82801 USA"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              
              style={{ minHeight: "300px", border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
