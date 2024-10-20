import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import { init, send } from '@emailjs/browser';
// // List of countries
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];


const Quote = () => {
  const [formData, setFormData] = useState({
    courtesyTitle: '',
    fullName: '',
    jobTitle: '',
    companyName: '',
    country: '',
    segment: '',
    phoneNo: '',
    subject: '',
    email: '',
    comment: '',
    budget: '',
    file: null,
    fileBase64: "",
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
        init("acSUaAGoCFmiyHiTA"); 
      }, []);

    
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
        if (type === "file") {
          const file = files[0]; // Get the uploaded file
          setFormData({ ...formData, file }); // Save the file object
    
          // Convert file to base64
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData((prevData) => ({
              ...prevData,
              fileBase64: reader.result.split(",")[1], // Get base64 string without metadata
            }));
          };
          reader.readAsDataURL(file);
        } else {
          setFormData({ ...formData, [name]: value });
        }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate required fields
    const requiredFields = ['courtesyTitle', 'fullName', 'country', 'segment', 'phoneNo', 'email', 'budget'];
    const isFormValid = requiredFields.every(field => formData[field]);
  
    if (!isFormValid) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    
    const emailData = {
      ...formData,
      file: formData.fileBase64, // Include base64 file data in email payload
    };
  
    // Send email using @emailjs/browser
    send('service_ur7bqrc', 'template_eaxjnna', emailData) // Use emailData here
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccessMessage('Email sent successfully!');
        setErrorMessage(''); // Clear any previous error message
        setFormData({
          courtesyTitle: '',
          fullName: '',
          jobTitle: '',
          companyName: '',
          country: '',
          segment: '',
          phoneNo: '',
          subject: '',
          email: '',
          comment: '',
          budget: '',
          file: null,
          fileBase64: "",
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSuccessMessage(''); // Clear any previous success message
        setErrorMessage('Failed to send email. Please try again.');
      });
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <h1
                className="display-5 mb-4"
                style={{
                  color: "#576FFF",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                Need Our Expert Help? We're Here!
              </h1>
              <p style={{ fontSize: '1.1rem' }}>   
                At Simplified Knowledge MR Partners, we specialize in providing
                actionable insights that drive decision-making. Our dedicated
                team is here to support your business goals with comprehensive
                research solutions.
              </p>
              <p style={{ fontSize: '1.1rem' }}>   
                Whether you’re launching a new product or seeking to understand
                your market landscape, we’re committed to delivering
                high-quality, data-driven results tailored to your needs.
              </p>
              <div
                className="d-flex align-items-center rounded overflow-hidden"
                style={{ padding: "5px" }}
              >
                <span
                  className="btn-lg-square rounded-circle bg-primary"
                  style={{
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </span>
                <span className="fs-5 fw-medium mx-3">+91 9971139111</span>
              </div>
              <div
                className="d-flex align-items-center rounded overflow-hidden"
                style={{ padding: "5px" }}
              >
                <span
                  className="btn-lg-square rounded-circle bg-primary"
                  style={{
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </span>
                <span className="fs-5 fw-medium mx-3">
                  sales@sk-mrpartners.com
                </span>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <p
                className="mb-4 text-primary"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                }}
              >
                Get A Free Quote
              </p>
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Courtesy Title */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <select
                        className="form-control"
                        id="courtesyTitle"
                        name="courtesyTitle" // Bind name to state
                        value={formData.courtesyTitle}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Choose Title
                        </option>
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
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName" // Bind name to state
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                      <label htmlFor="fullName">Full Name (required)</label>
                    </div>
                  </div>

                  {/* Job Title */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Job Title"
                      />
                      <label htmlFor="jobTitle">Job Title</label>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                      <label htmlFor="companyName">Company Name</label>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <select
                        className="form-control"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Country
                        </option>
                        {countries.map((country, index) => (
                          <option
                            key={index}
                            value={country.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {country}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="country">Country (required)</label>
                    </div>
                  </div>

                  {/* Segment */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <select
                        className="form-control"
                        id="segment"
                        name="segment"
                        value={formData.segment}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Segment
                        </option>
                        <option value="primary">Primary Research</option>
                        <option value="secondary">
                          Secondary (DESK) Research
                        </option>
                        <option value="online">Online Research</option>
                      </select>
                      <label htmlFor="segment">Segment (required)</label>
                    </div>
                  </div>

                  {/* Phone No */}
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        placeholder="Phone No."
                        required
                      />
                      <label htmlFor="phoneNo">Phone No. (required)</label>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  {/* Your Email */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email (required)</label>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        style={{ height: "130px" }}
                      ></textarea>
                      <label htmlFor="comment">Comment</label>
                    </div>
                  </div>

                  {/* Upload File */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control"
                        id="fileUpload"
                        name="file" // Bind name to state
                        onChange={handleChange}
                      />
                      <label htmlFor="fileUpload">Upload File</label>
                    </div>
                  </div>

                  {/* Budget Input */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Budget in Dollars"
                        required
                      />
                      <label htmlFor="budget">
                        Do you have a budget for this project? (If not, enter 0)
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-center">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Quote;

