import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { useState } from "react";
import SubCategory from "./SubCategory";
import Category from "./Category";

const ShopByCategory = () => {
  let [subCategoryShow, setsubCategoryShow] = useState(false);
  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-[35px]">
        Shop by Category
      </h2>
      <Category categoryName="Category 1" subCategoryShow={true} />
      <Category categoryName="Category 2" subCategoryShow={false} />
      <Category categoryName="Category 3" subCategoryShow={false} />
      <Category categoryName="Category 4" subCategoryShow={false} />
      {/* {subCategoryShow ? : <FaPlusCircle />} */}
      {/* <ListItem className="text-base leading-[30px] font-normal">
          </ListItem> */}
      {/* {subCategoryShow && <SubCategory />} */}
      {/* {subCategoryShow && (
          <>
       
          </>
        )} */}
      {/* <List className="border-b border-[#F0F0F0] py-[19px]">
        <Flex className="items-center justify-between">
          <ListItem className="text-base text-secondary leading-[30px] font-normal">
            Category 2
          </ListItem>
      
        </Flex>
      </List>
      <List className="border-b border-[#F0F0F0] py-[19px]">
        <Flex className="items-center justify-between">
          <ListItem className="text-base text-secondary leading-[30px] font-normal">
            Category 3
          </ListItem>
          <FaPlusCircle />
          {/* <ListItem className="text-base leading-[30px] font-normal">
          </ListItem> */}
      {/* </Flex>
      </List>
      <List className="border-b border-[#F0F0F0] py-[19px]">
        <Flex className="items-center justify-between">
          <ListItem className="text-base text-secondary leading-[30px] font-normal">
            Category 4
          </ListItem>
          <FaPlusCircle />
          {/* <ListItem className="text-base leading-[30px] font-normal">
          </ListItem> */}
    </div>
  );
};

export default ShopByCategory;
