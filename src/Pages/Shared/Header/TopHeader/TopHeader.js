import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import './TopHeader.css';
import logo from '../../../../Images/logo.png';
const callIcon = <FontAwesomeIcon icon={faPhoneAlt} />
const wheelchair = <FontAwesomeIcon icon={faWheelchair} />
const TopHeader = () => {
    return (
       <div className="">
            <div className="d-none d-lg-block container">
            <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex justify-content-center align-items-center">
                <div className="icon-background d-flex justify-content-center align-items-center">
                    <span className="top-header-icon">{callIcon}</span>
                </div>
                <div className="fw-bold ms-3">
                    <small className="text">Call us for any question</small>
                    <h4 className="text-number fw-bold">+8801315560101</h4>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                    <img src={logo} alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="fw-bold me-3">
                    <small className="text">Call us for any question</small>
                    <h4 className="text-number fw-bold">Download Now</h4>
                </div>
                <div className="icon-background d-flex justify-content-center align-items-center">
                    <span className="top-header-icon">{wheelchair}</span>
                </div>
            </div>
        </div>
        </div>
       </div>
    );
};

export default TopHeader;