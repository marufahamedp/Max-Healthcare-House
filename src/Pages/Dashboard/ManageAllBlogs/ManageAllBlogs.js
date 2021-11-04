import React from 'react';
import ManageBlogs from '../ManageBlogs/ManageBlogs';

const ManageAllBlogs = ({maxBlog}) => {
    return (
        <div>
            <h1 className="nav-title text-center my-4 pb-3 fw-bold">Manage Blogs</h1>
            
            {
                maxBlog?.map(maxBlogPost=> <ManageBlogs
                    maxBlogPost={maxBlogPost}
                ></ManageBlogs>)
            }
        </div>
    );
};

export default ManageAllBlogs;