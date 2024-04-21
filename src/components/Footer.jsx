import React from "react";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";

const Footer = () => {
  return (
    <footer className="mt-[140px] py-[55px] bg-[#F5F5F3]">
      <Container>
        <List>
          <ListItem>
            <h3 className="mb-4 text-base font-bold text-primary">MENU</h3>
          </ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Shop</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Journal</ListItem>
        </List>
      </Container>
    </footer>
  );
};

export default Footer;
