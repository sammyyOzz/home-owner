import ServicesBlock from "@/components/services-block";
import { Box, Flex } from "@chakra-ui/react";

function PropertyDeals() {
  return (
    <Box minH="400px" pos="relative">
      <Flex pos="absolute" top="-65px" w="100%" justify="center">
        <ServicesBlock />
      </Flex>
    </Box>
  );
}

export default PropertyDeals;
