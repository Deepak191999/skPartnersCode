import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faProjectDiagram, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './Happyclient.module.css'; // Import CSS module

const Happyclient = () => {
  return (
    <Container className="my-5 justify-content-center">
      <Row className="text-center">
        <Col className="mb-4 col-md-4">
          <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className={`d-flex flex-column align-items-center ${styles.iconWrapper}`}>
                <div className={`${styles.iconCircle} mb-3 fs-3`}>
                  <FontAwesomeIcon icon={faFaceSmile} className={`fa-2x ${styles.iconBlue}`} />
                </div>
                <Card.Title className="display-4 mb-0">
                  <CountUp end={30} duration={2} />
                </Card.Title>
                <Card.Text className='fs-1'style={{color:'#31d1c1'}}>Happy Clients</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4 col-md-4">
          <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className={`d-flex flex-column align-items-center ${styles.iconWrapper}`}>
                <div className={`${styles.iconCircle} mb-3 fs-3`}>
                  <FontAwesomeIcon icon={faProjectDiagram} className={`fa-2x ${styles.iconBlue}`} />
                </div>
                <Card.Title className="display-4 mb-0">
                  <CountUp end={8000} duration={2} />
                </Card.Title>
                <Card.Text className='fs-1'style={{color:'#31d1c1'}}>Projects Delivered</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4 col-md-4">
          <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <Card.Body>
              <div className={`d-flex flex-column align-items-center ${styles.iconWrapper}`}>
                <div className={`${styles.iconCircle} mb-3 fs-3`}>
                  <FontAwesomeIcon icon={faClock} className={`fa-2x ${styles.iconBlue}`} />
                </div>
                <Card.Title className="display-4 mb-0">24/7</Card.Title>
                <Card.Text className='fs-1'style={{color:'#31d1c1'}}>Support Hours</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Happyclient;
