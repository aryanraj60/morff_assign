import React, { useContext, useState } from "react";
import assest1 from "../assets/loader-assest-1.png";
import { Tabs, Tab } from "baseui/tabs-motion";
import Status from "../components/Home/Status";
import Payments from "../components/Home/Payments";
import Loader from "../components/Loader";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const [activeKey, setActiveKey] = useState("0");
  const {
    setState,
    state: { isLoading },
    increaseQuoteIndex,
  } = useContext(AppContext);

  const handleTabChange = (key) => {
    increaseQuoteIndex();
    setState((prev) => ({ ...prev, isLoading: true }));
    //To enable Loading Feature just for prototype purpose
    setTimeout(() => {
      setActiveKey(key);
      setState((prev) => ({ ...prev, isLoading: false }));
    }, 2000);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen pb-14 px-2 md:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#000000] shadow-md shadow-black grid grid-cols-[2fr_1fr] text-white mx-auto mt-10 rounded-xl">
          <div className="pl-5 py-3">
            <h2 className="font-light text-[40px] leading-[40px]">Sonal</h2>
            <p className="text-sm mt-2 leading-[21.79px] font-normal">
              Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus.
            </p>
          </div>
          <img src={assest1} className="assest1 h-full object-fill" />
        </div>

        <div className="mt-5">
          <Tabs
            activeKey={activeKey}
            onChange={({ activeKey }) => {
              handleTabChange(activeKey);
            }}
            activateOnFocus
            overrides={{
              TabBorder: {
                style: {
                  width: "260px",
                  transform: "translateX(20px)",
                },
              },
              TabList: {
                style: {
                  paddingLeft: "16px",
                },
              },
            }}
          >
            <Tab
              overrides={{
                TabPanel: {
                  style: {
                    padding: 0,
                  },
                },
              }}
              title="Status"
            >
              {/* Status Component */}
              <Status />
            </Tab>
            <Tab
              overrides={{
                TabPanel: {
                  style: {
                    padding: 0,
                  },
                },
              }}
              title="Payments"
            >
              {/* Payment Component */}
              <Payments />
            </Tab>
            <Tab title="Overview">Content 3</Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
