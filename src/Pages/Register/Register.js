import React from "react";
import { useForm } from "react-hook-form";
import './Register.css'
import logo from '../../Images/register.jpg'
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
const Register = () => {
    const {registration, error, user} = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    registration(data.email, data.password, data.fullname, data.number);
  
  };

  return (
    <div className="my-4 container">
       <h1 className="text-center nav-title pb-3 mb-5">Please Register Then Click Log In</h1>
      <div>
      <div>
      
      <div className="row">
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
        
        {
            error && <h1 className="text-danger border border-2 p-4">{error}</h1>
        }
        {
            !error && <div>
              <h1>Please Register First Then Log In</h1>
              <div className="border border-2 p-4 text-center mt-3">
              <h1 className="mb-4">Registered?</h1> 
            <span className="text-dark"><Link to="/login" className="text-decoration-none max-btn">Log In</Link></span>
          </div>
            </div>
        }
          
        </div>
        <div className="col-lg-4">
        <div  className="border border-2 p-4">

       {/* for registration from */}

          <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
                  <label htmlFor="fullname" className="mb-2 form-label">Enter your full name :</label>
                  <input id="fullname" className="form-control" type="text" placeholder="Full Name" {...register("fullname", { required: true, maxLength: 80 })} />
                  {errors.fullname && <span>This field is required</span>}
                </div>
                <div className="mb-2">
                  <label htmlFor="number" className="form-label">Enter your phone number :</label>
                  <input id="number" className="form-control" type="tel" placeholder="Mobile Number" {...register("number", { required: true, minLength: 6, maxLength: 12 })} />
                  {errors.number && <span>This field is required</span>}
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Enter your Email :</label>
                  <input id="email" className="form-control" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">Enter your password</label>
                  <input id="password" className="form-control" name="password" type="password" placeholder="Password" {...register("password", {
                    required: true
                  })} />
                  {errors.password && <span>This field is required</span>}
                </div>
                <div className="text-center">
                  <input className="max-btn mt-3 w-50" type="submit" />
                </div>
                </form>
        </div>


                  {/* for Already have an account */}

        <div className="border border-2 p-4 text-center mt-3">
            <span className="text-dark">Already have an account? <Link to="/login" className="text-decoration-none">Log In</Link></span>
          </div>
        </div>
      </div>
     
      </div>
      </div>
    </div>
  );
};

export default Register;