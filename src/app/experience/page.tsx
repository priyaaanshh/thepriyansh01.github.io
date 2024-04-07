import React from "react";
import timeLineData from "./timelineData";

import TimeLine from "@/components/custom/timeline/timeline";
import MainHeading from "@/components/custom/heading/mainheading";
import SubHeading from "@/components/custom/heading/subheading";

const Experience = () => {
  return (
    <div className="relative grid place-items-center w-full h-screen overflow-x-hidden overflow-y-scroll no-scrollbar">
      <div className="flex flex-col justify-center items-center mt-20 w-full max-w-[850px] px-8">
        <MainHeading>My Experiences</MainHeading>
        <SubHeading>Want to connect? My inbox is always open!</SubHeading>
        <div className="flex w-full justify-start lg:justify-center">
          <TimeLine events={timeLineData} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
