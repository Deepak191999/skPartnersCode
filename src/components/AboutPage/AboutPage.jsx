import React from "react";
import styles from './AboutPage.module.css';
import Footer from "../Footer/Footer";

import Img1 from "../../img/young-businesswoman-with-co-workers1.jpg";
import Img2 from "../../img/businesspeople-celebrating-success1.jpg";
import Img3 from "../../img/project-3.jpg";
import Img4 from "../../img/vision1.jpg";
import AboutUs from "./AboutUs";

const AboutPage = () => {
  return (
    <>
      <AboutUs />

      {/* Section 1 */}
      <div className="row g-0 mt-5">
        <div className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s">
          <img
            src={Img1}
            className={`img-fluid shadow-lg ${styles.imageHover}`}
            alt="Market Research"
            style={{
              height: "300px", width: "300px", objectFit: "cover",
              border: "5px solid #fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>
        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
          <div className="bg-light rounded-top p-5 h-100">
            {/* Heading */}
            <h2 className="display-6 mb-4 fw-semibold" style={{ color: '#576FFF' }}>
              Market Research Company You Can Trust
            </h2>
            {/* Text */}
            <p style={{ fontSize: '1.1rem' }}> 
              Simplified Knowledge MR Partners was established in 2019 and we specialize in market research consultation
              for industry, healthcare, professional associations, consumer markets, and more. We are focused on using
              well-tested market research tools in solving our clients’ business problems.
            </p>
            <p style={{ fontSize: '1.1rem' }}> 
              We are located in USA and INDIA and have a workforce of highly skilled, enthusiastic market research professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="row g-0 mt-5">
        <div className="col-lg-8 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s" style={{ paddingLeft: '5rem' }}>
          <div className="bg-light rounded-top p-5 h-100">
            {/* Subheading */}
            <h2 className=" mb-4 text-primary fw-semibold">Core Values</h2>
            
            <ul className="list-unstyled">  
              <li style={{ fontSize: '1.1rem' }}>1. <strong>Respect:</strong> We respect our clients and treat them with the highest levels of respect.</li>
              <li style={{ fontSize: '1.1rem' }}>2. <strong>Integrity:</strong> We hold ourselves to high levels of integrity, always collaborating with our clients and avoiding conflicts of interest.</li>
              <li style={{ fontSize: '1.1rem' }}>3. <strong>Commitment:</strong> We are dedicated as market
                 researchers to help our clients make wiser decisions. Market
                 research is our collective passion.</li>
              <li style={{ fontSize: '1.1rem' }}>4. <strong>Performance:</strong> We strive to improve both our
                performance as market researchers and our clients’ performance as business leaders.</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s">
          <img
            src={Img2}
            className={`img-fluid rounded-circle shadow-lg ${styles.imageHover}`}
            alt="Market Research"
            style={{
              height: "300px", width: "300px", objectFit: "cover",
              border: "5px solid #fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="row g-0 mt-5">
        <div className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s">
          <img
            src={Img3}
            className={`img-fluid shadow-lg ${styles.imageHover}`}
            alt="Market Research"
            style={{
              height: "300px", width: "300px", objectFit: "cover",
              border: "5px solid #fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>
        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
          <div className="bg-light rounded-top p-5 h-100">
            {/* Heading */}
            <h2 className=" mb-4 text-primary fw-semibold">Our Mission</h2>
            {/* Text */}
            <p style={{ fontSize: '1.1rem' }}>
            Our mission is to be able to consistently deliver top quality
               market research to our clients. We will strive to grow into a
               worldwide research group with strong presence internationally and
               across all markets.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
            We strive to ensure client satisfaction at every step of the way.
               We will work towards providing original, authentic, and reliable
               data using efficient and effective research methods, tools, and
               software. We will use that research to help our clients to build a
              long-term relationship with their customers.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="row g-0 mt-5">
        <div className="col-lg-8 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s" style={{ paddingLeft: '4rem' }}>
          <div className="bg-light rounded-top p-5 h-100">
            {/* Heading */}
            <h2 className=" mb-4 text-primary fw-semibold">Our Vision</h2>
            <p style={{ fontSize: '1.1rem' }}>
            Our vision is to be a market research organization par excellence which is trusted by our current and future clients, as well as the public. We want to be able to provide helpful and distinctly actionable and practical insights to our clients.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
            We wish to foster professional growth and development in our employees so as to allow them to grow alongside our organization. Finally, we want to see the field of market research and market intelligence grow along with us.
            </p>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.5s">
          <img
            src={Img4}
            className={`img-fluid rounded-circle shadow-lg ${styles.imageHover}`}
            alt="Market Research"
            style={{
              height: "300px", width: "300px", objectFit: "cover",
              border: "5px solid #fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;







// import React from "react";
// import styles from './AboutPage.module.css'
// import Footer from "../Footer/Footer";

// import Img1 from "../../img/young-businesswoman-with-co-workers1.jpg";
// import Img2 from "../../img/businesspeople-celebrating-success1.jpg";
// import Img3 from "../../img/project-3.jpg";
// import Img4 from "../../img/vision1.jpg";
// import AboutUs from "./AboutUs";


// const AboutPage = () => {
//   return (
//     <>
    
//     <AboutUs/>
      
//       <div className="row g-0 mt-5">
//         <div
//           className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <img
//             src={Img1}
//             className={`img-fluid shadow-lg  ${styles.imageHover}`}
//             alt="Market Research"
//             style={{ height: "300px", width: "300px",objectFit: "cover", 
//               border: "5px solid #fff", 
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", }}
//           />


//         </div>
//         <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
//           <div className="bg-light rounded-top p-5 h-100">
//             <h2 className="display-6 mb-4  fw-semibold"style={{color:'#576FFF'}}>
//               Market Research Company You Can Trust
//             </h2>
//             <p className="mb-4">
//               Simplified Knowledge MR Partners was established in 2019 and we
//               specialize in market research consultation for industry,
//               healthcare, professional associations, consumer markets, and more.
//               We are focused on using well-tested market research tools in
//               solving our clients’ business problems.
//             </p>
//             <p className="mb-4">
//               We are located in USA and INDIA and have a workforce of highly
//               skilled, enthusiastic market research professionals.
//             </p>
//           </div>
//         </div>
//       </div>


//       <div className="row g-0 mt-5">
//         <div  style={{ paddingLeft: '5rem' }}
//           className="col-lg-8  d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <div className="bg-light rounded-top p-5 h-100 ">
//             <h3 className="mt-5 text-primary fw-semibold">Core Values</h3>
//             <ul className="list-unstyled">
//               <li>
//                 1. <strong>Respect:</strong> We respect our clients and treat
//                 them with the highest levels of respect.
//               </li>
//               <li>
//                 2. <strong>Integrity:</strong> We hold ourselves to high levels
//                 of integrity. On a practical level, this includes always
//                 collaborating with our clients and avoiding conflicts of
//                 interest.
//               </li>
//               <li>
//                 3. <strong>Commitment:</strong> We are dedicated as market
//                 researchers to help our clients make wiser decisions. Market
//                 research is our collective passion.
//               </li>
//               <li>
//                 4. <strong>Performance:</strong> We strive to improve both our
//                 performance as market researchers and our clients’ performance
//                 as business leaders.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div
//           className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <img
//             src={Img2}
//             className={`img-fluid rounded-circle shadow-lg  ${styles.imageHover}`} // Use 'rounded-circle' for a circular image
//             alt="Market Research"
//             style={{ height: "300px", width: "300px",objectFit: "cover", 
//               border: "5px solid #fff", 
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", }}
//           />
//         </div>
//       </div>


//       <div className="row g-0 mt-5">
//         <div
//           className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <img
//             src={Img3}
//             className={`img-fluid shadow-lg  ${styles.imageHover}`}
//             alt="Market Research"
//             style={{ height: "300px", width: "300px",objectFit: "cover", 
//               border: "5px solid #fff", 
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", }}
//           />
//         </div>
//         <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
//           <div className="bg-light rounded-top p-5 h-100">
//             <h2 className="display-6 mb-4 text-primary  fw-semibold">Our Mission</h2>
//             <p className="mb-4">
//               Our mission is to be able to consistently deliver top quality
//               market research to our clients. We will strive to grow into a
//               worldwide research group with strong presence internationally and
//               across all markets.
//             </p>
//             <p className="mb-4">
//               We strive to ensure client satisfaction at every step of the way.
//               We will work towards providing original, authentic, and reliable
//               data using efficient and effective research methods, tools, and
//               software. We will use that research to help our clients to build a
//               long-term relationship with their customers.
//             </p>
//           </div>
//         </div>
//       </div>


// <div className="row g-0 mt-5">
//         <div  style={{ paddingLeft: '4rem' }}
//           className="col-lg-8  d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <div className="bg-light rounded-top p-5 h-100 ">
//           <h2 className="display-6 mb-4 text-primary  fw-semibold">Our Vision</h2>
//            <p>Our vision is to be a market research organization par excellence which is trusted by our current and future clients, as well as the public. We want to be able to provide helpful and distinctly actionable and practical insights to our clients.
//             </p>
//             <p className="mb-4">
//             We wish to foster professional growth and development in our employees so as to allow them to grow alongside our organization. Finally, we want to see the field of market research and market intelligence grow along with us.
//             </p>
//           </div>
//         </div>

//         <div
//           className="col-lg-4 d-flex justify-content-center align-items-center wow fadeIn"
//           data-wow-delay="0.5s"
//         >
//           <img
//             src={Img4}
//             className={`img-fluid rounded-circle shadow-lg  ${styles.imageHover}`}
//             alt="Market Research"
//             style={{ height: "300px", width: "300px",objectFit: "cover", 
//               border: "5px solid #fff", 
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", }}
//           />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default AboutPage;
