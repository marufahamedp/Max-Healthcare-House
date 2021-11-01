import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterNavBar.css'
const FooterNavBar = () => {
    return (
        <div className="a">
            <p className="text-light d-lg-none text-center pb-3 mb-0">Max Health © 2021. All rights reserved.</p>
            <div className="d-none d-lg-block">
            <Navbar variant="dark">
                <p className="text-light">Max Health © 2021. All rights reserved.</p>
            <Nav className="max-nav-all ms-auto ">
                            <Nav.Link as={Link} className="nav-links-max nav-title me-lg-3" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-links-max nav-title me-lg-3" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="nav-links-max nav-title me-lg-3" to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} className="nav-links-max nav-title me-lg-3" to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} className="nav-links-max nav-title me-lg-3" to="/contact">Contact Us</Nav.Link>
                        </Nav>
            </Navbar>
        </div>
        </div>
    );
};

export default FooterNavBar;