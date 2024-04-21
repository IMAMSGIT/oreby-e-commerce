import React from "react";

const Flex = ({ children, className, dref, onClick }) => {
  return (
    <div onClick={onClick} ref={dref} className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
