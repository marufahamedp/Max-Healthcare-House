import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hook/useAuth';
import logo from '../../../../Images/logo.png';
import './PrimaryHeader.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const historyIcon = <FontAwesomeIcon icon={faHistory} />
const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
const PrimaryHeader = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="mt-lg-3">
            <Navbar collapseOnSelect expand="lg" bg="" variant="light" className="container">
                    <Navbar.Brand href="/" className="d-lg-none">
                        <img src={logo} alt="" width="150" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="max-nav-contain responsive-navbar-nav">
                        <Nav className="max-nav-all me-auto">
                            <Nav.Link as={Link} className="nav-title me-lg-3" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="nav-title me-lg-3" to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} className="nav-title me-lg-3" to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} className="nav-title me-lg-3" to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} className="nav-title me-lg-3" to="/contact">Contact Us</Nav.Link>
                        </Nav>

                    {/* if there is no user */}

                        {
                            !user.email && <Nav>
                                <Nav.Link as={Link} to="/login" className="">
                                    <button className=" max-btn-b">Log In</button>
                                </Nav.Link>
                                <Nav.Link eventKey={2} as={Link} to="/register" className="">
                                    <button className="max-btn">Register</button>
                                </Nav.Link>
                            </Nav>
                        }

                            {/* if there is user */}

                        {
                            user.email && <Nav className=" d-flex justify-content-between align-items-center">
                                <div >
                                    <span></span>
                                </div>
                                <div className="nav-title">
                                <NavDropdown  title={user.displayName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="active-changed text-center" disabled>
                                    <img className="rounded-circle" src={user.photoURL} alt="" width="50px"/>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="text-center nav-title" href="#action/3.2" disabled>
                                    {user.displayName}
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="active-changed text-center" href="#action/3.2">
                                        View Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className="active-changed text-center" href="#action/3.3">{historyIcon} Order History</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="active-changed text-dark text-center" as={Link} to="/login" onClick={logOut} >
                                    {logOutIcon} Log Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                                </div>
                                <Nav.Link eventKey={2} as={Link} to="/login" className="">
                                    <button className="max-btn" onClick={logOut}>Log Out</button>
                                </Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
              
            </Navbar>
        </div>
    );
};

export default PrimaryHeader;