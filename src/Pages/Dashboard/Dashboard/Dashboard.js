import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import AddServices from '../AddServices/AddServices';
import ManageServices from '../ManageServices/ManageServices';
import ManageAllServices from './ManageAllServices/ManageAllServices';

const Dashboard = ({services, maxBlog}) => {
    
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6">
                        <div className="border">
                           <div className="p-2 text-center">
                           <h1 className="my-3">Total Services {services.length}</h1>
                            <Link to="/manageallservices" className="btn btn-warning">Manage Services</Link>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="border">
                    <div className="p-2 text-center">
                    <h1 className="my-3">Total Blogs {maxBlog.length}</h1>
                            <Link to="/manageallblogs" className="btn btn-warning">Manage Blogs</Link>
                    </div>
                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;