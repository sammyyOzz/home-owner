import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import ProductsServicesCard from "@/components/products-services-card";
import AgentsIcon from "@/icons/products-and-services/agents";
import DevelopersIcon from "@/icons/products-and-services/developers";
import PartnersIcon from "@/icons/products-and-services/partners";
import buyerImage from "@/assets/buyer.png";
import landlordImage from "@/assets/landlord.png";
import tenantImage from "@/assets/tenant.png";

function OurProductsAndServices() {
  return (
    <Box p="50px 5%">
      <Heading as="h2" color="primary" fontSize="lg" mb={1}>
        OUR
      </Heading>
      <Heading as="h2" fontSize={["25px", null, "30px", "40px"]} mb={"70px"}>
        Products & Services
      </Heading>

      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        <ProductsServicesCard
          icon={<AgentsIcon fontSize="4xl" />}
          title="For Agents"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
        <ProductsServicesCard
          icon={<Image src={buyerImage} alt="buyer" />}
          title="For Buyers"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
        <ProductsServicesCard
          icon={<Image src={landlordImage} alt="Landlord" />}
          title="For Landlords"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
        <ProductsServicesCard
          icon={<DevelopersIcon fontSize="4xl" />}
          title="For Developers"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
        <ProductsServicesCard
          icon={<Image src={tenantImage} alt="tenant" />}
          title="For Tenants"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
        <ProductsServicesCard
          icon={<PartnersIcon fontSize="4xl" />}
          title="For Partners"
          text="Get access to all your favourite home items at an affordable rate in one place for easy purchase and delivery to your home."
        />
      </SimpleGrid>
    </Box>
  );
}

export default OurProductsAndServices;
