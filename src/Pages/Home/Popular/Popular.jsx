import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BMWCars from "./BMWCars";
import AudiCars from "./AudiCars";
import MercedesCars from "./MercedesCars";
import Toyota from "./Toyota";
import Honda from "./Honda";
import RoyalsCars from "./RoyalsCars";

const Popular = () => {
  return (
    <div className="popular-container bg-slate-100">
      <div className="popular-section margins paddings">
        <div className="popular-heading w-2/5 mx-auto text-center my-3">
          <p className="text-2xl font-bold">Explore Our Wheels</p>
          <p className="secondaryText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde id aperiam assumenda obcaecati ipsam laborum iure libero ea nihil.</p>
        </div>
        <div>
          <Tabs className=" flex flex-col">
            <TabList className="flex justify-center mb-4 border-b-2 border-orange-500">
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                BMW
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                Audi
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                Mercedes
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                Toyota
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                Honda
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium text-lg mx-2 px-4 py-2">
                Rolls-Royals
              </Tab>
            </TabList>

            <TabPanel>
              <BMWCars></BMWCars>
            </TabPanel>
            <TabPanel>
              <AudiCars></AudiCars>
            </TabPanel>
            <TabPanel>
              <MercedesCars></MercedesCars>
            </TabPanel>
            <TabPanel>
              <Toyota></Toyota>
            </TabPanel>
            <TabPanel>
              <Honda></Honda>
            </TabPanel>
            <TabPanel>
              <RoyalsCars></RoyalsCars>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Popular;
