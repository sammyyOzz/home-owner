import { Flex, HStack, IconButton, Image, Text, useDisclosure } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import Button from "../button";
import { Link } from "react-router-dom";
import Menu from "../menu";
import MenuItem from "../menu/menuItem";
import DownIcon from "@/icons/down";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./sidebar";
import ROUTES from "@/routes";

const servicesList = [
  { name: "Buy" },
  { name: "Sell" },
  { name: "Pay-As-You-Stay" },
  { name: "List" },
  { name: "Shop" },
  { name: "Utilities" },
  { name: "Home Service" },
  { name: "My Properties" },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex h="80px" justify="space-between" align="center" pr={10} pl={5}>
        <Image src={logo} alt="logo" h="80px" mt={-3} />

        <Flex justify="space-between" align="center" w="45%" display={["none", null, null, "flex"]}>
          <Link to={ROUTES.LANDING}>
            <Text fontSize="sm" fontWeight="bold">
              Home
            </Text>
          </Link>
          <Link to={ROUTES.ABOUT_US}>
            <Text fontSize="sm" fontWeight="bold">
              About
            </Text>
          </Link>
          <Menu
            menuButton={
              <HStack spacing={0}>
                <Text fontSize="sm" fontWeight="bold">
                  Services
                </Text>
                <DownIcon fontSize="2xl" />
              </HStack>
            }
          >
            {servicesList.map((service, i) => (
              <MenuItem key={i}>
                <Text fontSize="xs">{service.name}</Text>
              </MenuItem>
            ))}
          </Menu>
          <Link to="#">
            <Text fontSize="sm" fontWeight="bold">
              Projects
            </Text>
          </Link>
          <Link to="#">
            <Text fontSize="sm" fontWeight="bold">
              Become a Partner
            </Text>
          </Link>
        </Flex>

        <HStack display={["none", null, null, "flex"]}>
          <Button bg="none" color="#000" h="55px" w="120px" borderRadius="50px">
            Login
          </Button>
          <Button borderColor="primary" h="55px" w="120px" borderRadius="50px">
            Sign Up
          </Button>
        </HStack>

        <IconButton
          borderRadius="50%"
          aria-label={"menu"}
          display={["flex", null, null, "none"]}
          onClick={onOpen}
        >
          <GiHamburgerMenu />
        </IconButton>
      </Flex>

      <Sidebar isOpen={isOpen} handleClose={onClose} />
    </>
  );
}

export default Navbar;
