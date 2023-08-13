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
      <div className="popular-section  xsm:py-8 lg:py-0 xl:mx-10">
        <div className="popular-heading xsm:w-2/3 xsm:m-1/2 lg:w-2/5 mx-auto text-center my-3">
          <p className="text-2xl font-bold">Explore Our Wheels</p>
          <p className="secondaryText xsm:m-5 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde id aperiam assumenda obcaecati ipsam.</p>
        </div>
        <div>
          <Tabs className=" flex flex-col">
            <TabList className="flex justify-center mb-4 border-b-2 border-orange-500">
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
                BMW
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
                Audi
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
                Mercedes
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
                Toyota
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
                Honda
              </Tab>
              <Tab className="text-gray-600 hover:text-orange-500 focus:bg-orange-500 focus:text-white outline-none font-medium md:text-lg sm:mx-2 xsm:mx-1 md:px-4 md:py-2">
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
