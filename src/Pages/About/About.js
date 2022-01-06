import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../Images/aboutus.png'
import Agent from './Agents/Agents';
const About = () => {
    return (
        <div className="mx-lg-2 fw-bold">
            <h1 className="text-center my-3 nav-title pb-3">ABOUT US</h1>
            <Row>

                {/* For images */}

                <Col lg={6}>
                    <div className="a">
                        <img className="w-100" src={about} alt="" />
                    </div>
                </Col>

            {/* for details */}

                <Col lg={6}>
                    <div className="a">
                        <p className="p-text-color">ABOUT US</p>
                        <h1 className="fw-bold my-lg-3">We established <br /> cooperation with various <br /> global partners.
                        </h1>
                        <p className="p-text-color  my-lg-5">
                        We've combined a new kind of doctor's experience that blends the highest level of health care with exceptional service. People can enroll membership by paying only an annual membership fee of just $129.
                        </p>
                        <Link to="/about" className="nav-title text-decoration-none pb-2">More About Us</Link>
                    </div>
                </Col>
            </Row>
            <Agent></Agent>
        </div>
    );
};

export default About;