import Footer from "@/components/footer";
import GetInTouch from "./get-in-touch";
import OurCommitment from "./our-commitment";
import OurMission from "./our-mission";
import OurProductsAndServices from "./our-products-and-services";
import OurStory from "./our-story";
import OurValues from "./our-values";
import OurVision from "./our-vision";
import TeamMembers from "./team-members";
import Top from "./top";

function AboutUs() {
  return (
    <>
      <Top />
      <OurVision />
      <OurStory />
      <OurMission />
      <OurValues />
      <OurProductsAndServices />
      <TeamMembers />
      <OurCommitment />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default AboutUs;
