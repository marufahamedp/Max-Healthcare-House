import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SmoothList from 'react-smooth-list';
import './HomePageService.css'
const HomePageService = (props) => {
    const {id, servicesTitle, details, icon} = props.service;
    console.log(id);

    return (
        // for home page service

        <SmoothList>
            <div>
            <Col className="">
          <Card className="border-0 column py-lg-5 py-3">
            <div className="text-center">
            <Card.Img className="card-image " variant="top" src={icon}/>
            </div>
            <Card.Body  className="text-center">
              <Card.Title className="cardTitle">{servicesTitle}</Card.Title>
              <Card.Text className="my-lg-4 p-text-color fw-bold py-lg-2">
               {details.slice(0, 80)}....
              </Card.Text>
              <Card.Text className="mt-lg-4">
              <Link to={`/service/${id}`} className="max-btn">Read More</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
        </SmoothList>
    );
};

export default HomePageService;