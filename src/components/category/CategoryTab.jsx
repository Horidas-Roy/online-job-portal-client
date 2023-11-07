import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CategoryTab = () => {
    const [tabIndex,setTabIndex]=useState(0)
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
      <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default CategoryTab;
