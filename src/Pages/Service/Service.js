import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Service.css'
const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
const Service = (props) => {
    const {_id, servicesTitle, details, image2} = props.service;
    return (
        <SmoothList>
            <div>
            <Col className="">
          <Card className="border-0 column">
            <div className="text-center services-container">
            <Link to={`/service/${_id}`}><Card.Img className="services-img" variant="top" src={image2}/></Link>
            <div className="read-more-arrow">
            <div className="d-flex justify-content-center align-items-center">
            <Link to={`/service/${_id}`} className="arrow-background text-decoration-none d-flex justify-content-center align-items-center">
            <span className="arrow-icon">{arrowIcon}</span>
            </Link>
            </div>
            </div>
            </div>
            <Card.Body  className="text-center mt-3">
              <Card.Title className="cardTitle"><h2 className="fw-bold">{servicesTitle}</h2></Card.Title>
              <Card.Text className="my-lg-2 p-text-color fw-bold py-lg-2">
               {details.slice(0, 80)}....
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
        </SmoothList>
    );
};

export default Service;