import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import OpeningTime from "./OpeningTime";
import FacilitySliderSec from "../Home-4/FacilitySliderSec";
import DeliciasFoodSec from "../Home2/DeliciasFoodSec";
import TestimonailSec from "../Home-3/TestimonailSec";
import FaqTwo from "../about/FaqTwo";

const DiningMain = () => {
  return (
    <>
      <Breadcrumb title="Dinning / Resturent" />
      <OpeningTime />
      <FacilitySliderSec />
      <DeliciasFoodSec />
      <TestimonailSec />
      <FaqTwo />
    </>
  );
};

export default DiningMain;
