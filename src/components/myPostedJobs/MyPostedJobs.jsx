// import { useLoaderData } from "react-router-dom";
import MypostedJobCard from "./MypostedJobCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const MyPostedJobs = () => {
  // const jobsItem=useLoaderData();
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(AuthContext);

  const { data: jobItems, isPending } = useQuery({
    queryKey: ["jobItem", user],
    queryFn: async () => {
      const res = await fetch(
        `https://online-job-portal-server.vercel.app/postedJobs?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
    retry: 10,
  });

//   console.log(jobItems);

  useEffect(() => {
    if (jobItems) {
      setJobs(jobItems);
    }
  }, [jobItems]);

  if (isPending) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

//   console.log(jobs);

  const handleDeleteJobs = (id) => {
    console.log("delete", id);
    fetch(`https://online-job-portal-server.vercel.app/deleteJob/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const resmaining = jobs.filter((job) => job._id !== id);
        setJobs(resmaining);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Job Portal || My Post </title>
      </Helmet>
      <h2 className="text-3xl my-5 font-bold text-center">
        My Posted Job:{jobs.length}
      </h2>
      <div className="grid grid-cols-2 px-5 gap-10 py-10">
        {jobs.map((job) => (
          <MypostedJobCard
            key={job._id}
            job={job}
            handleDeleteJobs={handleDeleteJobs}
          ></MypostedJobCard>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
