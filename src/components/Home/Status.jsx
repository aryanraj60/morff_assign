import React from "react";
import statusAssest from "../../assets/status-assest-1.png";

//Function to formate epoch date to DD/MM/YYYY format
function formatDate(epochTime) {
  const date = new Date(epochTime * 1000);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

const Status = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row gap-2">
        <h2 className="text-[24px] pl-4 leading-[32.78px] font-semibold">
          Project status
        </h2>
        <span className="bg-[#05944F] text-white font-light py-[1px] my-auto px-3 rounded-xl">
          Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="px-2 py-6 flex gap-1 justify-between md:justify-normal md:gap-28 shadow-[4px_4px_20px_rgba(151,151,151,0.25)] rounded-xl">
          <div className="md:pl-4 flex flex-col gap-2">
            <p className="text-[#333333] text-sm">Project start date</p>
            {/* Formatted Date */}
            <p>{formatDate(1679907453)}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#333333] text-sm">Planned duration</p>
            <p>35 days</p>
          </div>
        </div>

        <div className="px-4 py-6 flex gap-1 justify-between md:justify-normal md:gap-28 shadow-[4px_4px_20px_rgba(151,151,151,0.25)] rounded-xl">
          <div className="md:pl-4 flex flex-col gap-2">
            <p className="text-[#333333] text-sm">Elapsed time</p>
            <p>0 days</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[#333333] text-sm">Timeline</p>
            <p className="text-[#276EF1] underline">Click to see</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold pl-4 text-[24px] leading-[32.78px]">
          Item status
        </h2>
        <div className="px-4 py-8 mt-4 rounded-xl shadow-[4px_4px_20px_rgba(151,151,151,0.25)] bg-gradient-to-l from-[#FFC107C7] to-[#FFC70087]">
          <div className="flex gap-2">
            <h3 className="text-[18px] leading-[24.59px]">Current item</h3>
            <span className="bg-[#05944F] text-white font-light py-[1px] my-auto px-3 rounded-xl">
              Active
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="grid grid-cols-4 gap-2">
              <p className="text-[#333333] text-sm">Milestone name</p>
              <p className="text-[#333333] text-sm">Item name</p>
              <p className="text-[#333333] text-sm">Description</p>
              <p className="text-[#333333] text-sm">Start date</p>
            </div>

            <div className="grid grid-cols-4 gap-2 pb-1 border-b border-white">
              <p>Moodboard</p>
              <p>Concept design</p>
              <p>Design for the pages inside the screens on lore ipsum</p>
              <p>27 Mar 2023</p>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <p>Moodboard</p>
              <p>Palette</p>
              <p>-</p>
              <p>27 Mar 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 grid-cols-1 md:grid-cols-2">
        <div className="px-4 py-6 space-y-2 rounded-xl shadow-[4px_4px_20px_rgba(151,151,151,0.25)]">
          <h3 className="text-[18px] font-semibold text-center md:text-left">
            Completed Items
          </h3>
          <p className="text-[16px] text-center md:text-left">
            Items submitted and are approved will appear here
          </p>
          <div className="flex justify-center">
            <img
              src={statusAssest}
              alt="productLaunchImg"
              className="-mr-36 md:m-0"
            />
          </div>
        </div>

        <div className="px-4 py-6 space-y-2 rounded-xl shadow-[4px_4px_20px_rgba(151,151,151,0.25)]">
          <h3 className="text-[18px] font-semibold">Upcoming items</h3>
          <div className="grid grid-cols-3">
            <p className="text-[#333333] text-sm">Milestone name</p>
            <p className="text-[#333333] text-sm">Items </p>
            <p className="text-[#333333] text-sm">Planned start</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 border-b-2 pb-2 border-gray-200">
              <p>Concept</p>
              <p>Moodboard, Presentation design</p>
              <p>27 Mar 2023</p>
            </div>
            <div className="grid grid-cols-3 border-b-2 pb-2 border-gray-200">
              <p>Concept</p>
              <p>Moodboard, Presentation design</p>
              <p>27 Mar 2023</p>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-[#276EF1] underline">All upcoming items </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
