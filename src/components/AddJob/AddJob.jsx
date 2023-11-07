import React from "react";

const AddJob = () => {
  return (
    <div>
      <div className="flex justify-center gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email of the employer</span>
          </label>
          <input
            type="email"
            placeholder="Type here Email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Job title</span>
          </label>
          <input
            type="text"
            placeholder="Type here Job title"
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
            type="text"
            placeholder="Type here deadline"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="" id="" className="border py-3 rounded-lg px-2">
            <option value="">Web Development</option>
            <option value="">Digital Marketing</option>
            <option value="">Graphics Design</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum price</span>
          </label>
          <input
            type="text"
            placeholder="Type here Minimum price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Maximum price</span>
          </label>          <input
            type="text"
            placeholder="Type here Maximum price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-[52vw]"
            placeholder="Write here"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
           <button className="bg-[#007456] w-[52vw] py-2 rounded-lg">Add Job</button>
      </div>
    </div>
  );
};

export default AddJob;
