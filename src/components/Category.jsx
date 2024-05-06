import React from "react";
import ListItem from "./ListItem";
import List from "./List";
import { FaPlusCircle } from "react-icons/fa";
import SubCategory from "./SubCategory";
import { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";

const Category = ({ categoryName, subCategoryShow }) => {
  let [subCategory, setSubCategory] = useState(false);
  return (
    <List onClick={() => setSubCategory(!subCategory)}>
      <ListItem className="relative border-b border-[#F0F0F0] py-[19px] items-center justify-between text-base text-secondary leading-[30px] font-normal">
        {categoryName}
        {subCategory ? (
          <FaMinusCircle className="absolute right-0 top-7" />
        ) : (
          <FaPlusCircle className="absolute right-0 top-7" />
        )}
      </ListItem>
      {subCategoryShow && <SubCategory subShow={subCategory} />}
    </List>
  );
};

export default Category;
