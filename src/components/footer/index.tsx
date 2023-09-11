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
      <Flex px="10%" pt="100px" pb="80px">
        <Box w="250px">
          <Box>
            <Image src={logo} alt="" mt={-5} />
          </Box>
          <HStack mb={3}>
            <LocationIcon fontSize="2xl" />
            <Text fontSize="sm">5 Mohammed St Salau Lagos, Nigeria</Text>
          </HStack>
          <HStack mb={3}>
            <PhoneIcon fontSize="2xl" />
            <Text fontSize="sm">5 Mohammed St Salau Lagos, Nigeria</Text>
          </HStack>
          <HStack>
            <MailIcon fontSize="2xl" />
            <Text fontSize="sm">Homeownerofficial@gmail.com</Text>
          </HStack>
          <HStack>
            <MailIcon fontSize="2xl" visibility="hidden" />
            <Text fontSize="sm">www.homeowner.com</Text>
          </HStack>
        </Box>

        <Box w="calc(100% - 250px)" pos="relative">
          <SimpleGrid columns={[6]} spacing={2}>
            {footerLinks.map((link, i) => (
              <Box key={i}>
                <Text mb={5} fontWeight="bold">
                  {link.title}
                </Text>
                {link.items.map((item, j) => (
                  <Text key={j} mb={3} fontSize="sm">
                    {item.name}
                  </Text>
                ))}
              </Box>
            ))}
          </SimpleGrid>

          <Box pos="absolute" bottom={0} right={0}>
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

      <Box as="hr" borderBottom="1px solid #b9b8b8" w="70%" mx="auto" />
      <Text color="#535353" textAlign="center" fontSize="sm" my="25px">
        Copyright © 2023 Home Owner All right policy reserved
      </Text>
    </>
  );
}

export default Footer;
