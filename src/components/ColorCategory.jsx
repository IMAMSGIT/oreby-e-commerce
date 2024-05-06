import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const ColorCategory = ({ colorCode, colorName }) => {
  return (
    <List>
      <div className="flex items-center gap-3 py-[19px] border-b border-[#F0F0F0]">
        <div
          style={{ background: `${colorCode}` }}
          className="w-[11px] h-[11px] rounded-full "
        ></div>
        <ListItem className="relative items-center justify-between text-base text-secondary leading-[30px] font-normal">
          {colorName}
        </ListItem>
      </div>
    </List>
  );
};

export default ColorCategory;
