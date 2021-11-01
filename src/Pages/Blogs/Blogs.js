import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Appointment from '../HomePageWalcome/Appointment/Appointment';
import Posts from '../Posts/Posts';
const Blogs = () => {
    const [maxBlog, setBlogs] = useState([]);
    useEffect(()=>{
        fetch(`https://marufahamedp.github.io/blogsjson/blogs.json`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
   console.log(maxBlog.length);
    return (
        <Row>
             <h1 className="nav-title text-center fw-bold pb-3 mb-4">Blogs</h1>

             {/* for blog posts */}
             
            <Col lg={8}>
           
            <div>
            {
        maxBlog.map(posts=><Posts
        key={posts.id}
          posts={posts}
        ></Posts>)
      }
        </div>
            </Col>


                {/* for appointment sections */}



            <Col lg={4}>
                <div className="a">
                <Appointment></Appointment>
                </div>
            </Col>
        </Row>
    );
};

export default Blogs;