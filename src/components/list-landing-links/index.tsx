import { Flex, Text } from "@chakra-ui/react";

const links = [
  "Home",
  "About",
  "Buy",
  "Sell",
  "Pay-As-You-Stay",
  "List",
  "Shop",
  "Utilities",
  "Home Service",
  "My Properties",
  "Project",
  "Become a Partner",
];

function ListLandingLinks() {
  return (
    <Flex justify="center" gap={5} pt={5}>
      {links.map((link, i) => (
        <Text key={i} color="#fff" fontSize="sm" fontWeight="bold">
          {link}
        </Text>
      ))}
    </Flex>
  );
}

export default ListLandingLinks;
