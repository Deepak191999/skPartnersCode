import React from "react";
import icon1 from "../img/icon/icon-1.png";
import icon2 from "../img/icon/icon-2.png";
import icon3 from "../img/icon/icon-3.png";


import { Container, Row, Col, Card } from 'react-bootstrap';



const Features = () => {
  return (
    <Container className=" justify-content-center">
      <Row className="text-center">
       
<Col className=" col-md-4">
  <Card className="shadow-sm p-3 mb-5 bg-white rounded">
    <Card.Body>
      <div className={`d-flex flex-column align-items-center `}>
        <img src={icon1} alt="Happy Clients Image" className="my-image" />
        <Card.Text className='mt-3 fs-4'style={{color:'#FDB913'}}>Award Winning</Card.Text>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col className=" col-md-4">
  <Card className="shadow-sm p-3 mb-5 bg-white rounded">
    <Card.Body>
      <div className={`d-flex flex-column align-items-center `}>
        <img src={icon2} alt="Happy Clients Image" className="my-image" />
        <Card.Text className='mt-3 fs-4'style={{color:'#FDB913'}}>Professional Staff</Card.Text>
      </div>
    </Card.Body>
  </Card>
</Col>

<Col className="col-md-4">
  <Card className="shadow-sm p-3 mb-5 bg-white rounded">
    <Card.Body>
      <div className={`d-flex flex-column align-items-center `}>
        <img src={icon3} alt="Happy Clients Image" className="my-image" />
        <Card.Text className='mt-3 fs-4'style={{color:'#FDB913'}}>Fair Prices</Card.Text>
      </div>
    </Card.Body>
  </Card>
</Col>


      </Row>
    </Container>
  );
};

export default Features;

