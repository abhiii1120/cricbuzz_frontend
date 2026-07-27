import React from "react";
import { cn } from "@/lib/utils";

const Chip = ({ text, className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full",
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
      {text}
    </span>
  );
};

export default Chip;
