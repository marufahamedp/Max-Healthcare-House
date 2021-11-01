import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
  const {services} = props;
    return (
        <div className="a">
        <div className="text-center">
          <h1 className="fw-bold my-5 nav-title pb-3">OUR SERVICES</h1>
          <h1 className="fw-bold my4">Managed heathcare services</h1>
          <p className="fw-bold p-text-color my-4">Upon request, HealSoul Health Services staff will provide instructions for individuals <br /> whose medical conditions need special attention and additional certificates.</p>
        </div>
        <Row xs={1} md={3} className="g-4 mx-lg-5 px-lg-5 mx-2 mt-5">
    {
      services.map(service=><Service
      key={service.id}
        service={service}
      ></Service>)
    }
  </Row>
      </div>
    );
};

export default Services;