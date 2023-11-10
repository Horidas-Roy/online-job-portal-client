import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyBidRow from "./MyBidRow";

const MyBids = () => {
    
    const bids=useLoaderData();
    const [status,setStatus]=useState('')
    console.log(bids)
    const handleComplete=(status)=>{
      console.log('status',status)
      setStatus('complete');
    //   fetch(`http://localhost:5000/acceptStatus/${id}`,{
    //      method:'PUT',
    //      headers:{
    //       'content-type':'application/json'
    //      },
    //      body:JSON.stringify({status})
    //  })
    //  .then(res=>res.json())
    //  .then(data=>{
    //   console.log(data)
    //  })
  }
   
  useEffect(()=>{
    if(status){
      setStatus(status)
    }
  },[status])

  return (
    <div className="overflow-x-auto px-20 py-10">
      <table className="table table-xs">
        <thead className="text-xl">
          <tr>
            <th></th>
            <th>Job title</th>
            <th> Email</th>
            <th>Deadline</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            bids.map((bid,idx)=><MyBidRow
             key={idx}
             bid={bid}
             idx={idx}
             status={status}
             setStatus={setStatus}
             handleComplete={handleComplete}
            ></MyBidRow>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default MyBids;
