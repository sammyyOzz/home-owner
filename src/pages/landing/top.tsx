import { Box, Heading, Text } from "@chakra-ui/react";
import landingTop from "@/assets/landing-top.png";
import ListLandingLinks from "@/components/list-landing-links";
import Button from "@/components/button";

function LandingTop() {
  return (
    <Box
      h="calc(100vh - 80px)"
      bgImage={landingTop}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      pos="relative"
    >
      <ListLandingLinks />

      <Heading
        as="h1"
        fontSize="50px"
        color="#fff"
        h="120px"
        w="400px"
        pos="absolute"
        top="25%"
        left="5%"
      >
        Freedom to live smart<Box as="sup">TM</Box>
      </Heading>
      <Text
        fontSize=""
        color="#fff"
        h="80px"
        w="500px"
        pos="absolute"
        top="calc(25% + 130px)"
        left="5%"
      >
        Our mission is to create seamless connections between desire, acquisition and actual living
        outcomes that are sustainable and empowering
      </Text>
      <Button pos="absolute" top="calc(25% + 130px + 90px)" left="5%">
        Get in touch with us
      </Button>
    </Box>
  );
}

export default LandingTop;
