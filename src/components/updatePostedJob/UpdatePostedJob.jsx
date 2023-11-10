import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdatePostedJob = () => {
    
    const jobItem=useLoaderData();
    const [job,setJob]=useState(jobItem)
    const {user}=useContext(AuthContext);

    const handleUpdateJob=(e)=>{
        e.preventDefault();
        const form=e.target;
        const employer=form.employer.value;
        const job_title=form.job_title.value;
        const category=form.category.value;
        const minimum_price=form.minimum_price.value;
        const maximum_price=form.maximum_price.value;
        const icon=form.icon.value;
        const description=form.description.value;
        const UpdateJob={
            employer,icon,job_title,category,minimum_price,maximum_price,description
        }
         
        fetch(`http://localhost:5000/updateJob/${job._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdateJob)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount>0){
              setJob(UpdateJob);
                toast("Job Updated Successfully");
            }
        })
      }
    return (
        <form onSubmit={handleUpdateJob}>
      <div className="flex justify-center gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email of the employer</span>
          </label>
          <input
            type="email"
            name="employer"
            readOnly
            defaultValue={user?.email}
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
            name='job_title'
            defaultValue={job?.job_title}
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
            type="date"
            name="deadline"
            defaultValue={job?.deadline}
            placeholder="Type here deadline"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" defaultValue={job?.category} id="" className="border py-3 rounded-lg px-2">
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphics Design">Graphics Design</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Minimum price($)</span>
          </label>
          <input
            type="text"
            name="minimum_price"
            defaultValue={job?.minimum_price}
            placeholder="Type here Minimum price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Maximum price($)</span>
          </label>          <input
            type="text"
            name="maximum_price"
            defaultValue={job?.maximum_price}
            placeholder="Type here Maximum price"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
          type="text"
            className="input input-bordered w-[51vw]"
            name="icon"
            defaultValue={job?.icon}
            placeholder="photoURL of this post"
          ></input>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-[52vw]"
            name="description"
            defaultValue={job?.description}
            placeholder="Write here"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
           <input type="submit" value='Update Job' className="bg-[#007456] w-[52vw] py-2 text-white hover:bg-[#239375] rounded-lg"></input>
      </div>
      <ToastContainer></ToastContainer>
    </form>
    );
};

export default UpdatePostedJob;