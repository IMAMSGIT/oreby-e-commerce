import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { RiNumber2 } from "react-icons/ri";
import Container from "./Container";
import Flex from "./Flex";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Information = () => {
  return (
    <section className="py-5 border-y border-[#F0F0F0] border-1">
      <Container>
        {/* Parent flex */}
        <Flex className="justify-between ">
          <Flex className="items-center gap-4">
            <RiNumber2 className="hidden text-xl sm:block" />
            <p className="text-base text-[#6D6D6D] font-normal">
              Two years warranty
            </p>
          </Flex>
          <Flex className="items-center gap-4">
            <MdLocalShipping className="hidden text-xl sm:block" />
            <p className="text-base text-[#6D6D6D] font-normal">
              Free shipping
            </p>
          </Flex>
          <Flex className="items-center gap-4">
            <FaArrowRotateLeft className="hidden text-xl sm:block" />
            <p className="text-base text-[#6D6D6D] font-normal">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
