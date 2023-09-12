import ExpectFromUsCard from "@/components/expect-from-us-card";
import BestPriceIcon from "@/icons/expect-from-us/best-price";
import EfficiencyIcon from "@/icons/expect-from-us/efficiency";
import ExtraSecurityIcon from "@/icons/expect-from-us/extra-security";
import HeartIcon from "@/icons/expect-from-us/heart";
import PremiumIcon from "@/icons/expect-from-us/premium";
import StrategicLocationIcon from "@/icons/expect-from-us/strategic-location";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

function ExpectFromUs() {
  return (
    <Box pt="50px" pb="100px">
      <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]} ml="10%" mb={3}>
        What To Expect From Us
      </Heading>
      <Text w="80%" mx="auto" mb={4}>
        We create seamless connections between desire, acquisition and actual living outcomes that
        are sustainable and empowering.
      </Text>
      <SimpleGrid w="75%" mx="auto" columns={[1, null, 2, 3]} spacing={6}>
        <ExpectFromUsCard
          icon={<HeartIcon fontSize="40px" />}
          title="Convenience"
          text="Enjoy lifestyle amenities designed to provide every homeowner with modern comfort as they wish. As succeed, when you can make anywhere feel like home."
        />
        <ExpectFromUsCard
          icon={<ExtraSecurityIcon fontSize="40px" />}
          title="Extra Security"
          text="Your security with us is not what we take for granted. We are constantly exploring cutting edge technology to stay a step ahead for you."
        />
        <ExpectFromUsCard
          icon={<PremiumIcon fontSize="40px" />}
          title="Premium"
          text="Your security with us is not what we take for granted. We are constantly exploring cutting edge technology to stay a step ahead for you."
        />
        <ExpectFromUsCard
          icon={<BestPriceIcon fontSize="40px" />}
          title="Best Price"
          text="Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home."
        />
        <ExpectFromUsCard
          icon={<StrategicLocationIcon fontSize="40px" />}
          title="Strategic Location"
          text="We carefully analyse and vet areas that satisfy your living and financial needs using technology. Is it business, vacation or shopping? contact us now."
        />
        <ExpectFromUsCard
          icon={<EfficiencyIcon fontSize="40px" />}
          title="Efficiency"
          text="Applying technology with dedicated people who see you as priority, so there is no limit to what we can achieve."
        />
      </SimpleGrid>
    </Box>
  );
}

export default ExpectFromUs;
