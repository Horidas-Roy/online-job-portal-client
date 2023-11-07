import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebDev from "../webDev/webDev";

const CategoryTab = () => {
    const [selectedTab,setSelectedTab]=useState('Web Development')
    const [jobs,setJobs]=useState([]);

    const handleTabClick=(tab)=>{
        setSelectedTab(tab)
    }
     
    useEffect(()=>{
        fetch(`http://localhost:5000/category/${selectedTab}`)
        .then(res=>res.json())
        .then(data=>{
          // console.log(data)
          setJobs(data)
        })
    },[selectedTab])
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
           <div className="grid grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs.map(job=><WebDev
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
           <div className="grid grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs.map(job=><WebDev
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
           <div className="grid grid-cols-4 gap-4 pt-10 pb-20 px-4">
            {
              jobs.map(job=><WebDev
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
