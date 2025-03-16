import React from 'react';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import HowItWorks from './HowItWorks';
import Services from './Services';

const AboutPage = () => {
    return (
        <>
            <div className="space-y-10 max-w-7xl mx-auto mb-10">
                <AboutUs />
                <HowItWorks />
            </div>
            <Services />
            <div className="space-y-10 max-w-7xl mx-auto mt-10">
                <Gallery />
            </div>
        </>
    );
};

export default AboutPage;