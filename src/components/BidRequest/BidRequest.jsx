import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import "react-step-progress-bar/styles.css";
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BidRequest = () => {
  const [status,setStatus]=useState('pending')
  // const bids=useLoaderData()
  const [bids,setBids]=useState([])

  const {user}=useContext(AuthContext)

    // console.log(bids);

   const {data:bidItems,isPending}=useQuery({
         queryKey:['bids',user],
         queryFn:async()=>{
             const res=await fetch(`http://localhost:5000/bidsReq?email=${user?.email}`)
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

      await fetch(`http://localhost:5000/status/${id}`,{
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
          setStatus('in progress')
          toast('Accepted')
        }

      })
        
    }

    const handleRejectedStatus=(id)=>{
      console.log('rejected status')
      
       fetch(`http://localhost:5000/status/${id}`,{
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
            setStatus('rejected')
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
            <td>{status}</td>
            <td>
             { <button onClick={()=>handleAcceptStatus(status,bid._id)}
            disabled={status === 'rejected' ||status === 'in progress'}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${(status === 'rejected' || status === 'in progress') && 'bg-[#30977c] hover:bg-[#30977c]'}`}>Accept</button>}
            </td>
            <td><button 
             disabled={status === 'rejected' ||status === 'in progress'}
             onClick={()=>handleRejectedStatus(bid._id)}
            className={`bg-[#007456] hover:bg-[#2b8f75] px-3 py-2 rounded-lg text-white ${(status === 'rejected' || status === 'in progress') && 'bg-[#30977c] hover:bg-[#30977c]'}`}>Reject</button></td>
          </tr>)
          }
          
        </tbody>
      </table>
    </div>
    );
};

export default BidRequest;