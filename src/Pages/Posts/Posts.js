import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Posts.css'
const Posts = (props) => {
const {id, image, title, description} = props.posts;
    console.log(props);
    return (
        <div className="container mb-4 post-container">
            <div className="d-flex align-items-center p-2 border">
                <Row>
                    <Col lg={4}>
                    <div className="post-img-container">
                    <img className="post-img" width="300px"  src={image} alt="" />
                </div>
                    </Col>
                    <Col lg={8}>
                    <div className="m-4">
                    <h4>{title}</h4>
                    <p>{description.slice(0, 100)}</p>
                    <Link to={`/posts/${id}`} className="max-btn">Read More</Link>
                </div>
                    </Col>
                </Row>
              
                
            </div>
        </div>
    );
};

export default Posts;