
import React from "react";
import HeroSection from "./HeroSection";
import PricingPlanSec from "../Home-4/PricingPlanSec";
import FeatureArea from "./FeatureArea"
import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import RoomSuiteSection from "./RoomSuiteSection";
import FeedBackSection from "./FeedBackSection";
import OffersSection from "./OffersSection";
import GallarySection from "./GallarySection";
const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <FeatureArea/>
      <AboutSection/>
      <RoomSuiteSection/>
      <GallarySection/>
      <PricingPlanSec
        classbg="pricing-plan-area pricing-spacing theme-bg-2"
        classbgDiv="bd-price-item white-bg"
      />
      {/* <OffersSection/> */}
      <AmenitiesSection/>
      <FeedBackSection/>
    </>
  );
};

export default HomeMain;
