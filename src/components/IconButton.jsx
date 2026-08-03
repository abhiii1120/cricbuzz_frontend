import React from "react";

const IconButton = ({ icon: Icon, label,...rest }) => {
  return (
    <button className="cursor-pointer border border-black/10 p-2 rounded-lg flex gap-2 px-6" {...rest}>
      <Icon size={24} />
      {label}
    </button>
  );
};

export default IconButton;
