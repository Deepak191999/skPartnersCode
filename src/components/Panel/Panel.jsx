import React, { useState } from 'react';
import styles from './Panel.module.css'; // Import your CSS module
import { init, send } from '@emailjs/browser';
import Footer from '../Footer/Footer';
const Panel = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    gender: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Initialize EmailJS with your public key
    init('_cbXI7fJxSe5K5llv'); 

    // Send email using @emailjs/browser
    send('service_oko30wg', 'template_eyej8dh', formData)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccessMessage('Email sent successfully!');
        // Handle success response
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          gender: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSuccessMessage('Failed to send email. Please try again.');
        // Handle error response
      });
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
    <>
    <div className="container my-5">
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className='mt-4 py-2' style={{color:'#576FFF'}}>
          Join our Panel
          </h2>
          <p className='fs-5'>          
          Are you interested in sharing your opinions and earning rewards through online surveys? We’d love to have you on board!
          </p>
          <p className='fs-5'>
          Just fill in a few simple details to get started, and we’ll send you an email to complete the process. Once your information is verified by our team, you’ll start receiving surveys straight to your inbox. Join for free today and start earning by sharing your thoughts!

          </p>

          <h2 className='mt-4 py-2' style={{color:'#576FFF'}}>
          Why Join?
          </h2>
          <p className='fs-5'>        
            Work from home and start earning with online surveys! By joining, you’ll earn points for every survey you complete. Redeem your points for a variety of popular brand vouchers, including Flipkart, Cbazaar, Jabong, Amazon® Gift Cards, iTunes® Gift Cards, and more. Sign up today and start getting rewarded for sharing your opinions!
          </p>
          
          <h2 className='mt-4 py-2' style={{color:'#576FFF'}}>
          What happens after I join?
          </h2>
          <p className='fs-5'>        
             Once you join, you’ll receive survey invitations directly in your inbox. You’ll be sharing your opinions on topics you’re familiar with, such as consumer products, healthcare, education, lifestyle, and more. These surveys will cover a wide range of industries including Industrials, Consumer Goods, Healthcare, Finance, Technology, Telecom, Utilities, Real Estate, Energy, and Materials. Your views will help shape decisions in these sectors, and you’ll earn rewards in return!
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
                {successMessage && <p className="mt-3 text-success">{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default Panel;