import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:5000/healthServices', data)
    .then(res => {
        if (data.servicesTitle) {
            alert('data inserted');
            reset();
        }
    })  
   };
    return (
        <div>
            <div className="my-4">
                <h1 className="nav-title text-center pb-3">Add New Services</h1>
            </div>
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
           <div className="row">
               <div className="col-lg-8">
                   <label htmlFor="servicesTitle">Service Title</label>
               <input className="inputForm mb-4 d-block" {...register("servicesTitle", { required: true })} />
                   <label htmlFor="simpleTitle">Simple Title</label>
               <input className="inputForm mb-4 d-block" {...register("simpleTitle", { required: true })} />
                   <label htmlFor="simplleDiscription">Simple Discription</label>
               <textarea rows="4" className="inputForm mb-4 d-block" {...register("simplleDiscription", { required: true })} />
                   <label htmlFor="details">Description</label>
               <textarea rows="5" className="inputForm mb-4 d-block" {...register("details", { required: true })} />

               <label htmlFor="icon">Image Icon URL For Home Page Img</label>
               <input className="inputForm mb-4 d-block" {...register("icon", { required: true })} />

             

              
               </div>
               <div className="col-lg-4">
               <label htmlFor="image">Image URL For Services Page</label>
               <input className="inputForm mb-4 d-block" {...register("image", { required: true })} />
               <label htmlFor="image2">Services Details Image URL</label>
               <input className="inputForm mb-4 d-block" {...register("image2", { required: true })} />
            
               <label htmlFor="buletPointTitle">Bulet Point Title</label>
            <input className="inputForm mb-4 d-block" {...register("buletPointTitle")} />
            <label htmlFor="buletPoint1">Bulet Point One</label>
            <input className="inputForm mb-4 d-block" {...register("buletPoint1")} />
            <label htmlFor="buletPoint2">Bulet Point Two</label>
            <input className="inputForm mb-4 d-block" {...register("buletPoint2")} />
            <label htmlFor="buletPoint3">Bulet Point three</label>
            <input className="inputForm mb-4 d-block" {...register("buletPoint3")} />
            <label htmlFor="buletPoint4">Bulet Point Four</label>
            <input className="inputForm mb-4 d-block" {...register("buletPoint4")} />
            <label htmlFor="buletPoint5">Bulet Point Five</label>
            <input className="inputForm mb-4 d-block" {...register("buletPoint5")} />
               <div className="d-flex justify-content-center my-4">
               <input className=" d-block max-btn" type="submit" />
               </div>
               </div>
           </div>
            </form>
            </div>
        </div>
    );
};

export default AddServices;