import { Box, Heading, Text } from "@chakra-ui/react";

function OurStory() {
  return (
    <Box p="50px 5%">
      <Heading
        as="h2"
        fontSize={["25px", null, "30px", "40px"]}
        // w={["100%", null, "250px"]}
        mb={3}
        textAlign="center"
      >
        Our Story
      </Heading>

      <Text pr="3%" lineHeight={8} color="#000000B2" mb={0}>
        HomeOwner was born out of the desire to create a stress free solution that provide 360
        degree resources that caters to need and want that makes life comfortable and appealing
        using technology.
      </Text>

      <Text pr="3%" lineHeight={8} color="#000000B2" mb={5}>
        Imagine not having to worry about your next rent, insurance, how your utilities will be
        handled, staying connected, having access to the best vendors from housing agents, down to
        your cleaning and transportation needs just so you focus and live your goal. Our founders
        believe that every individual is a star and the more access they get to convenient living,
        the more productive they can be. it starts with HomeOwner.
      </Text>
    </Box>
  );
}

export default OurStory;
