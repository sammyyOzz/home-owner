import { Box } from "@chakra-ui/react";
import { MotionImage } from "../motion-elements";
import { AnimatePresence } from "framer-motion";

export interface CarouselProps {
  images: string[];
  currentIndex: number;
  [anyProp: string]: any;
}

function Carousel({ images, currentIndex, ...props }: CarouselProps) {
  return (
    <Box w="400px" h="400px" overflow="hidden" pos="relative" bg="#f1eeeed8" {...props}>
      <AnimatePresence>
        <MotionImage
          key={currentIndex}
          src={images[currentIndex]}
          w="100%"
          h="100%"
          objectFit="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        />
      </AnimatePresence>
    </Box>
  );
}

export default Carousel;
