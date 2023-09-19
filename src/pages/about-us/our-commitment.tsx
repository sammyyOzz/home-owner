import GroupArrowsIcon from "@/icons/group-arrows";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function OurCommitment() {
  return (
    <Box p="50px 5%" h="450px" bg="#F7F7F7" pos="relative">
      <Box pos="absolute" border="1px solid red" top="200px" left="230px">
        <Heading as="h2" color="primary" fontSize="lg" mb={1}>
          OUR
        </Heading>
        <Heading as="h2" fontSize={["25px", null, "30px", "40px"]}>
          Commitment
        </Heading>
      </Box>

      <GroupArrowsIcon fontSize="300px" pos="absolute" top="80px" left="600px" />

      <TextBox text="Eco-Sustainability" top="75px" left="900px" />
      <TextBox text="Convenience" top="200px" left="850px" />
      <TextBox text="Your Success" top="325px" left="905px" />
    </Box>
  );
}

const TextBox = ({ text, ...prop }: { text: string; [anyProp: string]: any }) => (
  <Flex
    {...prop}
    pos="absolute"
    justify="center"
    align="center"
    w="280px"
    h="60px"
    bg="#fff"
    boxShadow="0 3px 20px #e2dfdf"
    borderRadius="10px"
  >
    <Text>{text}</Text>
  </Flex>
);

export default OurCommitment;
