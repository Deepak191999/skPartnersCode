import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';


const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 
  'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 
  'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 
  'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 
  'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 
  'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 
  'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 
  'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 
  'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 
  'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 
  'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 
  'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 
  'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 
  'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 
  'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 
  'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 
  'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 
  'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 
  'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 
  'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 
  'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
  'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 
  'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe', 'Other'
];

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
    <>
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
                <select name="country" className="form-control" required>
                  <option value="" disabled selected>Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.toLowerCase().replace(/\s+/g, '-')}>{country}</option>
                  ))}
                </select>
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
    <Footer/>
    </>
  );
};

export default JoinOurTeam;
