import React from 'react';
import { Accordion, Carousel, Col, Row } from 'react-bootstrap';
import image1 from '../../../Images/advancedcare.jpg'
import image2 from '../../../Images/hospitaltohomecare.jpg'
import image3 from '../../../Images/specializedcare.jpg'
import './OurHospital.css'
const OurHospital = () => {
  return (
    <div>
      <div className="my-lg-5">
        <h1 className="text-center fw-bold">Our Best Services</h1>
      </div>
      <div className="container">
        <Row>

          {/* for Accordion */}

          <Col lg={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="accordion-max">
                <div>
                  <Accordion.Header> <span className="text-dark fw-bold">01. Care from home health aides</span> </Accordion.Header>
                </div>
                <Accordion.Body>
                  We send a doctor to visit the patient at home to diagnose and treat the illnesses. He or she may also periodically review the home health care needs.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="accordion-max">
                <Accordion.Header><span className="text-dark fw-bold">02. Homemaker or basic assistance</span></Accordion.Header>
                <Accordion.Body>
                  The most common form of home health care. It is a type of nursing care that depends on the individual needs. Through consultation with the doctor, a registered nurse will set up a plan of care.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="accordion-max">
                <Accordion.Header><span className="text-dark fw-bold">03. Laboratory and X-ray imaging</span></Accordion.Header>
                <Accordion.Body>
                  Provide patients with help on relearning how to perform daily duties or improve their speech after a severe illness or injury.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="accordion-max">
                <Accordion.Header><span className="text-dark fw-bold">04. Physical / occupational therapy</span></Accordion.Header>
                <Accordion.Body>
                  Medical social workers provide various services to the patient, including counseling and locating community resources to help the patient in his or her recovery.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

        {/* for Carousel */}

          <Col lg={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurHospital;