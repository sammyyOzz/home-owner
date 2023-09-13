import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import img1 from "@/assets/our-vision-1a.png";

function OurMission() {
  return (
    <Box p="50px 5%" bg="#F7F7F7">
      <Flex direction={["column", null, "row"]}>
        <Flex w={["100%", null, null, "50%"]} direction="column" justify="center">
          <Heading as="h2" color="primary" fontSize="lg" mb={1}>
            OUR
          </Heading>
          <Heading
            as="h2"
            fontSize={["25px", null, "30px", "40px"]}
            w={["100%", null, "250px"]}
            mb={3}
          >
            Mission
          </Heading>
          <Text w="100%" color="#000000B2">
            To make seamless connection between desire, acquisition and actual living outcome that
            are sustainble and empowering.
          </Text>
        </Flex>

        <Box w={["100%", null, null, "50%"]} pl={["0", null, "12%"]} mt={["30px", null, "0"]}>
          <Image src={img1} alt="" w="100%" />
        </Box>
      </Flex>
    </Box>
  );
}

export default OurMission;
