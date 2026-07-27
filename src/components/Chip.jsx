import React from "react";

const Chip = ({text}) => {
  return (
    <span className="inline-flex items-center justify-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
      {text}
    </span>
  );
};

export default Chip;
