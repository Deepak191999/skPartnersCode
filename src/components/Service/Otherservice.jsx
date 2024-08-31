import React from "react";
import other from "../../img/other.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Otherservice = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={other} // Replace with your image path
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
            <h2>Other Services</h2>
            <p>
              We at Simplified Knowledge MR Partners. offer several other
              services related to market research that helps a business conduct
              its own market research. We make surveys for our clients’ use,
              which includes making the design and the overall experience of
              responding to the survey resonate with our clients’ brand image.
            </p>
            <p>
              We have professionals to use a variety of programmable tools to
              process our clients’ data.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Data Processing</h3>
                <p className="card-text">
                  At Simplified Knowledge MR Partners, our team is comprised of
                  data processing professionals who are competent in using
                  industry-standard tools and techniques like SPSS and Quantum
                  in order to perform various activities within data processing,
                  including cleaning and organizing data.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">Transcription</h3>
                <p className="card-text">
                  At Simplified Knowledge MR Partners, you can get various kinds
                  of audio files transcribed accurately and securely in order to
                  help you perform market research, including telephone survey
                  interview recording, focus group discussions, and one-on-one
                  interviews.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3"> Translations</h3>
                <p className="card-text">
                  At Simplified Knowledge MR Partners, you can get market
                  research survey results translated from a variety of languages
                  into a common language such as English. This will ensure that
                  all responses are accurately interpreted and allows the
                  research to be easily categorized. We offer translations of
                  research briefings, survey results, research packs and so on.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Survey Programming
                </h3>
                <p className="card-text">
                  Survey programming refers to the process of translating a
                  clients’ requirements for a survey into a questionnaire that
                  can be sent or asked to respondents. At Simplified Knowledge
                  MR Partners, we have a team of skilled professionals who can
                  make questionnaires that will result in reliable and valid
                  data for our clients.
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

export default Otherservice;
