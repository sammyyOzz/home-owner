import Footer from "@/components/footer";
import BecomeAPartner from "./become-a-partner";
import ExpectFromUs from "./expect-from-us";
import NeedHelp from "./need-help";
import PropertyDeals from "./property-deals";
import Shop from "./shop";
import Subscribe from "./subscribe";
import LandingTop from "./top";
import WatchOurVideo from "./watch-our-video";
import WhatOurCustomersAreSaying from "./what-our-customers-are-saying";

function Landing() {
  return (
    <>
      <LandingTop />
      <PropertyDeals />
      <ExpectFromUs />
      <Shop />
      <WhatOurCustomersAreSaying />
      <BecomeAPartner />
      <WatchOurVideo />
      <NeedHelp />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Landing;
