import { Menu as ChakraMenu, MenuButton, MenuList as ChakraMenuList } from "@chakra-ui/react";
import React from "react";

export interface MenuProps {
  menuButton: React.ReactNode;
  children: React.ReactNode;
}

function Menu({ menuButton, children }: MenuProps) {
  return (
    <ChakraMenu autoSelect={false}>
      <MenuButton>{menuButton}</MenuButton>
      <MenuList>{children}</MenuList>
    </ChakraMenu>
  );
}

const MenuList = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraMenuList
      minW="50px"
      ml="-30%"
      mt={1}
      w="180px"
      // p="3px"
    >
      {children}
    </ChakraMenuList>
  );
};

export default Menu;
