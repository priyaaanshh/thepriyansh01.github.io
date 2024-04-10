import ParticleBg from "@/components/particles/particleBg";
import { Separator } from "@/components/ui/separator";
import React from "react";

const NotFound = () => {
  const heading = "Error 404!";
  const text = "Sorry! your requested page doesn't exists.";
  return (
    <div className="h-screen">
      <ParticleBg />
      <div className="flex justify-center items-center w-full h-screen backdrop-blur-sm">
        <div className="flex flex-col justify-center items-center space-y-2">
          <span className="text-5xl">{heading}</span>
          <Separator className="bg-slate-200" />
          <span className="text-sm">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
