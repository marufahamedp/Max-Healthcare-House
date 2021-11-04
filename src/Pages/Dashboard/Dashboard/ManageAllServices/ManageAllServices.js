import React from 'react';
import ManageServices from '../../ManageServices/ManageServices';

const ManageAllServices = (props) => {
    const {services} = props;
   ;
    return (
        <div>
             <h1 className="nav-title text-center my-4 pb-3 fw-bold">Manage Services</h1>
            
            {
                services?.map(service=> <ManageServices
                    service={service}
                ></ManageServices>)
            }
        </div>
    );
};

export default ManageAllServices;