import BecomeAPartner from "./become-a-partner";
import ExpectFromUs from "./expect-from-us";
import PropertyDeals from "./property-deals";
import Shop from "./shop";
import LandingTop from "./top";
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
    </>
  );
}

export default Landing;
