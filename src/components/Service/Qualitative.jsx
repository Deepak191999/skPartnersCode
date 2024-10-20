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
          <h2 style={{color:'#576FFF'}}>Qualitative Services</h2>
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

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">F2F (Face-to-Face Interview)</h3>
              <p className="card-text">
              A Face-to-Face Interview (F2F) is a qualitative research method where a trained interviewer conducts in-person interviews to gather detailed insights about consumer attitudes, behaviors, or experiences. The personal interaction allows for a deeper understanding of non-verbal cues, providing richer data. Ethical considerations, such as informed consent and confidentiality, are always prioritized.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">IHUT (In-Home Usage Test)</h3>
              <p className="card-text">
              An In-Home Usage Test (IHUT) involves sending products to respondents to use in their natural home environment. This method helps researchers gather authentic feedback on product performance, usability, and overall satisfaction. The process emphasizes respecting privacy, and participants are often guided to provide detailed, honest feedback over a set period.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">CLT (Central Location Test):</h3>
              <p className="card-text">
      A Central Location Test (CLT) is conducted in a designated public space where respondents are invited to test products, view advertisements, or participate in surveys. This method allows for controlled testing conditions and immediate data collection. Respondents are usually compensated for their time, ensuring voluntary and ethical participation.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">Recruitment</h3>
              <p className="card-text">    
              Recruitment in market research involves selecting suitable respondents for studies based on specific demographic or behavioral criteria. Effective recruitment ensures the study's results are relevant and applicable. Ethical recruitment practices include transparency about the study's purpose, compensation, and maintaining participant confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">Behavioral Research</h3>
              <p className="card-text">
        Behavioral Research focuses on observing and analyzing the decision-making processes, actions, and habits of consumers. This research method uses both qualitative and quantitative techniques to understand how external factors influence behavior. Ethical practices, like obtaining informed consent and ensuring anonymity, are strictly adhered to in behavioral studies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">Mystery Shopping</h3>
              <p className="card-text">
    Mystery Shopping involves hiring individuals to pose as regular customers and evaluate the quality of services, products, or employee interactions at retail locations. The mystery shoppers provide objective feedback, helping businesses improve customer experience. Confidentiality and ethical treatment of both the mystery shopper and the staff being evaluated are key elements of this method.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body ">
              <h3 className="card-title text-center mb-3">  In-Store Video Making</h3>
              <p className="card-text">            
              In-Store Video Making is a method where researchers use discreet video recordings inside a store to observe customer behaviors, product interactions, and movement patterns. The collected data helps improve store layouts and optimize product placement. Ethical guidelines, such as obtaining consent and protecting customer privacy, are strictly followed during the process.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
            <div className="card-body">
              <h3 className="card-title text-center mb-3">Usability Testing</h3>
              <p className="card-text">        
              Usability Testing focuses on observing how participants interact with a product, service, or website to identify potential issues in its design or functionality. This method helps ensure that products are user-friendly and meet customer expectations. Researchers obtain informed consent from participants and maintain ethical practices such as providing feedback in an anonymized manner.
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
