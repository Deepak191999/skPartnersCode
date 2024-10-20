import React from "react";
import quantity from "../../img/quantitative.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Quantitative = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={quantity} // Replace with your image path
              alt="Qualitative Services"
              className="img-fluid rounded-3"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "500px",
                maxHeight: "300px",
              }}
            />
          </div>

          {/* Right side text */}
          <div className="col-md-6">
            <h2 style={{color:'#576FFF'}}>Quantitative Services</h2>
            <p>
              Quantitative research is research done using numbers and other
              quantities. Quantitative research is using data and statistical,
              computational, and mathematical analysis tools to shed light on
              certain aspects of your market. It answers questions like:
            </p>

            <ul>
              <li>
                Is there a market for the product or service that you are
                selling?
              </li>
              <li>
                Have customers heard of your product or service? (Market
                awareness)
              </li>
              <li>
                How many customers are likely to buy your product or service?
              </li>
              <li>What segment of the population are your best customers?</li>
              <li>What is that segment’s past purchasing habits?</li>
            </ul>
            <p>
              Because quantitative research uses mathematical tools, it can be
              used to make predictions using the trends a business makes about
              where it is going.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">PAPI</h3>
                <p className="card-text">
                  Paper-Assisted Personal Interviewing is an interview method
                  where the interviewer asks the respondent a series of
                  structured questions and inputs the responses on paper. This
                  interview is done in person. At Simplified Knowledge MR
                  Partners, we have a team of skilled interviewers who can
                  conduct interviews in several languages and have been trained
                  in compliance of well-defined interview protocols.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">CAPI</h3>
                <p className="card-text">
                  Computer-Assisted Personal Interviewing is an interview method
                  similar to Paper-Assisted Personal Interviewing. Here, the
                  field executives/interviewer uses a computer device like a
                  laptop or a tablet. Time and resources that would have been
                  used to enter data manually into a computer are thus
                  eliminated. The data from the interview is sent directly to
                  the server.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">CATI/CAWI</h3>
                <p className="card-text">
                  Computer-Assisted Telephone Interview is an interview method
                  where the interviewer conducts the interview on telephone as
                  opposed to in-person. CATI is easier to conduct than PAPI or
                  CAPI if there are a lot of respondents involved and the
                  respondents are geographically distant. We at Simplified
                  Knowledge MR Partnersuse the best software and technology for
                  this purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">Online</h3>
                <p className="card-text">
                  Online interviewing is a method of interviewing that takes
                  place through the internet. Because people are becoming more
                  comfortable using the internet, online interviewing turns out
                  to be increasing effective. Using online interviewing, a
                  business has the scope to get faster data collection and
                  larger data sets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Quantitative;
