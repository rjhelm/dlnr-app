import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
// import PaymentForm from '../components/sections/PaymentForm';

const Home = () => {
    return (
        <>
            <Hero className="illustration-section-01" />
            <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
            <FeaturesTiles />
            <Testimonial topDivider />
            {/* <PaymentFrom /> */}
            <Cta split />
        </>
    );
}

export default Home;