import { Box, Text } from "@chakra-ui/react";

export interface ExpectFromUsCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function OurValuesCard({ icon, title, text }: ExpectFromUsCardProps) {
  return (
    <Box p={6}>
      <Box mb={2}>{icon}</Box>
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
