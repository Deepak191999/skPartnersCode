import React from "react";
import business from "../../img/businessService.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";
const Businessresearch = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={business} // Replace with your image path
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
            <h2>Business Research</h2>
            <p>
             Business research refers to research about a
              company’s business activities and operations in order to use the
              information found to improve organizational performance and
              profits.
            </p>
            <p>
              The data thus gathered is used by stakeholders of a company to
              make good and efficient decisions about the company. The gathering
              of this data allows executives and managers to understand their
              target customers, plan their investments, and measure their
              reputation among target customers in relation to competitors.
            </p>

            <p>
              Business research can involve all parts of the business
              environment of a company, including markets it is involved in,
              trends of the economy at the local and global levels, improvements
              in technology in the field under study, and many other things.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Identification</h3>
                <p className="card-text">
                  Simplified Knowlege MR Partnershelps our clients to identify
                  and exploits market opportunities. Identification helps to
                  clarify problems and threats, and this information can be used
                  to make good decisions about the company.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Understanding Customers
                </h3>
                <p className="card-text">
                  Simplified Knowlege MR Partnershelps our clients improve their
                  understanding of their customers, which can be useful in
                  communicating better with customers or stakeholders. By
                  conducting research to understand customers, risk and
                  uncertainties may be minimized.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">
                  {" "}
                  Investment Planning
                </h3>
                <p className="card-text">
                  Simplified Knowlege MR Partnershelps our clients plan their
                  company’s financial strategy, which is done by using knowledge
                  about the market. We help clients incorporate this knowledge
                  into their financial strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Reputation Measurement
                </h3>
                <p className="card-text">
                  Simplified Knowlege MR Partnershelps our client measure the
                  value of their brand’s reputation. This is done by using brand
                  surveys and online sentiment analysis. This can help
                  businesses stay updated on the state of the market and market
                  trends in order to make appropriate and innovative
                  interventions in the market.
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

export default Businessresearch;
