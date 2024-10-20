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
          Simplified Knowledge MR Partners is a leading global provider of market research services, specializing in Qualitative, Quantitative, and Online Research.<br/>

Our mission is to help businesses gain a competitive advantage by embracing digital transformation and utilizing cutting-edge technologies in market research. We conduct surveys and polls across various sectors, such as public affairs, consumer products, and brand perceptions. With a global pool of diverse respondents, we ensure a broad spectrum of opinions and insights on important topics. <br/>

Joining our research panel is free for individuals aged 18 and above, allowing us to collect valuable data that supports businesses in making well-informed decisions.<br/>

At Simplified Knowledge MR Partners, we are dedicated to delivering actionable insights that help our clients stay ahead in a rapidly changing market.<br/>
        </>
    )
    },
    {
        question: "Who can I contact for business-related inquiries?",
        answer: "For business-related queries, please reach out to us at: sales@sk-mrpartners.com."
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
      
  ];

  // Function to toggle the open index
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4"style={{color:'#576FFF'}}>Frequently Asked Question</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <h5  
            className="faq-question d-flex align-items-center" 
            onClick={() => toggleFAQ(index)} 
            style={{ cursor: 'pointer', fontSize: '1.2rem', // For subheadings
              
              cursor: 'pointer' }}
          >
            {faq.question}
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className={`ms-auto transition-transform ${openIndex === index ? 'rotate' : ''}`} 
              style={{ width: '20px', height: '20px' }} 
            />
          </h5>
          {openIndex === index && (
            <div className="faq-answer">
                <p style={{ fontSize: '1.1rem' }}>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
    </div>

<Footer/>
    </>
  );
};

export default Faq;
