import React from "react";
import { MenuItem as ChakraMenuItem } from "@chakra-ui/react";

export interface MenuItemProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

function MenuItem({ children, handleClick }: MenuItemProps) {
  return (
    <ChakraMenuItem onClick={handleClick} _hover={{ bg: "none" }}>
      {children}
    </ChakraMenuItem>
  );
}

export default MenuItem;
