import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import useAuth from "../../hook/useAuth";
import { useHistory, useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const { singInUsingGoogle, user, singInwithEpass, error } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    singInwithEpass(data.email, data.password)
    .then(result => {
      
      if(error){
        history.push(redirect_uri);
      }
        })
  };

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home'
  const handelGooglesingin = () => {
    singInUsingGoogle()
      .then(result => {
          history.push(redirect_uri);
      })
  }

  console.log(user);

  return (
    <div className="mb-lg-5">
                <h1 className="text-center nav-title pb-3 mb-5">Please Log In</h1>
                <h1 className="text-center text-danger">{error}</h1>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div>
          <div className="border border-2 p-4">

        {/* for registration from */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Enter your Email :</label>
                <input id="email" className="form-control" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">Enter your password</label>
                <input id="password" className="form-control" name="password" type="password" placeholder="Password" {...register("password", {
                  required: true,
                })} />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="text-center">
              <input className="max-btn mt-3 w-50" type="submit" />
              </div>
              <div className="text-center mt-4">
                <p>------------------ OR ------------------</p>
              </div>

              <div className="text-center">
                <button onClick={handelGooglesingin} className="btn"><i className="fab fa-google"></i> Log in with Google</button>
              </div>
            </form>
            <div className="text-center">
              <Link className="text-decoration-none">Forgot Password?</Link>
            </div>
          </div>

                {/* for Don't have an account */}

          <div className="border border-2 p-4 text-center mt-3">
            <span className="text-dark">Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;