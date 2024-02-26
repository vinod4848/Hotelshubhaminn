import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TestimonialSec from "../Home-4/TestimonialSec";

import NeaarmeArea from "./nearmeplacesArea";
const NearArea = () => {
  return (
    <>
      <Breadcrumb title="Nearby places to visit" />
      <NeaarmeArea />
      <TestimonialSec pb="pb-150" />
    </>
  );
};

export default NearArea;
