import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const SubCategory = ({ subShow }) => {
  return (
    <div>
      {subShow && (
        <List>
          <List className="ml-5  py-[10px]">
            <ListItem className="text-base duration-700 text-secondary leading-[30px] font-normal">
              Sub Category One
            </ListItem>
          </List>
          <List className="ml-5  py-[10px]">
            <ListItem className="text-base duration-700 text-secondary leading-[30px] font-normal">
              Sub Category Two
            </ListItem>
          </List>
          <List className="ml-5  py-[10px]">
            <ListItem className="text-base duration-700 text-secondary leading-[30px] font-normal">
              Sub Category Three
            </ListItem>
          </List>
        </List>
      )}
    </div>
  );
};

export default SubCategory;
