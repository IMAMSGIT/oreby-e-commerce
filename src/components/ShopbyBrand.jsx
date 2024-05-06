import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import List from "./List";
import BrandCategory from "./BrandCategory";
const ShopbyColor = () => {
  let [shopbyBrand, setShopbyBrand] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShopbyBrand(!shopbyBrand)}
        className="flex items-center justify-between w-full mt-[50px] text-xl font-bold text-primary mb-[0.4rem]"
      >
        Shop by Brand
        {shopbyBrand ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      
      {shopbyBrand && (
        <div>
          <List className="py-[15px] items-center justify-between text-base text-secondary leading-[30px] font-normal">
            <BrandCategory brandNumber={1} />
            <BrandCategory brandNumber={2} />
            <BrandCategory brandNumber={3} />
            <BrandCategory brandNumber={4} />
            <BrandCategory brandNumber={5} />
          </List>
        </div>
      )}
    </div>
  );
};

export default ShopbyColor;
