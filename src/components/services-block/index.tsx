import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Button from "../button";
import Select from "../select";
import LocationIcon from "@/icons/location";
import SearchIcon from "@/icons/search";

const services = ["Buy", "Sell", "Rent", "List", "Shop"];

function ServicesBlock() {
  return (
    <Box w="88%" id="services-block">
      <Flex
        justify="space-between"
        align="center"
        bg="#fff"
        px="25px"
        w={["87%", "70%", "50%", "40%"]}
        h="60px"
        borderRadius="10px 10px 0 0"
      >
        {services.map((service, i) => (
          <Text key={i} color="#17171FCC" fontWeight="bold" fontSize={["sm", null, null, "md"]}>
            {service}
          </Text>
        ))}
      </Flex>

      <Flex
        direction={["column", null, "row"]}
        justify="space-between"
        align={["flex-start", null, null, null, "center"]}
        borderRadius="0 10px 10px 10px"
        bg="#fff"
        p="20px 25px"
        gap="20px"
        boxShadow="0 7px 7px #24415D40"
      >
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={2}
          w={["100%", null, "70%"]}
        >
          <GridItem colSpan={[12, null, 6, 4, 3]}>
            <VStack align="flex-start">
              <Text pl={4} fontWeight="bold" fontSize="sm" color="#17171FCC">
                Location
              </Text>
              <Select
                fullWidth
                placeholder="Selct your city"
                icon={<LocationIcon color="#545454" />}
              >
                <option>Abia</option>
              </Select>
            </VStack>
          </GridItem>

          <GridItem colSpan={[12, null, 6, 4, 3]}>
            <VStack align="flex-start">
              <Text pl={4} fontWeight="bold" fontSize="sm" color="#17171FCC">
                Property Type
              </Text>
              <Select fullWidth placeholder="Selct Property Type">
                <option>one</option>
              </Select>
            </VStack>
          </GridItem>

          <GridItem colSpan={[12, null, 6, 4, 3]}>
            <VStack align="flex-start">
              <Text pl={4} fontWeight="bold" fontSize="sm" color="#17171FCC">
                Beds
              </Text>
              <Select fullWidth placeholder="Selct Property Type">
                <option>one</option>
              </Select>
            </VStack>
          </GridItem>

          <GridItem colSpan={[12, null, 6, 4, 3]}>
            <VStack align="flex-start">
              <Text pl={4} fontWeight="bold" fontSize="sm" color="#17171FCC">
                Price Range
              </Text>
              <Select fullWidth placeholder="Selct Price Range">
                <option>one</option>
              </Select>
            </VStack>
          </GridItem>
        </Grid>

        <Flex w={["100%", null, "30%"]} align="center" justify="space-between" gap={5}>
          <VStack align="flex-start">
            <Text pl={4} fontWeight="bold" fontSize="sm" color="#17171FCC" visibility="hidden">
              hidden
            </Text>
            <Flex
              justify="center"
              align="center"
              bg="#EBEEF1"
              w="100%"
              borderRadius="8px"
              p="6px 15px"
            >
              <Text fontSize="sm" color="#000000CC" fontWeight="bold">
                Check Availability
              </Text>
            </Flex>
          </VStack>

          <Button pl="25px" pr="30px" py="20px" leftIcon={<SearchIcon fill="none" />}>
            Search
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ServicesBlock;
