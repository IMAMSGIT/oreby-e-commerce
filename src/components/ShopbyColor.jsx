import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import ColorCategory from "./ColorCategory";
const ShopbyColor = () => {
  let [shopByColor, setshopByColor] = useState(false);
  return (
    <div>
      <button
        onClick={() => setshopByColor(!shopByColor)}
        className="flex items-center justify-between w-full mt-[50px] text-xl font-bold text-primary mb-[35px]"
      >
        Shop by Color
        {shopByColor ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {shopByColor && (
        <div>
          <ColorCategory colorName="Color 1" colorCode="#34DB20" />
          <ColorCategory colorName="Color 2" colorCode="#4A59B0" />
          <ColorCategory colorName="Color 3" colorCode="#000000" />
          <ColorCategory colorName="Color 4" colorCode="#000000" />
        </div>
      )}
    </div>
  );
};

export default ShopbyColor;
