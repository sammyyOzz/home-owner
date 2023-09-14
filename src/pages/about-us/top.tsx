import { Box, Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import img1 from "@/assets/about-us-top-1.png";
import img2 from "@/assets/about-us-top-2.png";
import fiveStars from "@/assets/five-stars.svg";
import NairaIcon from "@/icons/naira";
import FiveBPlusIcon from "@/icons/5-b-plus";
import WorldIcon from "@/icons/world";
import FiveThousandIcon from "@/icons/five-thousand-plus";

function Top() {
  return (
    <Box px="5%" py="30px">
      <Flex direction={["column", null, null, "row"]}>
        <Flex w={["100%", null, null, "50%"]} direction="column" justify="center">
          <Heading as="h1" color="primary" fontSize="lg" mb={3}>
            About Us
          </Heading>
          <Heading
            as="h2"
            fontSize={["25px", null, "30px", "40px"]}
            w={["100%", null, "350px"]}
            mb={3}
          >
            Welcome Home Owner
          </Heading>
          <Text w="75%" color="#000000B2" mb={5}>
            We are changing the way you search, secure and settle in your property anywhere.
          </Text>
          <HStack>
            <Image src={fiveStars} alt="" />
            <Text color="#000000B2" fontSize="sm">
              (4.8 out of 5 Rating)
            </Text>
          </HStack>
          <Text color="#33475B" fontSize="sm">
            Based on Reviews
          </Text>
        </Flex>

        <Flex w={["100%", null, null, "50%"]} pl="5%" pos="relative">
          <Image src={img2} alt="" w="100%" h="100%" />
          <Image
            src={img1}
            alt=""
            w="100%"
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -53%)"
          />
        </Flex>
      </Flex>

      <Flex
        justify="center"
        gap="5%"
        w={["90%", "85%", "80%", "75%"]}
        mx="auto"
        mt={10}
        p="20px 0"
        boxShadow="0 5px 15px #dbd9d9"
      >
        <VStack spacing={0}>
          <HStack spacing={0}>
            <NairaIcon fontSize="3xl" fill="none" />
            <FiveBPlusIcon fontSize="4xl" />
          </HStack>
          <Text fontSize="xs">Listing Value</Text>
        </VStack>

        <VStack spacing={2} mt={1}>
          <WorldIcon fontSize="2xl" fill="none" />
          <Text fontSize="xs">One Mission</Text>
        </VStack>

        <VStack spacing={0} mt={-3}>
          <FiveThousandIcon fontSize="6xl" fill="none" />
          <Text fontSize="xs" mt={-3}>
            Request
          </Text>
        </VStack>
      </Flex>

      <Flex mx="auto" mt="50px">
        <Box as="hr" w="calc(50% - 125px)" borderBottom="1px solid #d4d3d3" />
        <Text fontSize="sm" mt={-3} w="250px" bg="" textAlign="center">
          You are in good Hands
        </Text>
        <Box as="hr" w="calc(50% - 125px)" borderBottom="1px solid #d4d3d3" />
      </Flex>
    </Box>
  );
}

export default Top;
