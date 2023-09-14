import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

export interface TeamMemberCardProps {
  image: string;
  name: string;
  job: string;
}

function TeamMemberCard({ image, name, job }: TeamMemberCardProps) {
  return (
    <Flex
      p="25px 25px 30px 25px"
      direction="column"
      justify="space-between"
      bg="#B8A6C0"
      borderRadius="10px"
    >
      <Flex justify="center" w="100%" mb={10}>
        <Image src={image} alt="" w="80%" aspectRatio={1} />
      </Flex>

      <Box>
        <Text fontSize="sm" color="#fff" mb={3}>
          {name}
        </Text>
        <HStack>
          <Text fontSize="xs" color="#fff">
            {job}
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default TeamMemberCard;
