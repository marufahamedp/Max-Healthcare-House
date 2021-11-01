import React from 'react';
import { Link } from 'react-router-dom';
const FooterServices = (props) => {
    const {servicesTitle} = props.service;
    return (
        <div>
                    <div className="a">
                        <ul className="list-group list-group-flush mt-lg-4">
                            <li className="list-group-item bg-dark text-light d-flex align-items-center"><span className="arrow-icon-footer me-3"><i className="fas fa-sort-up"></i></span><Link className="text-decoration-none text-light" to="/services">{servicesTitle}</Link></li>
                          </ul>
                    </div>
        </div>
    );
};

export default FooterServices;