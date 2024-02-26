import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import RoomsSlider from "./RoomsSlider";
import FacilitysOneSec from "../Home-3/FacilitysOneSec";
import FeatureAreaSec from "../Home2/FeatureAreaSec";

const RoomTwoMain = () => {
  return (
    <>
      <Breadcrumb title="Room & Suites 2" />
      <RoomsSlider />
      <FacilitysOneSec />
      <FeatureAreaSec customeCalss="theme-bg-2" />
    </>
  );
};

export default RoomTwoMain;
