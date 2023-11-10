import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebDev from "../webDev/webDev";
import { useQuery } from "@tanstack/react-query";

const CategoryTab = () => {
    const [selectedTab,setSelectedTab]=useState('Web Development')
    const [jobs,setJobs]=useState([]);
    console.log(jobs)

    const handleTabClick=(tab)=>{
        setSelectedTab(tab)
    }
     
    const {data : jobItems,isPending}=useQuery({
        queryKey:['data',selectedTab],
        queryFn:async()=>{
           const res =await fetch(`http://localhost:5000/category/${selectedTab}`)
           return res.json()
        },
        retry:10
    })

    useEffect(()=>{
      if(jobItems){
        setJobs(jobItems)
        setSelectedTab(selectedTab)
      }
    },[jobItems,selectedTab])
    
   if(isPending){
    return <span className="loading loading-infinity loading-lg"></span>
   }

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/category/${selectedTab}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //       // console.log(data)
    //       setJobs(data)
    //     })
    // },[selectedTab])
  return (
    <Tabs>
      <TabList>
        <Tab onClick={()=>handleTabClick('Web Development')}><h2 className="font-semibold">Web Development</h2></Tab>
        <Tab onClick={()=>handleTabClick('Digital Marketing')}><h2 className="font-semibold">Digital Marketing</h2></Tab>
        <Tab onClick={()=>handleTabClick('Graphic Design')}><h2 className="font-semibold">Graphic Design</h2></Tab>
      </TabList>

      <TabPanel>
        <div>
        {/* <h2>Web Development</h2> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs?.map(job=><WebDev
              key={job._id}
              job={job}
              ></WebDev>)
            }
           </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
        {/* <h2>Digital Marketing</h2> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs?.map(job=><WebDev
              key={job._id}
              job={job}
              ></WebDev>)
            }
           </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div>
        {/* <h2>Graphic Design</h2> */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs?.map(job=><WebDev
              key={job._id}
              job={job}
              ></WebDev>)
            }
           </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default CategoryTab;
