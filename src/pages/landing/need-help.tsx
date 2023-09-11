import Button from "@/components/button";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import needHelpImage from "@/assets/need-help.png";

function NeedHelp() {
  return (
    <Flex py="100px" pl="10%">
      <Flex w="50%" alignItems="center">
        <Image src={needHelpImage} alt="" />
      </Flex>

      <Flex w="50%" alignItems="center">
        <Box>
          <Heading as="h2" color="primary" fontSize="40px" mb={3}>
            Need Help!
          </Heading>
          <Text w="80%" mb={7} fontSize="sm">
            Get answers to your questions from our dedicated services heroes who are always happy to
            listen and assist. Book a call, chat with us, send an email and let’s get social
          </Text>
          <Button bg="none" border="1px solid" borderColor="#000" color="#000">
            CONTACT SUPPORT
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NeedHelp;
