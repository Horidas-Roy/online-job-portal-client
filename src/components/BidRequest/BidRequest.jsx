import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BidRequest = () => {
    const bids=useLoaderData()
    console.log(bids)
    return (
        <div className="overflow-x-auto px-20 py-10">
      <table className="table table-xs">
        <thead className="text-xl">
          <tr>
            <th></th>
            <th>Job title</th>
            <th> Email</th>
            <th>Deadline</th>
            <th>Price</th>
            <th>Status</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {
            bids.map((bid,idx)=><tr key={bid._id} className="font-bold">
            <th>{idx+1}</th>
            <td>{bid.job_title}</td>
            <td>{bid.applicant}</td>
            <td>{bid.deadline}</td>
            <td>{bid.price}</td>
            <td>{bid.status}</td>
            <td><button 
            disabled={bid.status === 'canceled' || 'complete'}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${bid.status === 'canceled' || 'complete'&& 'bg-[#4f9582] hover:bg-[#4f9582]'}`}>Accept</button></td>
            <td><button 
            disabled={bid.status === 'canceled' || 'complete'}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${bid.status === 'canceled' || 'complete'&& 'bg-[#4f9582] hover:bg-[#4f9582]'}`}>Reject</button></td>
          </tr>)
          }
          
        </tbody>
      </table>
    </div>
    );
};

export default BidRequest;