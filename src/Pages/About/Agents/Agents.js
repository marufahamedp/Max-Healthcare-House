import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleAgent from '../SingleAgent/SingleAgent';

const Agent = () => {
    const agents = [
        {
            "id": "1",
            "name": "Shah M Nawaz",
            "title": "Real Estate Agent",
            "image": "https://i.ibb.co/Zx4sPVt/Shah-MNawaz.jpg"
        },
        {
            "id": "2",
            "name": "Eva Sharlin",
            "title": "Real Estate Broker",
            "image": "https://i.ibb.co/3p2wfTq/Eva-Sharlin.jpg"
        },
        {
            "id": "3",
            "name": "Robin Patrick",
            "title": "Real Estate Broker",
            "image": "https://i.ibb.co/h2G8mLy/Robin-Patrick.jpg"
        },
        {
            "id": "4",
            "name": "Sarmin Tabassum",
            "title": "Real Estate Agent",
            "image": "https://i.ibb.co/Z21SqWT/Sarmin-Tabassum.jpg"
        }
    ]
    return (
        <div className="container my-5 text-center">
            <h3 className="mb-4">Our Agents</h3>
            <p className="mb-4">Sheltek is the best theme for elit, sed do eiusmod tempor dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    agents.map(agent => <SingleAgent agent={agent}></SingleAgent>)
                }
            </div>

            <div className="text-center my-5">
                <Link to="agents">
                    <button className="btn btn-dark">See Our Agents</button>
                </Link>
            </div>

        </div>
      
    );
};

export default Agent;