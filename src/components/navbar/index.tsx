import { Flex, HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import Button from "../button";

function Navbar() {
  return (
    <Flex h="80px" justify="space-between" align="center" border="1px solid red" pr={10} pl={5}>
      <Image src={logo} alt="logo" h="60px" />
      <HStack>
        <Button>Login</Button>
        <Button bg="none" color="#000" borderColor="primary">
          Sign Up
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
