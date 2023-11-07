import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    job_title,
    deadline,
    maximum_price,
    minimum_price,
    description,
    icon,
  } = job;
  console.log(job);
  return (
    <div className="bg-base-200">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <div className="w-1/4 flex justify-center items-center">
            <img src={icon} className="w-1/2 rounded-lg shadow-2xl" />
          </div>
          <div className="w-2/3">
            <h1 className="text-5xl font-bold">{job_title}</h1>
            <p className="my-2">
              Price Range: ${maximum_price}~${minimum_price}
            </p>
            <p className="my-2 text-red-600">Deadline: {deadline}</p>
            <p className="pt-6">{description}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-semibold pt-10">Your Bid Form</h2>
        <div className="pt-10 pb-20">
          <div className="flex justify-center gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="Buyer Email"
                readOnly
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
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
              placeholder={'$'+maximum_price+'~$'+minimum_price}
              className="input input-bordered w-full max-w-xs"
               />
            </div>
          </div>
          <div className="flex justify-center gap-5 my-5">
            <button className="bg-[#007456] hover:bg-[#2c8e74] text-white font-semibold w-[52vw] py-2 rounded-lg">
              Bid ON THE PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
