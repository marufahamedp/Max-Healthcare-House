import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css'
const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
const Pricing = () => {
    return (
       <div className="mt-5" >
           <div className="fw-bold text-center">
               <p className="p-text-color">PRICING AND PLAN</p>
               <h1 className="fw-bold">A monthly fee. No costly surprises.
</h1>
           </div>
           <div id="maxHalthPriceTable">
            <section>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="maxHealthPricingcard column">
                                <div className="maxHealthPricingheader ">
                                    <div className="maxHealthPricingcontent ">
                                        <div className="maxHelthPricinghead"></div>
                                        <div className="head">
                                            <span>Professional
                                            </span>
                                        </div>
                                    </div>
                                    <div className="maxHelthPrice">
                                        <span className="price">
                                            <span className="currency">$90</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="maxHelthFeatures  px-1">
                                    <ul>
                                        <li><span>{checkIcon}</span> Monthly health check-ups</li>
                                        <li><span>{checkIcon}</span> Early illness diagnoses</li>
                                        <li><span>{checkIcon}</span> Free diet consultation</li>
                                        <li><span>{checkIcon}</span> Custom exercise plans</li>
                                    </ul>
                                </div>
                                <div className="my-3">
                                    <Link className="max-btn" to="/services">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="maxHealthPricingcard column active ">
                                <div className="maxHealthPricingheader ">
                                    <div className="maxHealthPricingcontent ">
                                        <div className="maxHelthPricinghead"></div>
                                        <div className="head">
                                            <span>Standard</span>
                                        </div>
                                    </div>
                                    <div className="maxHelthPrice ">
                                        <span className="price">
                                        <span className="currency">$50</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="maxHelthFeatures px-1">
                                    <ul>
                                    <li><span>{checkIcon}</span> Monthly health check-ups</li>
                                        <li><span>{checkIcon}</span> Early illness diagnoses</li>
                                        <li><span>{checkIcon}</span> Free diet consultation</li>
                                        <li><span>{checkIcon}</span> Custom exercise plans</li>
                                    </ul>
                                </div>
                                <div className="my-3">
                                    <Link className="max-btn" to="/services">Get Started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="maxHealthPricingcard column">
                                <div className="maxHealthPricingheader ">
                                    <div className="maxHealthPricingcontent ">
                                        <div className="maxHelthPricinghead"></div>
                                        <div className="head">
                                            <span>Basic</span>
                                        </div>
                                    </div>
                                    <div className="maxHelthPrice ">
                                        <span className="price">
                                        <span className="currency">$70</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="maxHelthFeatures px-1">
                                    <ul>
                                    <li><span>{checkIcon}</span> Monthly health check-ups</li>
                                        <li><span>{checkIcon}</span> Early illness diagnoses</li>
                                        <li><span>{checkIcon}</span> Free diet consultation</li>
                                        <li><span>{checkIcon}</span> Custom exercise plans</li>
                                    </ul>
                                </div>
                                <div className="my-3">
                                    <Link className="max-btn" to="/services">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
       </div>
    );
};

export default Pricing;