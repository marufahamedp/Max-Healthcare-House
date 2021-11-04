import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
const ReadMorePosts = () => {

    // for get the post

    const { user } = useAuth();
    const { blogId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    const { id, image, title, description } = post;




    // for comments section

    const getTheElement = document.getElementById('newComments');
    const inputvalues = document.getElementById('inputvalue');
    const handelSend = () => {

        const div = document.createElement('div');
        div.className = "my-3 border border-2 p-2 rounded"
        div.innerHTML = `
                <img src=${user.photoURL} class="rounded-circle" width= "50px"/>
                ${inputvalues.value}
                `;
        getTheElement.appendChild(div);
        inputvalues.value='';
    }


    return (
        <div className="container">

            {/* for posts */}

            <div className="text-center">
                <h3 className="text-center nav-title pb-2">{title}</h3>
                <img className="my-4" width="400px" src={image} alt="" />
            </div>
            <p>{description}</p>

            {/* for comment box */}

            <div className="a">
                <label className="mb-2" htmlFor="comments :">Comments</label> <br />
                <InputGroup>
                    <img src={user.photoURL} className="rounded-circle me-2" width="50px" alt="" />
                    <FormControl
                        type="text"
                        placeholder="Your comment"
                        aria-label="Input group example"
                        aria-describedby="btnGroupAddon"

                        id="inputvalue"
                    />
                    <InputGroup.Text id="btnGroupAddon" className="send-btn" onClick={handelSend}><span className="send-btn">{sendIcon}</span></InputGroup.Text>
                </InputGroup>
                <hr />
                <div className="my-3">
                    <div id="newComments" className="my-3">
                    </div>
                </div>
            </div>

                {/* for social media */}

            <div className="icons my-3 text-center">
                <h2 className="fw-bold nav-title pb-2">Share On Social Media</h2>
                <a className="max-footer-icon fs-1 me-3" href="https://www.facebook.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a className="max-footer-icon fs-1 me-3" href="https://twitter.com/DeveloperMaruf1" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a className="max-footer-icon fs-1 me-3" href="https://www.instagram.com/maruf.ahamed.pro/" target="_blank"><i className="fab fa-instagram-square"></i></a>
            </div>
        </div>
    );
};

export default ReadMorePosts;