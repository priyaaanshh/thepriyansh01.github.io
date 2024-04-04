"use client";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-full bg-black/50 backdrop-blur">
      <PropagateLoader
        color={"yellow"}
        loading={true}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <span className="text-3xl text-destructive translate-x-3">Loading</span>
    </div>
  );
};

export default Loading;
