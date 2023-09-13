import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import img1 from "@/assets/our-values-1.png";
import OurValuesCard from "@/components/our-values-card";
import HeartIcon from "@/icons/expect-from-us/heart";

function OurValues() {
  return (
    <Box p="50px 5%">
      <Box w="50%" mb="40px">
        <Heading as="h2" color="primary" fontSize="lg" mb={1}>
          OUR
        </Heading>
        <Heading
          as="h2"
          fontSize={["25px", null, "30px", "40px"]}
          w={["100%", null, "250px"]}
          mb={3}
        >
          Values
        </Heading>
        <Text w="100%" color="#000000B2">
          In our heart and all we do, we are always improving on these values that steer us to be at
          your services.
        </Text>
      </Box>

      <SimpleGrid columns={[1, null, null, null, 2]} spacing={5}>
        <SimpleGrid columns={[1, null, 2]} spacing={3}>
          <OurValuesCard
            icon={<HeartIcon fontSize="40px" />}
            title="Faith"
            text="We believe absolutely in God to bless the works of our hands and provide our needs in abundance."
          />
          <OurValuesCard
            icon={<HeartIcon fontSize="40px" />}
            title="Innovation"
            text="We are constantly evolving in ideas, technology and human capital to be a step ahead in providing swift solutions to HomeOwners and partners."
          />
          <OurValuesCard
            icon={<HeartIcon fontSize="40px" />}
            title="Quality"
            text="To ensure there are no excuse in delivering of product and services, we hire premium hands, and vwt SLAs with nartners to ensure all HomwOwners are happy."
          />
          <OurValuesCard
            icon={<HeartIcon fontSize="40px" />}
            title="Collaboration"
            text="We believe collaborative efforts to achieve a common goal therefore Home Owner places high premium on its staffs and partners."
          />
        </SimpleGrid>

        <Box>
          <Image src={img1} alt="" w="100%" h="100%" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default OurValues;
