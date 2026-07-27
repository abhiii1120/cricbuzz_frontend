import Chip from "@/components/Chip";
import React from "react";
import Card from "./Card";

const LeftComponent = ({ mainText, subText, cardArr }) => {
  return (
    <div className="flex-1 w-fit">
      <Chip text={"JOIN THE INNER CIRCLE"} />

      <h1 className="mt-5 text-4xl md:text-[2.6rem] leading-tight font-extrabold text-slate-900">
        {mainText}
      </h1>

      <p className="mt-4 text-slate-600 max-w-md">{subText}</p>

      <div className="mt-8 grid grid-cols-2 gap-8 max-w-md">
        {cardArr.map((item, idx) => {
          return (
            <Card mainText={item?.mainText} subText={item?.subText}/>
          );
        })}
      </div>
    </div>
  );
};

export default LeftComponent;
