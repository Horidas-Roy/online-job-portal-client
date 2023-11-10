import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyBidRow from "./MyBidRow";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyBids = () => {
    
    // const bids=useLoaderData();
    const [bids,setBids]=useState([])
    const [status,setStatus]=useState('')
    const {user}=useContext(AuthContext)
    // console.log(bids)

    const {data : bidsItem,isPending}=useQuery({
        queryKey:['bids',user],
        queryFn:async()=>{
           const res =await fetch(`http://localhost:5000/myBids?email=${user?.email}`)
           const data=await res.json()
           return data

        },
        retry:10
    })

    useEffect(()=>{
      if(bidsItem){
        setBids(bidsItem)
      }
   },[bidsItem])



    if(isPending){
      return <span className="loading loading-infinity loading-lg"></span>
     }
   
    
    


    const handleComplete=async(status,id)=>{

      console.log('status',status)
      // setStatus('complete');
      await fetch(`http://localhost:5000/status/${id}`,{
         method:'PATCH',
         headers:{
          'content-type':'application/json'
         },
         body:JSON.stringify({status:'complete'})
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
        setStatus(status)
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
