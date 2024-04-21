import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/Flex";
import ShopByCategory from "../components/ShopByCategory";

const Products = () => {
  return (
    <div>
      <Container>
        <Breadcrumb />
        <Flex className="gap-10 mt-[100px]">
          <div className="w-[20%]">
            <ShopByCategory />
          </div>
          <div className="w-[80%] h-[400px] bg-gray-500"></div>
        </Flex>
      </Container>
    </div>
  );
};

export default Products;
