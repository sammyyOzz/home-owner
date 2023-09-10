import { Box, HStack, Image, Text } from "@chakra-ui/react";
import propertyImage from "@/assets/landing-top-1.png";
import Button from "../button";
import LocationIcon from "@/icons/location";

function PropertyDealCard() {
  return (
    <Box pos="relative" w="100%" h="100%">
      <Image src={propertyImage} alt="property" w="100%" h="350px" borderRadius="5px 5px 0 0" />

      <Box
        pos="absolute"
        bottom="40px"
        w="80%"
        ml="50%"
        transform="translateX(-50%)"
        p={4}
        borderRadius="10px"
        bg="#fff"
        boxShadow="0 0 3px #e7e4e4"
      >
        <Text fontSize="sm" fontWeight="bold" mb={3}>
          Pay as You Stay
        </Text>
        <HStack mb={4}>
          <LocationIcon />
          <Text fontSize="xs" color="#1E3240">
            Yaba Teck, Lagos
          </Text>
        </HStack>

        {/* <Text color="#959595" fontSize="xs" w="100px">
          No matter the size, location and type of property desired, you can stay daily, stay
          monthly, bi-annual, anytime ,anywhere.
        </Text> */}
      </Box>

      <Button
        pos="absolute"
        bottom="0"
        fullWidth
        borderRadius={0}
        bg="none"
        border="1px solid"
        borderColor="primary"
        color="primary"
        _hover={{
          bg: "primary",
          color: "#fff",
        }}
      >
        Explore
      </Button>
    </Box>
  );
}

export default PropertyDealCard;
