import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img1 from "@/assets/our-vision-1a.png";

function OurVision() {
  return (
    <Box p="50px 5%" bg="#F7F7F7">
      <Flex direction={["column", null, "row"]}>
        <Box w={["100%", null, null, "50%"]} pr={["0", null, "12%"]}>
          <Image src={img1} alt="" w="100%" />
        </Box>

        <Flex
          w={["100%", null, null, "50%"]}
          direction="column"
          justify="center"
          mt={["30px", null, "0"]}
        >
          <Heading as="h2" color="primary" fontSize="lg" mb={1}>
            OUR
          </Heading>
          <Heading
            as="h2"
            fontSize={["25px", null, "30px", "40px"]}
            w={["100%", null, "250px"]}
            mb={3}
          >
            Vision
          </Heading>
          <Text w="75%" color="#000000B2" mb={5}>
            To become Africa’s preferred living solution company through technology, collaboration
            and people focused strategies.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default OurVision;
