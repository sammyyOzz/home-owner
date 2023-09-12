import { Flex, Input } from "@chakra-ui/react";
import subscribeImage from "@/assets/subscribe.jpeg";
import Button from "@/components/button";

function Subscribe() {
  return (
    <Flex
      justify="center"
      align="center"
      bgImage={subscribeImage}
      bgPosition="center"
      bgSize="cover"
      h={["250px", null, "200px"]}
    >
      <Flex
        direction={["column", null, "row"]}
        justify={["center", null, "space-between"]}
        align="center"
        bg="#fff"
        w="80%"
        p="15px 20px"
        borderRadius="7px"
      >
        <Input
          w={["100%", null, "60%"]}
          mb={[3, null, 0]}
          fontSize="sm"
          placeholder="Please enter your email address to stay updated with our latest offers, goods and services."
        />
        <Button px={8}>Subscribe Now</Button>
      </Flex>
    </Flex>
  );
}

export default Subscribe;
