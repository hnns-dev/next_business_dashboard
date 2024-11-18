import React from "react";

const OverviewCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-mainOrangeLight even:bg-mainGreenLight p-4 flex-1 min-w-32">
      <div className="flex justify-between items-center">
        <span className="text-green-600 text-xs bg-white px-2 py-1 rounded-full">
          21,4% ▲
        </span>
        <img src="/more.svg" alt="" />
      </div>
      <h1 className="text-2xl font-bold my-3">1.234</h1>
      <h2 className="text-sm font-light">{type}</h2>
    </div>
  );
};

export default OverviewCard;
