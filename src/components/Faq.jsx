import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Make sure to install FontAwesome if not done yet
import Footer from './Footer/Footer';

const Faq = () => {
  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Sample FAQ data
  const faqs = [
    {
      question: "What is Simplified Knowledge MR Partners?",
      answer: (
        <>
            Simplified Knowledge MR Partners is a premier global provider of comprehensive market research services, specializing in Qualitative Research, Quantitative Research, and Online Research.<br /><br />
            Our mission is to empower businesses to gain a competitive edge by leveraging digital transformation and adopting innovative technologies across all market research sectors.<br /><br />
            We conduct surveys and polls across various domains, including public affairs, consumer products, and brand perceptions. Our research is supported by a diverse pool of respondents from around the world, ensuring that we capture a wide range of insights and opinions on key issues.<br /><br />
            Joining our research panel is free and open to individuals aged 18 and above, allowing us to gather valuable data that aids businesses in making informed decisions.<br /><br />
            At Simplified Knowledge MR Partners, we are committed to providing actionable insights that help our clients stay ahead in an ever-evolving marketplace.
        </>
    )
    },
    {
        question: "Who can I contact for business-related inquiries?",
        answer: "For business-related queries, please reach out to us at: info@sk-mrpartners.com."
      },
      {
        question: "Does Simplified Knowledge MR Partners offer global fieldwork services?",
        answer: "Yes, we have a team of experienced project management professionals located worldwide. Our services include Public Opinion Polls, Custom Research, Survey Design, and more."
      },
      {
        question: "What happens when I register for the Simplified Knowledge MR Partners panel?",
        answer: "Upon registering, you will receive a welcome email prompting you to complete a short survey about your demographics, which helps us send you relevant surveys in the future."
      },
      {
        question: "Will I receive emails from anyone other than Simplified Knowledge MR Partners?",
        answer: "No, we prioritize your privacy and will not share your email with third parties."
      },
      {
        question: "How long is a typical Simplified Knowledge MR Partners survey?",
        answer: "Most of our surveys are short and easy to complete, typically consisting of 20 to 30 questions."
      },
      {
        question: "What kinds of prizes are offered for participating in surveys?",
        answer: "Prizes may be awarded in cash or equivalent value. Winners may need to set up a money transfer account to receive their prize."
      },
      {
        question: "Who pays for these polls?",
        answer: "We conduct surveys for a diverse group of clients to understand public views on current affairs and consumer products. Our polls are designed to measure opinions without influencing them."
      },
      {
        question: "Do I have to buy or subscribe to anything?",
        answer: "No, Simplified Knowledge MR Partners only conducts legitimate public opinion polls. You won't be asked to buy or subscribe to anything."
      },
      {
        question: "Where can I learn more about Simplified Knowledge MR Partners?",
        answer: "You can learn more by visiting the About section of our website."
      },
      {
        question: "How do I leave the Simplified Knowledge MR Partners panel?",
        answer: "If you wish to leave, please log in and visit the unsubscribe page. Note that you will forfeit any points in your account if you unsubscribe."
      }
  ];

  // Function to toggle the open index
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4">FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <div 
            className="faq-question d-flex align-items-center" 
            onClick={() => toggleFAQ(index)} 
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
          >
            {faq.question}
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className={`ms-auto transition-transform ${openIndex === index ? 'rotate' : ''}`} 
              style={{ width: '20px', height: '20px' }} 
            />
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <h4>Contact Us</h4>
      <p><strong>Simplified Knowledge MR Partners Panel Support</strong><br />
      info@sk-mrpartners.com</p>
    </div>

<Footer/>
    </>
  );
};

export default Faq;
