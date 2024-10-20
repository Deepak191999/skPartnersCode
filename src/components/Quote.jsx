



import React from 'react';
import Footer from './Footer/Footer';

// List of countries
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

const Quote = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              
              <h1 className="display-5 mb-4 "style={{color:'#576FFF'}}>Need Our Expert Help? We're Here!</h1>
              <p>At Simplified Knowledge MR Partners, we specialize in providing actionable insights that drive decision-making. Our dedicated team is here to support your business goals with comprehensive research solutions.</p>
              <p className="mb-4">Whether you’re launching a new product or seeking to understand your market landscape, we’re committed to delivering high-quality, data-driven results tailored to your needs.</p>
              <div className="d-flex align-items-center rounded overflow-hidden" style={{ padding: '5px' }}>
                <span className="btn-lg-square rounded-circle bg-primary" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </span>
                <span className="fs-5 fw-medium mx-3">+91 9971139111</span>
              </div>
              <div className="d-flex align-items-center rounded overflow-hidden" style={{ padding: '5px' }}>
                <span className="btn-lg-square rounded-circle bg-primary" style={{ width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>                 
                  <i className="fa fa-envelope text-white"></i>
                </span>
                <span className="fs-5 fw-medium mx-3">sales@sk-mrpartners.com</span>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="mb-4"style={{color:'#576FFF'}}>Get A Free Quote</h2>
              <div className="row g-3">
                {/* Courtesy Title */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-control" id="courtesyTitle" required>
                      <option value="" disabled selected>Choose Title</option>
                      <option value="dr">Dr</option>
                      <option value="mr">Mr</option>
                      <option value="mrs">Mrs</option>
                      <option value="miss">Miss</option>
                      <option value="ms">Ms</option>
                      
                    </select>
                    <label htmlFor="courtesyTitle">Courtesy Title (required)</label>
                  </div>
                </div>

                {/* Full Name */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" required />
                    <label htmlFor="fullName">Full Name (required)</label>
                  </div>
                </div>

                {/* Job Title */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="jobTitle" placeholder="Job Title" />
                    <label htmlFor="jobTitle">Job Title</label>
                  </div>
                </div>

                {/* Company Name */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
                    <label htmlFor="companyName">Company Name</label>
                  </div>
                </div>

                {/* Country */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-control" id="country" required>
                      <option value="" disabled selected>Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.toLowerCase().replace(/\s+/g, '-')}>{country}</option>
                      ))}
                    </select>
                    <label htmlFor="country">Country (required)</label>
                  </div>
                </div>

                {/* Segment */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-control" id="segment" required>
                      <option value="" disabled selected>Select Segment</option>
                      <option value="primary">Primary Research</option>
                      <option value="secondary">Secondary (DESK) Research</option>
                      <option value="online">Online Research</option>
                    </select>
                    <label htmlFor="segment">Segment (required)</label>
                  </div>
                </div>

                {/* Phone No */}
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="tel" className="form-control" id="phoneNo" placeholder="Phone No." required />
                    <label htmlFor="phoneNo">Phone No. (required)</label>
                  </div>
                </div>

                {/* Subject */}
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>

                {/* Your Email */}
                <div className="col-12">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                    <label htmlFor="email">Your Email (required)</label>
                  </div>
                </div>

                {/* Comment */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="comment" style={{ height: '130px' }}></textarea>
                    <label htmlFor="comment">Comment</label>
                  </div>
                </div>

                {/* Upload File */}
                <div className="col-12">
                  <div className="form-floating">
                    <input type="file" className="form-control" id="fileUpload" />
                    <label htmlFor="fileUpload">Upload File</label>
                  </div>
                </div>

                {/* Budget Input */}
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="budget" placeholder="Budget in Dollars" required />
                    <label htmlFor="budget">Do you have a budget for this project? (If not, enter 0)</label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Quote;
