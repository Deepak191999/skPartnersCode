import React from "react";
import online from "../../img/onlineResearch.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Onlineresearch = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={online} // Replace with your image path
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
            <h2> Online Research</h2>
            <p>
              Online research methods are ways of collecting data from customers
              via the internet. Online research has grown over the past few
              years due to the amount of commercial activities and entertainment
              activities that are now starting to take place on the internet.
            </p>

            <p>
              Both quantitative and qualitative research can be conducted
              online. Quantitative is usually done in the form of an online
              survey, in which customers reply to online questionnaires, which
              is often provided via link through email by the company’s mailing
              list, or through social media tools.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">B2B</h3>
                <p className="card-text">
                  We at Simplified Knowledge MR Partners are highly-skilled
                  professionals who are adept at conducting B2B market research
                  and providing market intelligence.
                </p>
                <p className="card-text">
                  B2B online research services include measuring the consumer’s
                  shifting needs, acquiring competitive knowledge of the market,
                  discovering new opportunities in the market, and helping our
                  clients make better business decision.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3"> B2C</h3>
                <p className="card-text">
                  At Simplified Knowledge MR Partners, we strive to understand
                  the behaviors and motivations of the customer, and we also
                  know how to reach and study them.
                </p>
                <p className="card-text">
                  We offer B2C online research services such as interviewing
                  tools and technique, analysis techniques. We conduct regional,
                  national and global research, and provide a thorough analysis
                  according to our clients’ needs, including support and
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </div> 
        
        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Healthcare</h3>
                <p className="card-text">                
We at Simplified Knowledge MR Partners specialize in healthcare market research, leveraging our expertise to provide valuable insights into the evolving healthcare landscape.
                </p>
                <p className="card-text">
                Our healthcare online research services include tracking patient trends, understanding healthcare provider preferences, analyzing treatment protocols, and helping our clients navigate the complexities of healthcare markets to make informed decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">  GenPop (General Population)</h3>
                <p className="card-text">              
We at Simplified Knowledge MR Partners excel in conducting general population (GenPop) research, delivering critical insights on consumer behaviors and societal trends.
                </p>
                <p className="card-text">
                Our GenPop online research services encompass analyzing public opinions, tracking lifestyle changes, understanding consumer habits, and assisting our clients in tailoring strategies to meet the diverse needs of the general population.
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

export default Onlineresearch;
