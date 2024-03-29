import React, { Children } from "react";

const Container = ({ children }) => {
  return <div className="px-4 mx-auto max-w-container">{children}</div>;
};

export default Container;
