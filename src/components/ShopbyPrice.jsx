import React, { useState } from "react";
import PriceCategory from "./PriceCategory";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import List from "./List";

const ShopbyPrice = () => {
  let [shopbyPrice, setShopbyPrice] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full mt-[50px] text-xl font-bold text-primary mb-[0.4rem]"
        onClick={() => setShopbyPrice(!shopbyPrice)}
      >
        Shop by Price
        {shopbyPrice ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {shopbyPrice && (
        <div>
          <List className="py-[15px] items-center justify-between text-base text-secondary leading-[30px] font-normal">
            <PriceCategory price={"$0.00 - $9.99"} />
            <PriceCategory price={"$0.10 - $19.99"} />
            <PriceCategory price={"$29.00 - $39.99"} />
          </List>
        </div>
      )}
    </div>
  );
};

export default ShopbyPrice;
