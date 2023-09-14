import Button from "@/components/button";
import Carousel from "@/components/carousel";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import img1 from "@/assets/utilities-1.png";
import useCarousel from "@/hooks/use-carousel";

const images = [img1];

function UtilitiesAndEnergy() {
  const [currentIndex] = useCarousel(images.length);

  return (
    <Box px="10%" pb="100px">
      <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]} mb={3}>
        Utilities & Energy
      </Heading>
      <Text w="80%" mb={7}>
        Your energy and internet needs in one place. Just click and relax..
      </Text>

      <Flex gap={8} w="90%" mx="auto" direction={["column", null, null, null, "row"]}>
        <Flex
          w={["100%", null, null, null, "60%"]}
          justify="space-between"
          direction={["column", null, "row"]}
        >
          <Flex
            direction="column"
            bg="#fff"
            w="220px"
            h="220px"
            p="20px 40px 20px 30px"
            borderRadius="20px"
            boxShadow="0 0 15px #8C959D40"
          >
            <Button bg="#40E0D0" color="#000" pr={10} mb={8}>
              Solar Power
            </Button>
            <Button bg="none" color="#000" pr={10} mb={8}>
              Internet
            </Button>
            <Button bg="none" color="#000" pr={10}>
              Buy
            </Button>
          </Flex>

          <Flex direction="column" justify="space-between" pl={["", null, "15%"]} gap="50px">
            <Box w="95%" mt={["30px", null, "0"]}>
              <Text fontSize="sm" color="#40E0D0">
                01
              </Text>
              <Text fontSize={["xl", null, "2xl", "3xl"]} fontWeight="bold" color="#40E0D0">
                Solar Power
              </Text>
              <Text fontSize="xs" lineHeight={7}>
                Never worry about power for your needs regardless of location, HomeOwner renewable
                energy solution will keep you on for opportunities
              </Text>
            </Box>

            <Button bg="#40E0D0" color="#000" w={["100%", null, null, null, "95%"]}>
              View More
            </Button>
          </Flex>
        </Flex>

        <Box w={["100%", null, null, null, "40%"]} pos="relative">
          <Carousel
            images={images}
            currentIndex={currentIndex}
            w="100%"
            h="100%"
            sx={{
              img: {
                borderRadius: "10px",
              },
            }}
          />
          <Text color="#fff" fontWeight="bold" fontSize="sm" pos="absolute" left={3} top={2}>
            Polycrystalline Solar Panel
          </Text>
          <Text color="#fff" pos="absolute" right={3} top={2}>
            01
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default UtilitiesAndEnergy;
