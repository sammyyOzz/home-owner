import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import landingTop1 from "@/assets/landing-top-1.png";
import Button from "@/components/button";
import ScrollDownIcon from "@/icons/scroll-down";

function LandingTop() {
  return (
    <Box
      h="calc(100vh - 80px)"
      bgImage={landingTop1}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box pos="relative" bg="#0D0D0D4D" w="100%" h="100%">
        <Box
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="590px"
          // border="1px solid red"
        >
          <Heading as="h1" fontSize="50px" color="#fff">
            Freedom to{" "}
            <Box as="span" color="primary">
              Live smart
            </Box>
            <Box as="sup" color="primary" fontSize="30px">
              TM
            </Box>
          </Heading>

          <Text fontSize="" color="#fff" h="80px" textAlign="center" mb={7}>
            Our mission is to create seamless connections between desire, acquisition and actual
            living outcomes that are sustainable and empowering
          </Text>

          <Flex justify="center">
            <Button borderColor="primary" h="50px" w="170px" borderRadius="50px">
              Contact Us
            </Button>
          </Flex>
        </Box>

        <a href="#services-block">
          <ScrollDownIcon
            fontSize="3xl"
            pos="absolute"
            bottom="80px"
            left="50%"
            transform="translateX(-50%)"
            cursor="pointer"
          />
        </a>
      </Box>
    </Box>
  );
}

export default LandingTop;
