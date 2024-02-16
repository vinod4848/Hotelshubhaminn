
import React from 'react';
import Breadcrumb from '../../components/common/breadcrumb/Breadcrumb';
import WellcomeAreaSec from '../Home2/WellcomeAreaSec';
import PricingPlanSec from '../Home-4/PricingPlanSec';
import HrLine from '../common/HrLine/HrLine';
import FaqTwo from './FaqTwo';
import Brands from './Brands';


const AboutMain = () => {
    return (
        <>
          <Breadcrumb title="About Us"/>
          <WellcomeAreaSec/>
          <PricingPlanSec classbg="pricing-plan-area pricing-spacing theme-bg-2" classbgDiv="bd-price-item white-bg"/>
          <HrLine/>
          <FaqTwo/>
          <Brands bgColor=" " pt="pt-150" pb="pb-150"/>
        </>
    );
};

export default AboutMain;