import ContactMain from '@/components/contact/ContactMain';
import NearArea from '@/components/nearmeplaces/nearmeplaces';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const ContactPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <NearArea/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default ContactPage;