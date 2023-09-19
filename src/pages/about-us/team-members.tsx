import TeamMemberCard from "@/components/team-member-card";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import img1 from "@/assets/team-member-1.png";
import img2 from "@/assets/team-member-2.png";
import img3 from "@/assets/team-member-3.png";

function TeamMembers() {
  return (
    <Box p="50px 5%">
      <Heading as="h2" color="primary" fontSize="lg" mb={1}>
        Meet
      </Heading>
      <Heading as="h2" fontSize={["25px", null, "30px", "40px"]} mb="40px">
        Our Team Members
      </Heading>

      <Flex gap="80px" justify="space-between" direction={["column", null, null, "row"]}>
        <TeamMemberCard name="Prince Mohammed-Kolawole Salau" job="Founder & CEO" image={img1} />
        <Box w={["100%", null, null, "75%"]}>
          <SimpleGrid columns={[1, 2, 3]} spacing={5}>
            <TeamMemberCard name="Jennifer" job="CX Head" image={img1} />
            <TeamMemberCard name="Elijah Daniel" job="CTO" image={img2} />
            <TeamMemberCard name="Zakariya Buhari" job="Product Designer" image={img3} />
          </SimpleGrid>
          <Text fontSize="sm" color="#000000E5" mt="40px">
            Our Clan are highly motivated people with a mindset innovative enough to see problems,
            proffer solutions and implement them in ways that supersedes expectations. They are our
            first line of care trained to show leadership and be intuitive to your needs.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default TeamMembers;
