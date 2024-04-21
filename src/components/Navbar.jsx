import React, { useEffect, useState } from "react";
import Image from "./Image";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  let [menu, setMenu] = useState(true);
  let handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    function navBarMenu() {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navBarMenu();
    window.addEventListener("resize", navBarMenu);
  }, []);
  return (
    <nav className="relative z-50 py-8 bg-white">
      <Container>
        <Flex className="items-center justify-between">
          <Image source={"images/logo.png"} alter={"Logo"} />
          {menu ? (
            <IoIosCloseCircle
              onClick={handleMenu}
              className="absolute right-5 lg:hidden top-7"
            />
          ) : (
            <FaBars
              onClick={handleMenu}
              className="absolute right-5 lg:hidden top-7"
            />
          )}
          {menu && (
            <List className="absolute left-0 w-full gap-10 pl-4 duration-500 bg-secondary lg:w-auto lg:bg-transparent lg:static top-12 lg:flex">
              <ListItem className="mt-4 ">
                <Link className="text-sm font-normal text-white duration-100 hover:font-bold lg:text-secondary lg:hover:text-primary">
                  Home
                </Link>
              </ListItem>
              <ListItem className="mt-4 ">
                <Link
                  to="/products"
                  className="text-sm font-normal text-white duration-100 hover:font-bold lg:text-secondary lg:hover:text-primary"
                >
                  Products
                </Link>
              </ListItem>
              <ListItem className="mt-4 ">
                <Link className="text-sm font-normal text-white duration-100 hover:font-bold lg:text-secondary lg:hover:text-primary">
                  About
                </Link>
              </ListItem>
              <ListItem className="mt-4">
                <Link className="text-sm font-normal text-white duration-100 hover:font-bold lg:text-secondary lg:hover:text-primary">
                  Contacts
                </Link>
              </ListItem>
              <ListItem className="mt-4">
                <Link className="text-sm font-normal text-white duration-100 hover:font-bold lg:text-secondary lg:hover:text-primary">
                  Journal
                </Link>
              </ListItem>
            </List>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
