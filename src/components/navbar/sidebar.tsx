import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import Button from "../button";

export interface SidebarProps {
  isOpen: boolean;
  handleClose: () => void;
}

function Sidebar({ isOpen, handleClose }: SidebarProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt={2} borderRadius="50%" />
        <DrawerHeader>
          <Image src={logo} alt="logo" h="70px" mt={-5} ml={-6} />
        </DrawerHeader>

        <DrawerBody pt={10}>
          <HStack p={2} borderRadius="10px" bg="#f1efef" cursor="pointer" mb={2}>
            <Text fontWeight="bold" textAlign="center" w="100%">
              Home
            </Text>
          </HStack>
          <HStack p={2} borderRadius="10px" bg="#f1efef" cursor="pointer" mb={2}>
            <Text fontWeight="bold" textAlign="center" w="100%">
              About
            </Text>
          </HStack>
          <HStack p={2} borderRadius="10px" bg="#f1efef" cursor="pointer" mb={2}>
            <Text fontWeight="bold" textAlign="center" w="100%">
              Services
            </Text>
          </HStack>
          <HStack p={2} borderRadius="10px" bg="#f1efef" cursor="pointer" mb={2}>
            <Text fontWeight="bold" textAlign="center" w="100%">
              Projects
            </Text>
          </HStack>
          <HStack p={2} borderRadius="10px" bg="#f1efef" cursor="pointer" mb={6}>
            <Text fontWeight="bold" textAlign="center" w="100%">
              Become a Partner
            </Text>
          </HStack>

          <Button
            bg="none"
            border="1px solid #000"
            color="#000"
            h="40px"
            fullWidth
            borderRadius="10px"
            mb={2}
          >
            Login
          </Button>
          <Button borderColor="primary" h="40px" fullWidth borderRadius="10px">
            Sign Up
          </Button>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Sidebar;
