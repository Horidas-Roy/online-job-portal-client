import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
   
  const [loginErr,setLoginErr]=useState();

  const { logIn, googleSignIn, } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    
    setLoginErr("")

    

    // log in user
    logIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
        Swal.fire('Logged In Successfully!')
      })
      .catch((error) => {
        console.log(error);
        setLoginErr(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
        Swal.fire('Logged In Successfully!')
        
      })
      .catch((error) => {
        console.log(error);
        setLoginErr(error.message);
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleLogIn} className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Please Sign In
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div>
            {
              loginErr && <span className="text-red-600">{loginErr}</span>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#007456] hover:bg-[rgb(21,148,114)]">Log In</button>
          </div>
          <p className="text-center">
            Don't have an accout? Please{" "}
            <Link to="/resister">
              <span className="font-semibold text-[#007456] underline">
                Resister
              </span>
            </Link>
          </p>
          <p className="text-center mt-3">
            <span
              onClick={handleGoogleSignIn}
              className="text-[#007456] font-semibold cursor-pointer underline"
            >
              Sing In with Google
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
