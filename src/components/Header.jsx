import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaBarsStaggered } from "react-icons/fa6";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Input from "./Input";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import Image from "./Image";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  let [categoryModal, setCategoryModal] = useState(false);
  let [userModal, setUserModal] = useState(false);
  let [cartModal, setCartModal] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRef.current.contains(e.target)) {
        setCategoryModal(!categoryModal);
      } else {
        setCategoryModal(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserModal(true);
      } else {
        setUserModal(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartModal(true);
      } else {
        setCartModal(false);
      }
    });
  }, []);

  return (
    <header className="py-4 bg-headerbg">
      <Container>
        {/* Main Flex */}
        <Flex className="items-center justify-between gap-2 lg:gap-0">
          {/* Left Flex */}
          <Flex dref={categoryRef} className="relative items-center gap-4">
            <FaBarsStaggered />
            <p className="hidden text-sm font-normal select-none lg:block text-primary">
              Shop by Category
            </p>
            <div>
              {categoryModal && (
                <List className="z-50 absolute left-0 top-9 w-[263px] bg-primary">
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Accessories
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Furniture
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Electronics
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Clothes
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Bags
                    </Link>
                  </ListItem>
                  <ListItem className="border-[#2D2D2D] border-b">
                    <Link className="inline-block py-4 pl-5 text-sm font-normal text-white duration-200 hover:font-bold hover:ml-3 ">
                      Home appliances
                    </Link>
                  </ListItem>
                </List>
              )}
            </div>
          </Flex>
          {/* End left flex */}

          {/* Middle section of header */}
          {/* The input section */}
          <div className="relative w-[601px]">
            <Input
              className="w-full h-[50px] rounded-one  placeholder:pl-2 lg:placeholder:pl-5 placeholder:text-[0px] lg:placeholder:text-base"
              placeholder="Search Products"
            />
            <FaSearch className="absolute right-1 text:sm lg:text-2xl lg:right-4 top-4 " />
          </div>

          {/* User and cart of header */}
          <div>
            <Flex dref={userRef} className="relative gap-5 lg:gap-10">
              <Flex>
                {/* Inside flex for User and arrow */}
                {/* div - only for user icon */}
                <div>
                  <FaUser />
                  {userModal && (
                    <div className="z-50 w-[200px] shadow-lg absolute top-[25px] right-[60px]">
                      <Link className="block py-4 font-bold text-center duration-200 bg-white hover:text-white hover:bg-primary text-primary">
                        My Account
                      </Link>
                      <Link className="block py-4 font-bold text-center duration-200 bg-white hover:text-white hover:bg-primary text-primary">
                        Log Out
                      </Link>
                    </div>
                  )}
                </div>
                {userModal ? <FaAngleDown /> : <FaAngleUp />}
              </Flex>
              <div ref={cartRef}>
                <FaCartPlus />
                {cartModal && (
                  <div className="z-50 w-[360px] absolute top-10 right-0 bg-headerbg shadow-sm">
                    <div className="p-5">
                      <Flex className="items-center justify-between gap-3">
                        <Image source="images/cartImage.png" alt="Cart" />
                        <div>
                          <h3 className="text-sm font-bold ">
                            Black Smart Watch
                          </h3>
                          <h2 className="mt-3 text-sm font-bold">$44.00</h2>
                          <IoIosCloseCircleOutline />
                        </div>
                      </Flex>
                    </div>
                    <div className="px-3 bg-white">
                      <h2 className="my-[14px] text-base font-normal text-primary">
                        Subtotal: <span className="font-bold">$44.00</span>
                      </h2>
                      <Link className="inline-block px-10 py-4 text-sm font-bold duration-300 border border-solid font-primary border-secondary hover:bg-primary hover:text-white">
                        View Cart
                      </Link>
                      <Link className="inline-block px-10 py-4 ml-5 text-sm font-bold duration-300 border border-solid font-primary border-secondary hover:bg-primary hover:text-white">
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
