import React from "react";
import telephone from "../../img/telephone.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Telephonesurvey = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={telephone} // Replace with your image path
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
            <h2>Telephone Surveys</h2>
            <p>
              Telephone surveys are a traditional mode of carrying out market
              research. It involves phone agents asking the respondent questions
              about the product or service via calling them on the phone.
            </p>
            <p>
              There are several advantages to using a telephone survey. Here are
              a few of the pros of telephone surveys:
            </p>

            <ul>
              <li>
                Telephone interviews are immediate and a skilled interviewer can
                complete a number of surveys in a day. Thus, the data collection
                part of the research process is quicker.
              </li>
              <li>
                Most people have at least one phone that they check regularly,
                thus the large sample size you gather is more likely to be
                representative.
              </li>
            </ul>
            <p>
              The research process can have a valuable brand-building element to
              it, as telephone calls have a personal touch to them.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">
                  Immediate response
                </h3>
                <p className="card-text">
                  One advantage to doing a telephone survey is that telephone
                  surveys can allow researchers to gather data faster. This is
                  especially true when the respondent pool is big and
                  geographically spread out.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">Personal touch</h3>
                <p className="card-text">
                  Telephone surveys can reveal more information from the
                  respondent than a email survey because the respondent hears
                  the interviewer’s voice, thus adding a personal touch to the
                  experience of getting interviewed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Cost-effective</h3>
                <p className="card-text">
                  Telephone surveys can be more profitable compared to other
                  methods like web surveys and email surveys, because of the
                  high response rate. They are also cheaper to conduct than
                  direct mail surveys.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Meaningful Discussion
                </h3>
                <p className="card-text">
                  Telephone surveys can foster meaningful discussions of the
                  topic of interview when a skilled interviewer asks the
                  respondents open-ended questions in order to gather valid and
                  reliable data.
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

export default Telephonesurvey;
