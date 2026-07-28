import React from "react";

const Button = ({label}) => {
  return (
    <button
      type="submit"
      className="w-full bg-[#0a3d31] hover:bg-[#0d4a3c] text-white font-semibold tracking-wide text-sm py-3 rounded-lg transition"
    >
      {label}
    </button>
  );
};

export default Button;
