
import React from "react";
import HeroSection from "./HeroSection";
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
      <OffersSection/>
      <AmenitiesSection/>
      <FeedBackSection/>
    </>
  );
};

export default HomeMain;
