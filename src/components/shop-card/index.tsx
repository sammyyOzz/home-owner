import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Button from "../button";

export interface ShopCardProps {
  title: string;
  text: string;
  image: string;
}

function ShopCard({ image, title, text }: ShopCardProps) {
  return (
    <Flex py={2} px={4} gap={3} borderRadius="5px" boxShadow="0 0 15px #cecdcd">
      <Flex direction="column" justify="space-between" w="50%">
        <Text color="#17171FCC" fontSize="lg" fontWeight="bold">
          {title}
        </Text>

        <Text color="#959595" fontSize="xs" my="20px">
          {text}
        </Text>

        <Button>Explore</Button>
      </Flex>

      <Box w="50%">
        <Image
          src={image}
          alt=""
          w="100%"
          h="100%"
          maxH={["120px", "180px"]}
          borderRadius="8px"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}

export default ShopCard;
