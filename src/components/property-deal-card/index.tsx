import { Box, HStack, Image, Text } from "@chakra-ui/react";
import propertyImage from "@/assets/landing-top-1.png";
import Button from "../button";
import LocationIcon from "@/icons/location";

export interface PropertyDealCardProps {
  title: string;
  location: string;
  description: string;
}

function PropertyDealCard({ title, location, description }: PropertyDealCardProps) {
  return (
    <Box pos="relative" w="100%" h="100%" whiteSpace="normal">
      <Image
        src={propertyImage}
        alt="property"
        w="100%"
        h="350px"
        borderRadius="5px 5px 0 0"
        objectFit="cover"
      />

      <Box
        pos="absolute"
        bottom="40px"
        w="80%"
        ml="50%"
        transform="translateX(-50%)"
        p={4}
        borderRadius="10px"
        bg="#fff"
        boxShadow="0 0 3px #c4c2c2"
      >
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb={3}>
            {title}
          </Text>
          <HStack mb={4}>
            <LocationIcon />
            <Text fontSize="xs" color="#1E3240">
              {location}
            </Text>
          </HStack>
          <Text color="#959595" fontSize="xs">
            {description}
          </Text>
        </Box>
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
