/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WebDev = ({ job }) => {
    const {_id,deadline,description,icon,job_title,maximum_price,minimum_price}=job
  // console.log(job);
  return (
    <div className="card card-compact bg-base-200 shadow-xl p-3">
      <figure>
        <img
        className="w-full md:w-1/2 py-3"
          src={icon}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{job_title}</h2>
        <div className="text-lg">
            <h2>Price Range: ${maximum_price+'~$'+minimum_price}</h2>
            <h2>Deadline:{deadline}</h2>
        </div>
        <div>{description.slice(0,100)}  ...</div>
          <Link to={`/jobs/${_id}`}>
        <div className="card-actions justify-center pt-3">
          <button className="btn text-white bg-[#007456] hover:bg-[rgb(21,148,114)]  w-1/2 ">Bid Now</button>
        </div>
          </Link>
      </div>
    </div>
  );
};

export default WebDev;
