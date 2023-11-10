import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate()


  const handleAddJob=(e)=>{
    e.preventDefault();
    const form=e.target;
    const employer=form.employer.value;
    const job_title=form.job_title.value;
    const category=form.category.value;
    const minimum_price=form.minimum_price.value;
    const maximum_price=form.maximum_price.value;
    const icon=form.icon.value;
    const description=form.description.value;
    const job={
        employer,icon,job_title,category,minimum_price,maximum_price,description
    }
    console.log(job)

    fetch('https://online-job-portal-server.vercel.app/addJob',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(job)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success("Job added successfully",{
        onClose:()=> navigate(`/postedJobs/${user?.email}`)
      })
    })

  }

  return (
    <form onSubmit={handleAddJob}>
      <div className="flex justify-center gap-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email of the employer</span>
          </label>
          <input
            type="email"
            name="employer"
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
            placeholder="Type here deadline"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" id="" className="border py-3 rounded-lg px-2">
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphic Design">Graphic Design</option>
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
            placeholder="Write here"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
           <input type="submit" value='Add Job' className="bg-[#007456] w-[52vw] py-2 rounded-lg text-white font-bold"></input>
      </div>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default AddJob;
