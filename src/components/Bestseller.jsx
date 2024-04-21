import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Product from "./Product";

const Bestseller = () => {
  return (
    <section>
      <Container>
        <Title className="mb-12" heading="Our Bestsellers" />
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

export default Bestseller;
