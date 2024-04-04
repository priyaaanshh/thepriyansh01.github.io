import "./index.css";
import React from "react";

interface CardProps {
  event: {
    title: string;
    description: string;
  };
  left: Boolean;
}

interface TimeLineProps {
  events: {
    title: string;
    description: string;
  }[];
}
const Card: React.FC<CardProps> = ({ event, left }) => {
  const alignText = () => {
    if (left) {
      return "text-left lg:text-right";
    }
    return "text-left";
  };
  return (
    <div className="flex justify-center flex-col px-4 py-2 rounded-lg border-2 border-muted backdrop-blur bg-white/10 cursor-pointer">
      <div className={`mb-2 text-lg md:text-2xl font-semibold ${alignText()}`}>
        {event.title}
      </div>
      <div className={`text-xs md:text-lg whitespace-pre-line ${alignText()}`}>
        {event.description}
      </div>
    </div>
  );
};

const TimeLine: React.FC<TimeLineProps> = ({ events }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-36 bg-[#00229c] rounded-b-full rounded-t-full w-1">
      {events.map((event, key) => (
        <div className="flex flex-col items-center" key={key}>
          <div className="relative bg-gradient-to-b from-[#4F84C4] to-[#00229c] rounded-full size-8 m-2 ring-teal-200/30 ring-8 z-10">
            {key % 2 === 1 ? (
              <div className="absolute w-max align-card-left">
                <Card event={event} left={key % 2 === 1} />
              </div>
            ) : (
              <div className="absolute w-max align-card-right">
                <Card event={event} left={key % 2 === 1} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
