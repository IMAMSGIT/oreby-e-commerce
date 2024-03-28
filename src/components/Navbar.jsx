import React, { useState } from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let [menu, setMenu] = useState(false);
  let handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="py-8 bg-white ">
      <Container>
        <Flex>
          <Image source={"images/logo.png"} alter={"Logo"} />
          <FaBars onClick={handleMenu} className="lg:hidden" />
          <List className="hidden gap-10 lg:flex ">
            <ListItem>
              <Link className="text-sm font-normal duration-100 hover:font-bold text-secondary hover:text-primary">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className="text-sm font-normal duration-100 hover:font-bold text-secondary hover:text-primary">
                Shop
              </Link>
            </ListItem>
            <ListItem>
              <Link className="text-sm font-normal hover:font-bold text-secondary hover:text-primary">
                About
              </Link>
            </ListItem>
            <hover:ListItem>
              <Link className="text-sm font-normal duration-100 hover:font-bold text-secondary hover:text-primary">
                Contacts
              </Link>
            </hover:ListItem>
            <ListItem>
              <Link className="text-sm font-normal duration-100 hover:font-bold text-secondary hover:text-primary">
                Journal
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
