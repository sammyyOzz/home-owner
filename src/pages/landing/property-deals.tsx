import PropertyDealCard from "@/components/property-deal-card";
import ServicesBlock from "@/components/services-block";
import RightIcon from "@/icons/right";
import { Box, Flex, HStack, Heading, IconButton, Spacer, Text } from "@chakra-ui/react";
import { useRef } from "react";

const dealsData = [
  {
    title: "Pay As You Stay",
    location: "Yaba Tech, Lagos",
    description:
      "No matter the size, location and type of property desired, you can stay daily, stay monthly, bi-annual, anytime ,anywhere. ",
  },
  {
    title: "Buy Properties",
    location: "Lekki, Lagos",
    description:
      "what ever your budget, You can now stay as you own, jointly own a piece of any property.",
  },
  {
    title: "List Properties",
    location: "Bariga, Lagos",
    description:
      "No matter the size, location and type of property desired, you can stay daily, stay monthly, bi-annual, anytime ,anywhere. ",
  },
  {
    title: "My Properties",
    location: "Mainland, Lagos",
    description:
      "what ever your budget, You can now stay as you own, jointly own a piece of any property.",
  },
];

function PropertyDeals() {
  const containerRef = useRef<any>(null);

  const scrollRight = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft += 500;
  };

  const scrollLeft = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollLeft -= 500;
  };

  return (
    <Box minH="400px" pos="relative" pt={["450px", null, "300px", "200px"]} pb="100px">
      <Flex pos="absolute" top="-65px" w="100%" justify="center">
        <ServicesBlock />
      </Flex>

      <HStack w="80%" mx="auto" mb={3}>
        <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]}>
          Property Deals
        </Heading>
        <Spacer />
        <IconButton
          aria-label="left"
          borderRadius="50%"
          transform="rotate(180deg)"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
          display={["none", null, "flex"]}
          onClick={scrollLeft}
        />
        <IconButton
          aria-label="right"
          borderRadius="50%"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
          display={["none", null, "flex"]}
          onClick={scrollRight}
        />
      </HStack>
      <Text w="80%" mx="auto" mb={7}>
        Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural
        masterpieces.
      </Text>

      <HStack display={["flex", null, "none"]} ml="10%" mb={7}>
        <IconButton
          aria-label="left"
          borderRadius="50%"
          transform="rotate(180deg)"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
          onClick={scrollLeft}
        />
        <IconButton
          aria-label="right"
          borderRadius="50%"
          icon={<RightIcon color="#AFD4E2" fontSize="20px" />}
          onClick={scrollRight}
        />
      </HStack>

      <Box
        // h="400px"
        ref={containerRef}
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
        {dealsData.map(({ title, location, description }, i) => (
          <Box key={i} display="inline-block" w="300px" h="450px" mr={10}>
            <PropertyDealCard title={title} location={location} description={description} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PropertyDeals;
