import React from "react";

interface SkillCardProps {
  children: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-primary text-sm sm:text-lg hover:text-black hover:bg-destructive  hover:scale-125 duration-300 rounded-lg shadow-lg shadow-black/25 cursor-pointer px-4 py-2">
      {children}
    </div>
  );
};

export default SkillCard;
