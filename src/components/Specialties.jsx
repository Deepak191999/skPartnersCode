import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Specialties = () => {
  const specialties = [
    'Consumer Collaboration',
    'Brand Innovation',
    'Consumer Insights',
    'Customer Products',
    'Customer Strategy',
    'Customer Experience',
    'Open Innovation',
    'Data & Analytics',
    'UX Design and Testing',
    'Activation Workshops',
    'Online Communities',
    'Qualitative Research',
    'Segmentation',
    'NPD (New Product Development)',
    'Co-creation',
    'Insights',
    'Foresight',
    'CX (Customer Experience)',
    'Market Research',
    'Ethnography',
    'Focus Groups',
    'Consultancy',
    'CATI (Computer-Aided Telephone Interviewing)',
    'CAWI (Computer-Aided Web Interviewing)',
    'IDIs (In-Depth Interviews)',
    'F2F (Face-to-Face)',
    'IHUT (In-Home Use Testing)',
    'CLT (Central Location Testing)',
    'Mystery Shopping',
    'Behavioral Research',
    'Translation',
    'Transcription',
    'Survey Programming',
    'Questionnaire Design',
    'Data Processing',
    'In-Store Video Making of Any Products in Local and English Languages',
  ];

  return (
  
    <Container className="my-5">
      
      <h1
                className="text-center display-5 mb-4 "
                style={{
                  color: "#576FFF",
                  fontSize: "2.5rem", // For main headings
                  fontWeight: "bold",
                }}
              >
               Our Specialties
              </h1>
      <Row >
        <Col>
          <ul>
            {specialties.slice(0, 9).map((specialty, index) => (
              <li style={{ fontSize: '1.1rem' }} className='mt-2' key={index}>{specialty}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <ul>
            {specialties.slice(9, 18).map((specialty, index) => (
              <li style={{ fontSize: '1.1rem' }} className='mt-2' key={index}>{specialty}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <ul>
            {specialties.slice(18, 27).map((specialty, index) => (
              <li style={{ fontSize: '1.1rem' }} className='mt-2' key={index}>{specialty}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <ul>
            {specialties.slice(27, 36).map((specialty, index) => (
              <li style={{ fontSize: '1.1rem' }} className='mt-2' key={index}>{specialty}</li>
            ))}
          </ul>
        </Col>
      </Row>
    
    </Container>
  );
};

export default Specialties;