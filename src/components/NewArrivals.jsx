import React from "react";
import Container from "./Container";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";

const NewArrivals = () => {
  return (
    <section className="mt-[123px]">
      <Container>
        <Title className="mb-12" heading="New Arrivals"></Title>
        <Flex className="flex-wrap justify-between gap-10 xl:flex-nowrap">
          <Product pImage="images/product1.png" isNew={true} />
          <Product pImage="images/product1.png" isNew={false} />
          <Product pImage="images/product1.png" isNew={true} />
          <Product pImage="images/product1.png" isNew={false} />
        </Flex>
      </Container>
    </section>
  );
};

export default NewArrivals;
