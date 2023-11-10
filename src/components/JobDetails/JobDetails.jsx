/* eslint-disable no-dupe-keys */
import { useContext } from "react";
import {  Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const job = useLoaderData();
  const navigate=useNavigate()
  
  const {
    job_title,
    deadline,
    maximum_price,
    minimum_price,
    description,
    employer,
    icon,
  } = job;
  console.log(job);


  const handleProjectBit = (e) => {
    e.preventDefault();
    const form = e.target;
    const employer = form.employer.value;
    const applicant = form.applicant.value;
    const deadline = form.deadline.value;
    const price = form.price.value;
    const status='pending'
    const bid={
      employer,applicant,deadline,price,status,job_title,status
    }
    console.log(bid);
    fetch('http://localhost:5000/bids',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bid)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success("BID ON THIS PROJECT IS SUCCESSFULL!",{
        onClose:()=>{
          return  navigate(`/myBids/${user?.email}`)
        }
      })
      
    })

  };

  return (
    <div className="bg-base-200">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="w-1/2 md:w-1/4 flex flex-col md:flex-row justify-center items-center">
            <img src={icon} className="w-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className="w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold">{job_title}</h1>
            <p className="my-2">
              Price Range: ${maximum_price}~${minimum_price}
            </p>
            <p className="my-2 text-red-600">Deadline: {deadline}</p>
            <p className="pt-6">{description}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleProjectBit} className="text-center">
        <h2 className="text-4xl font-semibold pt-10">Your Bid Form</h2>
        <div className="pt-10 pb-20">
          <div className="flex flex-col md:flex-row justify-center px-5 gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="applicant"
                defaultValue={user?.email}
                placeholder="Your Email"
                readOnly
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <input
                type="text"
                name="employer"
                defaultValue={employer}
                placeholder="Buyer Email"
                readOnly
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center px-5 gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                required
                placeholder="Type here deadline"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price $</span>
              </label>
              <input
                type="text"
                name="price"
                required
                placeholder={"$" + maximum_price + "~$" + minimum_price}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 my-5">
            <input
              type="submit"
              disabled={user?.email === employer}
              value="Bid ON THE PROJECT"
              className={`bg-[#007456] hover:bg-[#2c8e74] ${
                user?.email === employer && "bg-[#73d2b8] hover:bg-[#73d2b8]"
              }  text-white font-semibold w-[52vw] py-2 rounded-lg`}
            ></input>
          </div>
        </div>
      <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default JobDetails;
