import React from "react";

const List = ({ children, className, onClick }) => {
  return (
    <ul onClick={onClick} className={className}>
      {children}
    </ul>
  );
};

export default List;
