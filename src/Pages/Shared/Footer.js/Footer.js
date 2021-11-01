import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import FooterNavBar from './FooterNavBar/FooterNavBar';
import FooterServices from './FooterServices/FooterServices';

const Footer = (props) => {
  const {services} = props;
    return (
        <div>
    <footer className="bg-dark pt-4">
        <div className="container">
            <div className="row text-light">
                <div className="col-lg-4">
                    <h3 className="border-bottom border-2 pb-2">About</h3>
                    <ul className="list-group list-group-flush mt-lg-4">
                        <li className="list-group-item  bg-dark text-light border-bottom mb-2"><i className="fas fa-location-arrow"></i>  73 Canal Street, New York, NY</li>
                        <li className="list-group-item  bg-dark text-light border-bottom mb-2"><i className="fas fa-phone-alt"></i> +8801315560101</li>
                        <li className="list-group-item  bg-dark text-light border-bottom mb-2"><i className="fas fa-mobile-alt"></i> +8801976781492</li>
                        <li className="list-group-item  bg-dark text-light mb-2"><i className="fas fa-envelope"></i> marufledp.info@gmail.com</li>
                    </ul>
                    <div className="icons mt-3">
                        <a className="max-footer-icon fs-1 me-3" href="https://www.facebook.com/maruf.ahamed.pro/"  target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a className="max-footer-icon fs-1 me-3" href="https://twitter.com/DeveloperMaruf1" target="_blank"><i className="fab fa-twitter-square"></i></a>
                        <a className="max-footer-icon fs-1 me-3" href="https://www.instagram.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                <h3 className="border-bottom border-3 boerder-secondery pb-2">Services</h3>
                  {
                     
                      services.slice(2).map(service=><FooterServices
                      key={service.id}
                        service={service}
                      ></FooterServices>)
                    
                  }
                    
                </div>
                <div className="col-lg-4">
                    <h3 className="border-bottom border-3 boerder-secondery pb-2">Opening Hours</h3>
                    <div className="mt-lg-4">
                        <table className="table table table-dark table-hover">
                            <tbody>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Monday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Tuesday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Wednesday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Thursday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Friday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Saturday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                              <tr>
                                <td><i className="far fa-clock"></i> &nbsp;  Sunday</td>
                                <td></td>
                                <td className="text-end">8:00 AM - 9:00 PM</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
            <FooterNavBar></FooterNavBar>
        </div>
    </footer>
        </div>
    );
};

export default Footer;