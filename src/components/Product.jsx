import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
const Product = ({ pImage, isNew, pInfo }) => {
  return (
    <div className="relative w-[376px] sm:w-[322px] md:w-[320px] xl:w-[376px]">
      <div className="relative group">
        <Image
          className="h-[350px] object-cover"
          source={pImage}
          alt="1st Product"
        />
        <div className="w-full h-[156px] bg-white/50 absolute bottom-0 left-0 bg-red hidden group-hover:block duration-1000">
          <ul className="flex flex-col gap-4 text-right p-7 ">
            <li className="flex items-center justify-end gap-4 text-base font-normal duration-400 hover:font-bold hover:text-secondary text-secondary">
              Add to Wish List <FaHeart />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-normal hover:font-bold hover:text-secondary text-primary">
              Compare <FaHeart />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-normal hover:font-bold hover:text-secondary text-primary">
              Add to Wish List <FaHeart />
            </li>
          </ul>
        </div>
      </div>
      {isNew && (
        <h4 className="absolute inline-block py-2 font-bold text-white px-7 top-5 left-5 bg-primary font-sm ">
          New
        </h4>
      )}
      <Flex className="justify-between mt-6 ">
        <h2 className="text-xl font-bold text-primary">
          {pInfo ? pInfo.title : "Black Crew"}
        </h2>
        <h4 className="font-normal leading-[30px] tex-base text-secondary">
          ${pInfo ? pInfo.price : 0}
        </h4>
      </Flex>
      <h4 className="font-normal leading-[30px] tex-base text-secondary">
        Black
      </h4>
    </div>
  );
};

export default Product;
