import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FacilitysOneSec from "../Home-3/FacilitysOneSec";
import PricingPlanSec from "../Home-4/PricingPlanSec";
import OfferSec from "./OfferSec";

const OfferMain = () => {
  return (
    <>
      <Breadcrumb title="Promotions & Offers" />
      <OfferSec />
      <FacilitysOneSec />
      <PricingPlanSec
        classbg="pricing-plan-area pricing-spacing theme-bg-2"
        classbgDiv="bd-price-item white-bg"
      />
    </>
  );
};

export default OfferMain;