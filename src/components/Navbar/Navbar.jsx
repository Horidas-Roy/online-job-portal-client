import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {  user &&
        <>
           <li>
        <NavLink to={`/postedJobs/${user?.email}`}>My posted jobs</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Add job</NavLink>
      </li>

      <li>
        <NavLink to={`/myBids/${user?.email}`}>My Bids</NavLink>
      </li>
      <li>
        <NavLink to={`/bidsReq/${user?.email}`}>Bid Requests</NavLink>
      </li>
        </>
      }

      {user ? (
        <>
        <li><h2 className="md:hidden">{user?.displayName}</h2></li>
        <li>
          <button onClick={() => logOut()}>LogOut</button>
        </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar w-[95vw] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center border">
          <h2 className="text-2xl font-bold hidden md:flex">Job Portal</h2>
          <img className="py-2 px-4 w-28" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        { user &&
          <div className="flex gap-3 justify-center items-center">
          <h2 className="hidden md:flex">{user?.displayName}</h2>
          <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
        </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
