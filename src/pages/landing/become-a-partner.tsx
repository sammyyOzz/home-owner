import Button from "@/components/button";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import partnerImage1 from "@/assets/become-a-partner-1.png";
import partnerImage2 from "@/assets/become-a-partner-2.png";

function BecomeAPartner() {
  return (
    <Flex pl="10%" pt="100px" height="fit-content" direction={["column", "column", "row"]} gap={6}>
      <Flex w={["100%", null, "50%", "60%"]} align="center">
        <Box w="400px">
          <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]} mb={3}>
            Become A Partner
          </Heading>
          <Text w="80%" mb={7} fontSize="sm">
            As long as you provide products or services that make living comfortable and
            sustainable, you are our partner of choice
          </Text>
          <Button bg="none" border="1px solid" borderColor="#000" color="#000">
            Become A Partner
          </Button>
        </Box>
      </Flex>

      <Box
        w={["100%", null, "50%", "40%"]}
        h={["400px", "400px", "400px", "650px"]}
        pos="relative"
        bgImage={`url(${partnerImage2})`}
        bgPosition="center"
        bgSize="cover"
      >
        <Image
          src={partnerImage1}
          alt=""
          pos="absolute"
          left={0}
          h="100%"
          objectFit="cover"
          transform={["translateX(-37%)"]}
        />
      </Box>
    </Flex>
  );
}

export default BecomeAPartner;
