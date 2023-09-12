import ShopCard from "@/components/shop-card";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import shop1 from "@/assets/shop-1.jpeg";
import shop2 from "@/assets/shop-2.jpeg";
import shop3 from "@/assets/shop-3.jpeg";
import shop4 from "@/assets/shop-4.jpeg";
import Button from "@/components/button";

function Shop() {
  return (
    <Box pb="100px">
      <Heading as="h2" color="primary" fontSize={["25px", null, "30px", "40px"]} ml="10%" mb={3}>
        Shop
      </Heading>

      <SimpleGrid w="85%" ml="12%" columns={[1, null, null, 2]} spacingX={10} spacingY={7} mb={5}>
        <ShopCard
          title="Home Items"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
          image={shop1}
        />
        <ShopCard
          title="Food & Groceries"
          text="Easily order your favorite meals, food or groceries and have them delivered to you at your convenience.
          As a Homeowner, you do not need to stress."
          image={shop2}
        />
        <ShopCard
          title="Home Signature Furniture"
          text="HomeOwner signature furniture are unique pieces made mostly from woods crafted in Africa to distinguish your space"
          image={shop3}
        />
        <ShopCard
          title="Building Materials"
          text="If the quality is not premium, you will not find it on Homeowner. We bridging the gap between quality and access."
          image={shop4}
        />
      </SimpleGrid>

      <Flex justify="center">
        <Button
          bg="none"
          border="1px solid"
          borderColor="#000"
          color="primary"
          // _hover={{
          //   bg: "primary",
          //   color: "#fff",
          // }}
        >
          View More
        </Button>
      </Flex>
    </Box>
  );
}

export default Shop;
