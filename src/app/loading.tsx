"use client";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full backdrop-blur">
      <PropagateLoader
        color={"yellow"}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
