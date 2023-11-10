import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";




const Resister = () => {
  const [loginErr,setLoginErr]=useState();
  const { createUser,updateUser,logOut } = useContext(AuthContext);
  // const location=useLocation();
  const navigate=useNavigate();
  

  const handleResister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name=form.get('name');
    const email = form.get("email");
    const password = form.get("password");
    const photoURL=form.get('photoURL')

    console.log(name,email,password,photoURL)

    setLoginErr("");

    if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
      setLoginErr('password must have contain Minimum eight characters, at least one capital letter, one number and one special character:');
      return;
   }
    
    // create user with email & password

     createUser(email,password)
    .then(result=>{
      const user=result.user
      console.log(user);
      
      // navigate(location?.state?location.state:'/');
      
      updateUser(user,name,photoURL);
      logOut();
      Swal.fire('Resister is Successfull!')
      navigate("/login")
    })
    .catch(error=>{
      console.log(error);
      setLoginErr(error.message);
    })

  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleResister} className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Please Resister
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL"
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
            <button className="btn text-white bg-[#007456] hover:bg-[rgb(21,148,114)]">Resister</button>
          </div>
          <p className="text-center">Already have an account? Please <Link to='/login'><span className="font-semibold text-[#007456] underline">Log In</span></Link></p>
        </form>
      </div>
    </div>
  );
};

export default Resister;
