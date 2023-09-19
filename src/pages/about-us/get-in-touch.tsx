import Button from "@/components/button";
import FormControl from "@/components/form-elements/form-control";
import TextAreaFormControl from "@/components/form-elements/textarea-form-control";
import { Box, Checkbox, Flex, Grid, HStack, Heading, Image, Text } from "@chakra-ui/react";
import img1 from "@/assets/get-in-touch-1.png";

function GetInTouch() {
  return (
    <Box p="50px 5%">
      <Heading as="h2" color="#17171FCC" fontSize="lg" mb={4}>
        Need more information? Get in Touch!
      </Heading>

      <Flex
        direction={["column", null, null, "row"]}
        gap="30px"
        p="50px 20px 70px 50px"
        borderRadius="10px"
        boxShadow="0 3px 20px #e2dfdf"
      >
        <Box w={["100%", null, null, "50%"]}>
          <Heading as="h2" color="#17171FCC" fontSize="2xl" mb={3}>
            Get in Touch
          </Heading>
          <Text color="#000000CC" w="100%" fontSize="sm" mb={3}>
            Our team of regional experts are here to support you with your global expansion plans.
            If you have any questions, just get in touch and we will be delighted to help.
          </Text>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} mb={4}>
            <FormControl label="First name" half isRequired />
            <FormControl label="Last name" half isRequired />
            <FormControl label="Phone number" half isRequired />
            <FormControl label="E-mail" half isRequired />
            <TextAreaFormControl label="How did you hear about us and how can we help?" />
          </Grid>

          <HStack mb={3}>
            <Checkbox size="lg" />
            <Text color="#160629" fontSize="sm">
              Send me occasional news, offers &events from Homeowner.
            </Text>
          </HStack>
          <HStack mb={7}>
            <Checkbox size="lg" />
            <Text color="#160629" fontSize="sm">
              I agree to{" "}
              <Text as="span" color="primary">
                Homeowner’s Privacy Policy
              </Text>
            </Text>
          </HStack>
          <Button h="50px" w="130px" borderRadius="35px" fontWeight="400">
            Submit
          </Button>
        </Box>

        <Box w={["100%", null, null, "50%"]} pl="50px">
          <Image src={img1} alt="" w="100%" />
        </Box>
      </Flex>
    </Box>
  );
}

export default GetInTouch;
