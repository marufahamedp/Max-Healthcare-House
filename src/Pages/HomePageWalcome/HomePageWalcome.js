import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Appointment from './Appointment/Appointment';
import './HomePageWalcome.css'
const HomePageWalcome = () => {
    return (
        <div className="container mt-5">
            <Row>
                <Col lg={8}>
                    <div className="a">
                        <div className="a">
                            <h1 className="fw-bold">WELCOME TO <span className="welcome-max">MAX HEALTH</span></h1>
                            <p className="p-text-color">
                                By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home. <br /> <br />
                                We've combined a new kind of doctor's experience that blends the highest level of health care with exceptional service. People can enroll membership by paying only an annual membership fee of just $129.</p>
                        </div>
                        <Row className="b">
                            <Col lg={6}>
                                <div className="openAndEmer p-3 d-flex justify-content-center align-items-center">
                                    <div className="openAndEmer-icon text-light me-2 pe-2">
                                        <i className="fas fa-history"></i>
                                    </div>
                                    <div className="openAndEmer-text">
                                        <h3 className="text-dark fw-bold">OPENING <span className="text-light">HOURS</span></h3>
                                        <p className="text-light">Monday - Friday 9am - 10pm <br /> Sunday Closed</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="openAndEmer p-3 d-flex justify-content-center align-items-center">
                                    <div className="openAndEmer-icon text-light me-2 pe-2">
                                        <i className="fas fa-ambulance"></i>
                                    </div>
                                    <div className="openAndEmer-text">
                                        <h3 className="text-dark fw-bold">EMERGNCY
                                            <span className="text-light"> CASE</span></h3>
                                        <p className="text-light">+(012) 345 6789 <br />
                                            Call us now for quick help</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4}>
                    <Appointment></Appointment>
                </Col>
            </Row>
        </div>
    );
};

export default HomePageWalcome;