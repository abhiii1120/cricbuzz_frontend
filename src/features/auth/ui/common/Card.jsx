import React from "react";

const Card = ({mainText,subText}) => {
  return (
    <div className="border-l-2 border-green-500 pl-4 bg-green-400/4 p-2 rounded-r-lg ">
      <p className="text-[11px] font-semibold tracking-wide text-emerald-800">
        {mainText}
      </p>
      <p className="text-sm text-slate-600 mt-1">{subText}</p>
    </div>
  );
};

export default Card;
