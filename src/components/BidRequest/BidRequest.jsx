import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import "react-step-progress-bar/styles.css";
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BidRequest = () => {
  const [status,setStatus]=useState()
  // const bids=useLoaderData()
  const [bids,setBids]=useState([])

  const {user}=useContext(AuthContext)

    // console.log(bids);

   const {data:bidItems,isPending}=useQuery({
         queryKey:['bids',user],
         queryFn:async()=>{
             const res=await fetch(`https://online-job-portal-server.vercel.app/bidsReq?email=${user?.email}`)
             const data=await res.json()
             return data
         },
         retry:10
   })

   useEffect(()=>{
    if(bidItems){
       setBids(bidItems)
       setStatus(status)
    }
 },[bidItems,status])

   if(isPending){
      return <span className="loading loading-infinity loading-lg"></span>
   }

     
    const handleAcceptStatus=async(status,id)=>{

      await fetch(`https://online-job-portal-server.vercel.app/status/${id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'in progress'})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
          // setStatus('in progress')
          toast('Accepted')
          // update state
          const remaining= bids.filter(bid=>bid._id !== id)
          const updated = bids.find(bid=>bid._id === id)
          updated.status='in progress'
          const newBids=[updated, ...remaining]
          setBids(newBids)
        }

      })
        
    }

    const handleRejectedStatus=(id)=>{
      console.log('rejected status')
      
       fetch(`https://online-job-portal-server.vercel.app/status/${id}`,{
           method:'PATCH',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify({status:'rejected'})
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
          if(data.modifiedCount>0){
            toast("rejected")
            const remaining=bids.filter(bid=>bid._id !== id)
            const updated=bids.find(bid=>bid._id === id)
            updated.rejected='rejected'
            const newBids=[updated,...remaining]
            setBids(newBids)
          }
       })
    }
   


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
            bids?.map((bid,idx)=><tr key={bid._id} className="font-bold">
            <th>{idx+1}</th>
            <td>{bid?.job_title}</td>
            <td>{bid?.applicant}</td>
            <td>{bid?.deadline}</td>
            <td>{bid?.price}</td>
            <td>{bid?.status}</td>
            <td>
             { <button onClick={()=>handleAcceptStatus(status,bid._id)}
            disabled={bid?.status === 'rejected' ||bid?.status === 'in progress' ||bid?.status === 'complete' }
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${(bid?.status === 'rejected' || bid?.status === 'in progress' ||bid?.status === 'complete') && 'bg-[#30977c] hover:bg-[#30977c]'}`}>Accept</button>}
            </td>
            <td><button 
             disabled={bid?.status === 'rejected' || bid?.status === 'in progress'||bid?.status === 'complete'}
             onClick={()=>handleRejectedStatus(bid._id)}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${(bid?.status === 'rejected' || bid?.status === 'in progress'||bid?.status === 'complete') && 'bg-[#30977c] hover:bg-[#30977c]'}`}>Reject</button></td>
          </tr>)
          }
          
        </tbody>
      </table>
    </div>
    );
};

export default BidRequest;