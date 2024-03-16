import React from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Flex>
          <Image source={"images/logo.png"} alter={"Logo"} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Home</ListItem>
          </List>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
