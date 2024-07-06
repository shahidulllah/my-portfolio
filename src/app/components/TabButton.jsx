import React from "react";


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB0BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold  ${buttonClasses}`}>
        {children}
      </p>
 
    </button>
  );
};

export default TabButton;