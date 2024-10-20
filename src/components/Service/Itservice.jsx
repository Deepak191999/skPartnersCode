import React from "react";
import quantity from "../../img/quantitative.jpg";
import styles from "./Qualitative.module.css";
import Footer from "../Footer/Footer";

const Itservice = () => {
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
            <h2 style={{color:'#576FFF'}}>IT Services</h2>
            <p>
            IT services encompass a broad range of technical support and solutions aimed at improving the efficiency, security, and performance of a company’s digital infrastructure. These services rely on cutting-edge technologies to help businesses meet their operational goals, from optimizing internal processes to enhancing customer experiences. IT services address questions like:
            </p>

            <ul>
              <li>
              Does your business have the right technology infrastructure in place to support growth?
              </li>
              <li>
              Are your systems secure and protected from potential cyber threats?
              </li>
              <li>
              How can cloud solutions enhance your business operations and reduce costs?
              </li>
              <li> Which software tools will streamline your company’s workflows and increase productivity?</li>
              <li>How can data analysis and IT solutions help you make informed business decisions?</li>
            </ul>
            <p>
            By leveraging the latest in IT services, businesses can stay competitive in a digital-first landscape, improve their operational efficiency, and ensure future readiness through scalable and secure technologies.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginTop: "150px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Managed IT Services</h3>
                <p className="card-text">                
                Managed IT Services involve outsourcing the management of a company’s IT infrastructure and operations to an external service provider. These services cover a wide range of tasks, including network monitoring, security management, cloud computing, and IT support. By handling day-to-day IT needs, managed service providers (MSPs) help businesses improve efficiency, reduce downtime, and focus on core operations. Service-level agreements (SLAs) ensure the quality of service and client satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">Cloud Computing Services</h3>
                <p className="card-text">                
                Cloud Computing Services provide businesses with on-demand access to computing resources such as servers, storage, databases, and software over the internet. These services are highly scalable, allowing businesses to adjust resources based on needs. Public, private, and hybrid cloud options provide flexibility depending on data security and infrastructure requirements. Providers maintain strict security protocols and compliance with regulations to protect sensitive business data.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">Cybersecurity Services</h3>
                <p className="card-text">                
Cybersecurity Services help organizations protect their digital assets, networks, and sensitive data from cyber threats such as hacking, malware, and data breaches. These services include risk assessments, threat detection, firewall implementation, and incident response plans. With the rising number of cyberattacks, cybersecurity services are essential to safeguarding business continuity. Compliance with global standards like GDPR or ISO 27001 ensures adherence to best practices in data protection.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">IT Consulting Services</h3>
                <p className="card-text">                
                IT Consulting Services offer strategic guidance to organizations on how to optimize their IT infrastructure, implement new technologies, and solve complex technical challenges. Consultants evaluate the company’s current systems, identify areas for improvement, and provide tailored solutions to increase efficiency and innovation. These services help businesses stay competitive by aligning IT capabilities with business goals, while also ensuring cost-effective technology investments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body ">
                <h3 className="card-title text-center mb-3">DevOps Development</h3>
                <p className="card-text">                      
                DevOps Development integrates development and IT operations to ensure continuous delivery and deployment of software with higher efficiency. DevOps engineers focus on automating infrastructure, managing code integration, and ensuring that development environments are consistent. This approach enhances collaboration between developers and operations teams, reduces time-to-market, and improves software reliability through continuous monitoring and testing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className={`card h-100 shadow-sm  ${styles.gradientBg}`}>
              <div className="card-body">
                <h3 className="card-title text-center mb-3">Software Development</h3>
                <p className="card-text">                                 
                 Software Development involves creating tailor-made software solutions to meet the specific needs of a business or organization. This service covers the entire software lifecycle, including requirements gathering, design, development, testing, and deployment. Custom solutions allow businesses to address unique challenges that off-the-shelf software may not solve. Agile development methodologies are often employed to ensure flexibility and iterative improvements throughout the project.
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

export default Itservice;
