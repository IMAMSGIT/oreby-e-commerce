import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const PriceCategory = ({ price }) => {
  return (
    <List>
      <div className="flex items-center gap-3 py-[19px] border-b border-[#F0F0F0]">
        <div className="w-[11px] h-[11px] rounded-full "></div>
        <ListItem className="relative items-center justify-between text-base text-secondary leading-[30px] font-normal">
          {price}
        </ListItem>
      </div>
    </List>
  );
};

export default PriceCategory;
