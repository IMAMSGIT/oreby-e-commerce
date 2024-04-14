import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";

const Offer = () => {
  return (
    <section className="lg:mt-[140px] mt-[10px]">
      <Container>
        <Flex className="flex-wrap gap-10 lg:flex-nowrap">
          <Image source="images/first_ad.png" alt="1st ad"></Image>
          <div className="flex flex-col gap-10">
            <Image source="images/second_ad.png" alt="2nd ad"></Image>
            <Image source="images/third_ad.png" alt="3rd ad"></Image>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Offer;
