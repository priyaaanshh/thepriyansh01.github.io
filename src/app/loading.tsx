"use client";
import ParticleBg from "@/components/particles/particleBg";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className="">
      <ParticleBg />
      <div className="flex flex-col gap-10 justify-center items-center h-screen w-full backdrop-blur">
        <PropagateLoader
          color={"white"}
          loading={true}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loading;
