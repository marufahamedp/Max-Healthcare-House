import React, { useState,useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import HomePageService from '../HomePageService/HomePageService';
import './HomePageServices.css';

const HomePageServices = (props) => {
  const {services} = props;

  const { isLoading } = useAuth();
  if(isLoading){
    return  <div className="text-center"><Spinner animation="grow" variant="danger" /></div>
}

    return (
        // for home page services
        <div className="a">
          <div className="text-center my-5">
            <h3 className="fw-bold">OUR SERVICES</h3>
            <h1 className="fw-bold my4">Managed heathcare services</h1>
            <p className="fw-bold p-text-color my-4">Upon request, HealSoul Health Services staff will provide instructions for individuals <br /> whose medical conditions need special attention and additional certificates.</p>
          </div>
          <Row xs={1} md={3} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-5">
      {
        services.map(service=><HomePageService
        key={service.id}
          service={service}
        ></HomePageService>)
      }
    </Row>
    <p className="text-center mt-5 p-text-color">Don’t hesitate, contact us for better help and services. <Link className="text-dark" to="/services">Explore all services</Link></p>
        </div>
    );
};

export default HomePageServices;