import { Flex, Image, Text } from "@chakra-ui/react";
import watchVideoImage1 from "@/assets/watch-our-video-1.png";
import watchVideoImage2 from "@/assets/watch-our-video-2.png";

function WatchOurVideo() {
  return (
    <Flex bgImage={watchVideoImage2} justify="center" align="center" h="500px" position="relative">
      <Text
        fontSize="lg"
        fontWeight="bold"
        color="#fff"
        position="absolute"
        top={0}
        left="50%"
        transform="translate(-50%, 20px)"
      >
        Watch our video
      </Text>
      <Image src={watchVideoImage1} h="75%" />
    </Flex>
  );
}

export default WatchOurVideo;
