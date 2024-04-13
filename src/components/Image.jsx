import React from "react";

const Image = ({ source, alt, className }) => {
  return <img className={className} src={source} alt={alt} />;
};

export default Image;
