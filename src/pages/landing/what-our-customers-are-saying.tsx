import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import customerImage1 from "@/assets/what-customers-say-about-us-1.png";
import customerImage2 from "@/assets/what-customers-say-about-us-2.png";
import OpenQuoteIcon from "@/icons/open-quote";
import CloseQuoteIcon from "@/icons/close-quote";

function WhatOurCustomersAreSaying() {
  return (
    <Box pos="relative" overflow="hidden" pb="100px">
      <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]} ml="10%" mb={7}>
        What our customers are saying...
      </Heading>

      <Flex direction={["column", null, null, "row"]}>
        <Flex w={["100%", "100%", "100%", "60%"]} mb={["120px", null, null, 0]}>
          <Box>
            <Image src={customerImage1} alt="Customer" />
          </Box>
          <Box pos="relative">
            <Image src={customerImage2} alt="Customer" />

            <Box pos="absolute" bottom="-80px" left={["0px", null, null, "0px"]} w="400px">
              <Text fontSize={["md", null, null, "24px"]} fontFamily="">
                Mr Smith Jacobs M.O
              </Text>
              <Text color="#878787" fontSize={["sm", null, null, "md"]}>
                C.E.O Dev and Marketing
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex w="100%" align="center" justify="flex-end">
          <Box
            pos="relative"
            w={["70%", null, null, null, "500px"]}
            mr={["15%", null, null, null, "20%"]}
          >
            <OpenQuoteIcon pos="absolute" top={-3} left={-6} />
            <Text
              w={["90%", null, null, "70%"]}
              color="#17171FCC"
              fontSize="lg"
              fontWeight="bold"
              mb={3}
            >
              I felt 120% confident by partnering with Home Owner.
            </Text>

            <Text color="#959595" fontSize="sm">
              We have made the buying experience seamless with a vast array of products to cater to
              your budget be it joint ownership, distress buying to building a real estate.We have
              made the buying experience seamless with a vast array of products to cater to your
              budget be it joint ownership, distress buying to building a real estate.We have made
              the buying experience seamless with a vast array of products to cater to your budget
              be it joint ownership
            </Text>
            <CloseQuoteIcon pos="absolute" bottom={-3} right={-4} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default WhatOurCustomersAreSaying;
