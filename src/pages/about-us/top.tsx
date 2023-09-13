import Carousel from "@/components/carousel";
import { Box, HStack } from "@chakra-ui/react";
import img1 from "@/assets/landing-top-1.png";
import img2 from "@/assets/become-a-partner-2.png";
import img3 from "@/assets/shop-1.jpeg";
import img4 from "@/assets/shop-2.jpeg";
import img5 from "@/assets/shop-3.jpeg";
import useCarousel from "@/hooks/use-carousel";
import Button from "@/components/button";

const images = [img1, img2, img3, img4, img5];

function Top() {
  const [currentIndex, { handlePrevious, handleNext }] = useCarousel(images.length);

  return (
    <Box px="5%">
      <Carousel images={images} currentIndex={currentIndex} />

      <HStack mt={5}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </HStack>
    </Box>
  );
}

export default Top;
