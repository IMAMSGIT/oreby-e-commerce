import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Flex from "./Flex";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = () => {
  const pathName = window.location.pathname.split("/")[1];

  return (
    <div className="mt-[124px]">
      <h3 className="font-bold text-primary text-[49px] capitalize">
        {pathName}
      </h3>
      <List>
        <Flex className="items-center gap-2">
          <ListItem className="text-sm font-normal text-secondary">
            Home
          </ListItem>
          <ListItem className="text-sm font-normal text-secondary">
            <FaChevronRight />
          </ListItem>
          <ListItem className="text-sm font-normal text-secondary">
            {pathName}
          </ListItem>
        </Flex>
      </List>
    </div>
  );
};

export default Breadcrumb;
