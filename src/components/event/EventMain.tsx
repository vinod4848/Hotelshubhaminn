
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import EventSec from './EventSec';
import ServicesSlideSce from '../Home-4/ServicesSlideSce';
import FaqTwo from '../about/FaqTwo';
const EventMain = () => {
    return (
        <>
            <Breadcrumb title='Event'/>
            <EventSec/>
            <ServicesSlideSce customeClass=""/>
            <FaqTwo/>
        </>
    );
};

export default EventMain;