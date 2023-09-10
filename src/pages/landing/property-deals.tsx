import PropertyDealCard from "@/components/property-deal-card";
import ServicesBlock from "@/components/services-block";
import RightIcon from "@/icons/right";
import { Box, Flex, HStack, Heading, IconButton, Spacer, Text } from "@chakra-ui/react";

function PropertyDeals() {
  return (
    <Box minH="400px" pos="relative" pt="200px" pb="100px">
      <Flex pos="absolute" top="-65px" w="100%" justify="center">
        <ServicesBlock />
      </Flex>

      <HStack w="80%" mx="auto" mb={3}>
        <Heading as="h2" color="primary" fontSize="40px">
          Property Deals
        </Heading>
        <Spacer />
        <IconButton
          aria-label="left"
          borderRadius="50%"
          transform="rotate(180deg)"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
        />
        <IconButton
          aria-label="right"
          borderRadius="50%"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
        />
      </HStack>
      <Text w="80%" mx="auto" mb={7}>
        Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural
        masterpieces.
      </Text>

      <Box
        id="nft-scrollable-container"
        // h="400px"
        px="10%"
        overflowX="scroll"
        whiteSpace="nowrap"
        sx={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Box key={i} display="inline-block" w="250px" h="450px" mr={10}>
              <PropertyDealCard />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default PropertyDeals;
