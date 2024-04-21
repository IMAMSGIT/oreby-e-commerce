import React from "react";
import Title from "./Title";
import Flex from "./Flex";
import Product from "./Product";
import Container from "./Container";

const SpecialOffers = () => {
  return (
    <section className="mt-[128px]">
      <Container>
        <Title className="mb-12" heading="Special Offers" />
        <Flex className="flex-wrap justify-between gap-10 xl:flex-nowrap">
          <Product pImage="images/product1.png" isNew={false} />
          <Product pImage="images/product2.png" isNew={true} />
          <Product pImage="images/product3.png" isNew={false} />
          <Product pImage="images/product4.png" isNew={false} />
        </Flex>
      </Container>
    </section>
  );
};

export default SpecialOffers;
