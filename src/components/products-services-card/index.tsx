import { Box, Flex, Text } from "@chakra-ui/react";

export interface ProductsServicesCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function ProductsServicesCard({ icon, title, text }: ProductsServicesCardProps) {
  return (
    <Box p="10" borderRadius="10px" boxShadow="0 0 22px #eeebeb">
      <Flex justify="center" mb={3} fontSize="2xl" borderRadius="10px">
        {icon}
      </Flex>
      <Text color="#17171FCC" mb={2} fontSize="18px" fontWeight="bold" textAlign="center">
        {title}
      </Text>
      <Text color="#73788C" fontSize="sm" textAlign="center">
        {text}
      </Text>
    </Box>
  );
}

export default ProductsServicesCard;
