import GroupArrowsIcon from "@/icons/group-arrows";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function OurCommitment() {
  return (
    <Box p="50px 5%" h={["600px", null, null, "450px"]} bg="#F7F7F7" pos="relative">
      <Box
        pos="absolute"
        top={["30px", null, null, "200px"]}
        left={["calc(50% - 110px)", null, null, "5%", "230px"]}
      >
        <Heading as="h2" color="primary" fontSize="lg" mb={1}>
          OUR
        </Heading>
        <Heading as="h2" fontSize={["25px", null, "30px", "40px"]}>
          Commitment
        </Heading>
      </Box>

      <GroupArrowsIcon
        fontSize="300px"
        pos="absolute"
        top={["100px", null, null, "80px"]}
        left={["calc(50% - 130px)", null, null, "400px", "600px"]}
        transform={["rotate(90deg)", null, null, "rotate(0)"]}
      />

      <TextBox
        text="Eco-Sustainability"
        top={["420px", null, null, "75px"]}
        left={["calc(50% - 175px)", null, null, "700px", "900px"]}
      />
      <TextBox
        text="Convenience"
        top={["370px", null, null, "200px"]}
        left={["calc(50% - 75px)", null, null, "650px", "850px"]}
      />
      <TextBox
        text="Your Success"
        top={["480px", null, null, "325px"]}
        left={["calc(50% - 20px)", null, null, "705px", "905px"]}
      />
    </Box>
  );
}

const TextBox = ({ text, ...prop }: { text: string; [anyProp: string]: any }) => (
  <Flex
    {...prop}
    pos="absolute"
    justify="center"
    align="center"
    w={["180px", null, null, "280px"]}
    h={["40px", null, null, "60px"]}
    bg="#fff"
    boxShadow="0 3px 20px #e2dfdf"
    borderRadius="10px"
  >
    <Text fontSize={["sm", null, null, "md"]}>{text}</Text>
  </Flex>
);

export default OurCommitment;
