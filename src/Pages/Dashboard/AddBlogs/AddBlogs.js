import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddBlogs = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        axios.post('http://localhost:5000/blogs', data)
        .then(res => {
            if (data.title) {
                alert('data inserted');
                reset();
            }
        }) 
    };
    return (
        <div className="container">
            <h1 className="nav-title text-center my-4 pb-3 fw-bold">Add New Blogs</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Blog Titile</label>
      <input className="w-100 mb-3" {...register("title", { required: true})} />
      <label htmlFor="">Blog Discription</label>
      <textarea rows="5" className="w-100 mb-3" {...register("description", {required: true})} />
      <label htmlFor="">Blog Image URL</label>
      <input className="w-100 mb-3" {...register("image", { required: true})} />
    
      <div className="text-center my-4">
      <input className="max-btn" type="submit" />
      </div>
    </form>
        </div>
    );
};

export default AddBlogs;