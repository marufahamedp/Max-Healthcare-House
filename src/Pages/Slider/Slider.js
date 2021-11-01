import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Doctor from '../../Images/doctor.png'

const playIcon = <FontAwesomeIcon icon={faPlay} />
const Slider = () => {
    return (
        <div className="container-fluid">
          <Row className="bg-bannar">
              <Col lg={6} className="d-flex justify-content-center align-items-center">
                  <div className="a">
                      <h1 className="banner-title">
                          Dedicated <br /> Medicare
                      </h1>
                      <span  className="fs-6 fw-bold d-block my-4 ">Because your health matters the most</span>
                      <div className="d-flex align-items-center">
                      <a href="https://www.youtube.com/" target="_blank" className="play-container d-flex justify-content-center align-items-center">
                        <div className="play-icon">
                        {playIcon}
                        </div>
                      </a>
                      <a href="https://www.youtube.com/" target="_blank" className="ms-3  nav-title fw-bold text-decoration-none">How We Work</a>
                      </div>
                  </div>
              </Col>
              <Col lg={6} className="d-flex justify-content-center align-items-center">
               <img className="img-fluid doctor" src={Doctor} alt="" />
              </Col>
          </Row>
        </div>
    );
};

export default Slider;