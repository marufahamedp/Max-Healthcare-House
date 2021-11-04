import React, { useEffect, useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './ReadMoreService.css';
import useAuth from '../../hook/useAuth';
import Pricing from '../Pricing/Pricing';
import { Link } from 'react-router-dom';
const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
const ReadMoreService = () => {

        // for get the post

    const {user} = useAuth();
    const { serviceID } = useParams();
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch(`https://hidden-beach-44419.herokuapp.com/healthServices/${serviceID}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    ;
    const { servicesTitle, simpleTitle, simplleDiscription, details, image, image2, buletPointTitle, buletPoint1, buletPoint2, buletPoint3, buletPoint4, buletPoint5 } = services;

            // for comments section
   
        const getTheElement = document.getElementById('newComments');
        const inputvalues = document.getElementById('inputvalue');
        const handelSend =()=>{

            const div = document.createElement('div');
            div.className="my-3  border border-2 p-2 rounded"
            div.innerHTML=`
            <img src=${user.photoURL} class="rounded-circle" width= "50px"/>
            ${inputvalues.value}
            `;
            getTheElement.appendChild(div);
            inputvalues.value='';
        }
    return (
        <div>
            <Container className="">
                <Row>
                    <Col lg={8}>

                        {/* fot post */}

                        <h1 className="text-center">{servicesTitle}</h1>
                        <img className="w-100 my-4" src={image} alt="" />
                        <p>{details}</p>
                        <h2 className="fw-bold mb-4 mt-5">{buletPointTitle}</h2>
                        <p><span className="check-icon">{checkIcon}</span> {buletPoint1}</p>
                        <p><span className="check-icon">{checkIcon}</span> {buletPoint2}</p>
                        <p><span className="check-icon">{checkIcon}</span> {buletPoint3}</p>
                        <p><span className="check-icon">{checkIcon}</span> {buletPoint4}</p>
                        <p><span className="check-icon">{checkIcon}</span> {buletPoint5}</p>
                        <div className="my-lg-5">
                            <h2>{simpleTitle}</h2>
                            <p className="mt-3">{simplleDiscription}</p>
                        </div>


                        {/* for comment box */}

                        <div >
                            <label className="mb-2" htmlFor="comments :">Comments</label> <br />
                            <InputGroup>
                            <img src={user.photoURL} className="rounded-circle me-2" width="50px" alt="" />
                                <FormControl
                                    type="text"
                                    placeholder="Your comment"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon" 
                                    
                                    id="inputvalue"
                                />
                                <InputGroup.Text id="btnGroupAddon" className="send-btn" onClick={handelSend}><span className="send-btn">{sendIcon}</span></InputGroup.Text>
                            </InputGroup>
                            <hr />
                            <div className="my-3">
                               <div id="newComments" className="my-3">
                               </div>
                            </div>
                        </div>

                                {/* for social media */}

                        <div className="icons my-3 text-center">
                            <h2 className="fw-bold nav-title pb-2">Share On Social Media</h2>
                        <a className="max-footer-icon fs-1 me-3" href="https://www.facebook.com/maruf.ahamed.pro/"  target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a className="max-footer-icon fs-1 me-3" href="https://twitter.com/DeveloperMaruf1" target="_blank"><i className="fab fa-twitter-square"></i></a>
                        <a className="max-footer-icon fs-1 me-3" href="https://www.instagram.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                    </div>
                    </Col>

                        {/* for price card */}

                    <Col lg={4} className="mt-lg-5">
                        <div className="mt-5">
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
                        <div className="my-5">
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
                            <div className="text-center mt-5 ">
                                <Link className="nav-title pb-2 fw-bold" to="/#maxHalthPriceTable">See More offers</Link>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default ReadMoreService;