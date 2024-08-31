import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Industry.module.css';
import automotive from '../../img/automotive.jpg'
import health from '../../img/healthcare.jpg'
import finance from '../../img/financial.jpg'
import telecom from '../../img/telecom.jpg'
import goods from '../../img/goods.jpg'
import travel from '../../img/travel.jpg'

const industries = [
  { name: 'AUTOMOTIVE', imgSrc: automotive },
  { name: 'FINANCIAL SERVICE', imgSrc:finance },
  { name: 'HEALTHCARE', imgSrc: health},
  { name: 'TELECOM', imgSrc:telecom },
  { name: 'GOODS & SERVICE', imgSrc:goods },
  { name: 'TRAVEL & TOURISM', imgSrc: travel},
  // Add more industries as needed
];

const IndustriesServed = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 fst-italic" style={{fontSize: '40px', marginBottom:'50px'}}>Industries Served</h1>
      <Row className="justify-content-center">
        {industries.map((industry, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className={`shadow-sm ${styles.cardHover}`}>
              <div className={styles.imageContainer}>
                <Card.Img
                  src={industry.imgSrc}
                  alt={industry.name}
                  className={`img-fluid ${styles.cardImage}`}
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title className="mt-3">{industry.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustriesServed;
