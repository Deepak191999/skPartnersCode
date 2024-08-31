import React from "react";

import quality from "../../img/Quality.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Qualitative = () => {
  return (
    <>
    
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left side image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={quality} // Replace with your image path
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
          <h2>Qualitative Services</h2>
          <p>
            Qualitative research is a type of research that studies people, as
            opposed to quantitative data. It is usually conducted by asking
            open-ended questions to people or groups of people.
          </p>
          <p>
            It can help your business define the problems with your product or
            service that you might address and learn about the customer’s
            opinions and belief about your product or service in a more detailed
            way than is possible through quantitative research.
          </p>
          <p>
            It does not give you a prediction of future performance, but a
            snapshot of your business. It answers questions like:
          </p>
          <ul>
            <li>
              What does the customer like about your product or service that is
              better than your competitors? What can the company do to improve
              upon it?
            </li>
            <li>
              What do visual materials like the company logo and ads promoting
              your product/service convey to the customer?
            </li>
            <li>
              How visually appealing and easy to navigate is the company’s
              website?
            </li>
          </ul>
        </div>
      </div>

      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">IDI / TDI</h3>
              <p className="card-text">
                An in-depth Interview is a qualitative research method which
                uses an interviewer to gain valuable information about the way
                your customers view your company, your products, or your
                services. It can be taken in person, over the internet, or over
                the telephone. If it is taken over the telephone, it is called
                TDI (Telephonic depth interview). While conducting TDIs, we care
                about ethical practices like respondent confidentiality and
                taking permission and informed consent when recording the
                telephonic interview.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">FGD</h3>
              <p className="card-text">
                Focus Group Discussion involves an interviewer asking a group of
                people questions focused on a specific set of issues, in order
                to get their viewpoints, their beliefs, and ideas about a
                concept, an idea, a product, or a service. The focus group can
                be a sample of the segment the company is targeting or planning
                to target. It can take place in-person or online through
                interactive and forum-based media. At Simplified Knowledge MR
                Partners, in-person FGDs are conducted according to the
                convenience and availability of consumers and using facilities
                as per client requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">Ethnography</h3>
              <p className="card-text">
              Ethnography is a research method by which a market research personnel observes the consumer use the product or service on their own time and in their own environment. This can reveal useful information regarding how a customer uses a product or a service. Ethnography involves asking the customer structured and unstructured questions, directly observing the customer, and participating in the communities of the segment of the customer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">Audit</h3>
              <p className="card-text">
              Mystery shopping uses a research personnel as a secret shopper to purchase the a basket of products or services from the company under study and use them to assess the customer experience. Mystery shopping can be conducted in-person, on the phone, or online. The mystery shopper evaluates the customer experience using a number of things like availability of product, helpfulness and knowledge of the staff at the establishment, and whether the product is clean and whether it works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Qualitative;
