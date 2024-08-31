 <div className={`card shadow-sm ${styles.card}`}>
            {/* <div className="card-body"> */}
              <h2 className="card-title">Join our Panel</h2>
              <p className="card-text">
                If you’re interested in surveys to get your opinions heard and start earning rewards, we want to hear from you. Simply complete a few details to join and we’ll send you an email to further process. Once our team has verified your input, you’ll receive online surveys directly into your inbox. To make money with online surveys, join for free today.
              </p>
              <h4>Why Join?</h4>
              <p className="card-text">
                Work Online! Join now to make money from surveys. As a member, you’ll be rewarded with points for taking online surveys. With your points, you’ll be able to redeem from our range of popular brand vouchers, including flipkart.com, Cbazaar.in, Jabong, Amazon.com® Gift Cards, and iTunes® Gift Cards etc.
              </p>
              <h4>What happens after I join?</h4>
              <p className="card-text">
                You are invited to participate in surveys for money from your inbox. You’ll find yourself sharing your views on familiar topics like consumer products, healthcare, education, lifestyle, and much more which will come under Industrials, Consumer Discretionary, Consumer Staples, Health Care, Financial Services, Information Technology, Telecommunication Services, Utilities, Real Estate, Energy, and Materials.
              </p>
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