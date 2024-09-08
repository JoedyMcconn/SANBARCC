"use client"

import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ShopSection from "@/app/Home/components/ShopSection";
import JobOpportunitiesSection from "@/app/Home/components/JobOpportunitiesSection";
import MusicalRoadSection from "@/app/Home/components/MusicalRoadSection";

// Lazy loading components
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
// const ContactSection = React.lazy(() => import('./components/ContactSection'));

const Home = () => {
    useEffect(() => {
        // Using pagehide/pageshow instead of unload to keep bfcache intact
        const handlePageHide = (event: PageTransitionEvent) => {
            if (event.persisted) {
                // Page is about to be unloaded, but cached for bfcache
            }
        };

        window.addEventListener('pagehide', handlePageHide);
        window.addEventListener('pageshow', handlePageHide);

        return () => {
            window.removeEventListener('pagehide', handlePageHide);
            window.removeEventListener('pageshow', handlePageHide);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>San Bar Construction Corp.</title>
                <meta name="San Bar Construction Corp." content="San Bar Construction Corp - " />
            </Helmet>
            <Suspense fallback={<div className="">Loading...</div>}>
                <HeroSection />
                <AboutSection />
                <JobOpportunitiesSection />
                <ServicesSection />
                <MusicalRoadSection />
                <ShopSection />
            </Suspense>
        </>
    );
};

export default Home;
