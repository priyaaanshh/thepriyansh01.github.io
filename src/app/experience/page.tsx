import TimeLine from "@/components/custom/timeline/timeline";
import React from "react";
import timeLineData from "./timelineData";
const Experience = () => {
  return (
    <div className="flex flex-col justify-start items-start lg:items-center h-screen w-full overflow-x-hidden">
      <div className="my-28 px-6">
        <TimeLine events={timeLineData} />
      </div>
    </div>
  );
};

export default Experience;
