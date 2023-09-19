import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import LocationIcon from "@/icons/location";
import PhoneIcon from "@/icons/phone";
import MailIcon from "@/icons/mail";
import { footerLinks } from "./data";
import InstagramIcon from "@/icons/instagram";
import TwitterIcon from "@/icons/twitter";
import FacebookIcon from "@/icons/facebook";
import LinkedInIcon from "@/icons/linked-in";
import YoutubeIcon from "@/icons/youtube";

function Footer() {
  return (
    <>
      <Flex px="10%" pt="100px" pb="80px" direction={["column", null, null, "row"]} gap={5}>
        <Box w={["100%", null, null, "250px"]}>
          <Box>
            <Image src={logo} alt="" mt={-5} />
          </Box>
          <HStack mb={3}>
            <LocationIcon fontSize="3xl" />
            <Text fontSize="xs">29, Alfred Rewane way, Ikoyi, Lagos state</Text>
          </HStack>
          <HStack mb={3}>
            <PhoneIcon fontSize="2xl" />
            <Text fontSize="xs">+23413306345</Text>
          </HStack>
          <a href="mailto:care@homeowner.world">
            <HStack>
              <MailIcon fontSize="2xl" />
              <Text fontSize="xs">care@homeowner.world</Text>
            </HStack>
          </a>
          <a href="http://www.homeowner.com" target="_blank">
            <HStack>
              <MailIcon fontSize="2xl" visibility="hidden" />
              <Text fontSize="xs">www.homeowner.com</Text>
            </HStack>
          </a>
        </Box>

        <Box w={["100%", null, null, "calc(100% - 250px)"]} pos="relative">
          <SimpleGrid columns={[2, 3, 4, null, 6]} spacing={2}>
            {footerLinks.map((link, i) => (
              <Box key={i}>
                <Text mb={5} fontWeight="bold" fontSize="sm">
                  {link.title}
                </Text>
                {link.items.map((item, j) => (
                  <Text key={j} mb={3} fontSize="xs">
                    {item.name}
                  </Text>
                ))}
              </Box>
            ))}
          </SimpleGrid>

          <Box pos="absolute" bottom={["-70px", "-90px", 0]} right={0}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Get Social
            </Text>
            <HStack spacing={4}>
              <InstagramIcon fontSize="2xl" />
              <TwitterIcon fontSize="2xl" />
              <FacebookIcon fontSize="2xl" />
              <LinkedInIcon fontSize="2xl" />
              <YoutubeIcon fontSize="2xl" />
            </HStack>
          </Box>
        </Box>
      </Flex>

      <Box
        as="hr"
        borderBottom="1px solid #b9b8b8"
        w={["90%", null, "70%"]}
        mx="auto"
        mt={[10, null, 0]}
      />
      <Text
        maxW={["80%", null, "65%"]}
        color="#535353"
        textAlign="center"
        fontSize="xs"
        my="25px"
        mx="auto"
      >
        Copyright © 2023 Home Owner All right policy reserved
      </Text>
    </>
  );
}

export default Footer;
