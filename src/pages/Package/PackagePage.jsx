import React from 'react';
import FAQSection from './FAQSection';
import PricingPlans from './PricingPlans';
import PricingTable from './PricingTable';

const Package = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-10 mb-12">
            <PricingPlans />
            <PricingTable />
            <FAQSection />
        </div>
    );
};

export default Package;