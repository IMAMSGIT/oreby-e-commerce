import React, { Children } from "react";

const Container = ({ children }) => {
  return (
    <div className="h-3 mx-auto bg-red-500 max-w-container">{children}</div>
  );
};

export default Container;
