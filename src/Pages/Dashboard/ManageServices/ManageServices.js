import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageServices = (props) => {
    const {_id, servicesTitle, image} = props.service;


    const handelDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
         const url =`https://hidden-beach-44419.herokuapp.com/healthServices/${id}`
         fetch(url, {
             method: 'DELETE',
         })
         .then(res => res.json())
         .then(data => {
             if(data.deletedCount > 0){
                 alert('Deleted successfully')

             }
         })
        }
    }

    return (
        <div>
            <div className="container">
                <div className="border mb-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={image} alt="" className="w-50" />
                        
                        </div>
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className=" ">
                                <span className="text-dark">{servicesTitle}</span>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center">{_id}</div>
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="d-flex align-items-center">
                            <Link to="/addservices" className="me-lg-3 btn btn-success">
                                <span className=" d-flex align-items-center"><span className="me-1">Add New</span><i class="fas fa-plus-square fs-2"></i></span>
                            </Link>
                            <Button onClick={()=> handelDelete(_id)} className="btn btn-danger text-light">
                                <span className=" d-flex align-items-center"><span className=" me-1">Delete</span><i class="fas fa-trash fs-2"></i></span>
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;