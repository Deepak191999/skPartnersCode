import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


const JoinOurTeam = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to Send Message');
      });
  };

  
  return (
    <div className="container mt-5">
      <div className="text-center mx-auto "style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-medium text-primary">Join Our Team</p>
          <h1 className="display-5 mb-5">
          Shape your career with us and grow together.
          </h1>
        </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail} style={{ backgroundColor: '#e9ecef' }} className=" p-4 rounded">
            <div className="form-group mb-3">
              <label>Name</label>
              <input type="text" name="name" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Current Job Title</label>
              <input type="text" name="jobTitle" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Applying for which position</label>
              <input type="text" name="position" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Experience in Years</label>
              <input type="number" name="experience" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Select Country</label>
              <input type="text" name="country" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Subject</label>
              <input type="text" name="subject" className="form-control" required />
            </div>
            <div className="form-group mb-3">
              <label>Upload Resume</label>
              <input type="file" name="resume" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="4" required />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
