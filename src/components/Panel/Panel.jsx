import React, { useState } from 'react';
import styles from './Panel.module.css'; // Import your CSS module

const Panel = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    gender: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South',
    'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan',
    'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela',
    'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe', 'Other'
  ];

  return (
    <div className="container my-5">
        <div className="text-center mx-auto "style={{ maxWidth: "500px" }}>
          <p className="fs-5 fw-medium text-primary">Join Our Panel</p>
          
        </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className='mt-4 py-2'>
          Join our Panel
          </h2>
          <p className='fs-5'>
          If you’re interested in surveys to get your opinions heard and start earning rewards, we want to hear from you.
          </p>
          <p className='fs-5'>
Simply complete a few details to join and we’ll send you an email to further process. Once our team will verified your input you’ll receive online surveys directly into your inbox. To make money with online surveys, join for free today.
          </p>

          <h2 className='mt-4 py-2'>
          Why Join?
          </h2>
          <p className='fs-5'>
          Work Online! Join now to make money from surveys. As a member, you’ll be rewarded with points for taking online surveys. With your points you’ll be able to redeem from our range of popular brand vouchers, including flipkart.com, Cbazaar.in and Jabong Amazon.com® Gift Cards and iTunes® Gift Cards etc.
          </p>
          
          <h2 className='mt-4 py-2'>
          What happens after I join?
          </h2>
          <p className='fs-5'>
          You are invited to participate in surveys for money from your inbox. You’ll find yourself sharing your views on familiar topics like consumer products, healthcare, education, lifestyle and much more which will comes under Industrials, Consumer Discretionary, Consumer Staples, Health Care, Financial Services, Information Technology, Telecommunication Services, Utilities, Real Estate, Energy and Materials.
          </p>
          
        </div>
      </div>
      <div className={`row justify-content-center ${styles.panel}`}>
        <div className="col-md-8">
          {/* Card specifically for the form */}
          <div className={`card shadow-sm ${styles.card}`}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Select Country</label>
                  <select id="country" name="country" className="form-select" onChange={handleChange} value={formData.country}>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Gender</label>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="male" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} />
                    <label className="form-check-label" htmlFor="male">Male</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="female" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} />
                    <label className="form-check-label" htmlFor="female">Female</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name (required)</label>
                  <input type="text" id="firstName" name="firstName" className="form-control" onChange={handleChange} value={formData.firstName} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name (required)</label>
                  <input type="text" id="lastName" name="lastName" className="form-control" onChange={handleChange} value={formData.lastName} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email (required)</label>
                  <input type="email" id="email" name="email" className="form-control" onChange={handleChange} value={formData.email} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea id="message" name="message" className="form-control" rows="3" onChange={handleChange} value={formData.message}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
