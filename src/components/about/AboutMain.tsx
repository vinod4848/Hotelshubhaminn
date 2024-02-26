import React from "react";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import WellcomeAreaSec from "../Home2/WellcomeAreaSec";
import HrLine from "../common/HrLine/HrLine";
import FaqTwo from "./FaqTwo";

const AboutMain = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <WellcomeAreaSec />
      <HrLine />
      <FaqTwo />
    </>
  );
};

export default AboutMain;
