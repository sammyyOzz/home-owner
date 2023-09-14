import { Box, Text } from "@chakra-ui/react";

export interface OurValuesCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function OurValuesCard({ icon, title, text }: OurValuesCardProps) {
  return (
    <Box p={6}>
      <Box mb={3} w="fit-content" p={3} boxShadow="5px 4px 20px #e6e3e3" borderRadius="10px">
        {icon}
      </Box>
      <Text color="#17171FCC" mb={2} fontSize="18px" fontWeight="bold">
        {title}
      </Text>
      <Text color="#73788C" fontSize="sm">
        {text}
      </Text>
    </Box>
  );
}

export default OurValuesCard;
