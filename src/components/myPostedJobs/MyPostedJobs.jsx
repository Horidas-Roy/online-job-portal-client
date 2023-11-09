import { useLoaderData } from "react-router-dom";
import MypostedJobCard from "./MypostedJobCard";
import { useState } from "react";

const MyPostedJobs = () => {
    const jobsItem=useLoaderData();
    const [jobs,setJobs]=useState(jobsItem);
    console.log(jobs)
    const handleUpdatePostJob=(id)=>{
             console.log('upadte',id)
    }
    const handleDeleteJobs=(id)=>{
        console.log('delete',id)
        fetch(`https://online-job-portal-server.vercel.app/deleteJob/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const resmaining=jobs.filter(job=>job._id !== id)
            setJobs(resmaining)
        })
    }
    return (
        <div>
            <h2 className="text-3xl my-5 font-bold text-center">My Posted Job:{jobs.length}</h2>
            <div className="grid grid-cols-2 px-5 gap-10 py-10">
            {
                jobs.map(job=><MypostedJobCard
                key={job._id}
                job={job}
                handleUpdatePostJob={handleUpdatePostJob}
                handleDeleteJobs={handleDeleteJobs}
                ></MypostedJobCard>)
            }
            </div>
        </div>
    );
};

export default MyPostedJobs;