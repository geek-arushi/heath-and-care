import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import FunFactSection from '../../components/FunFactSection/FunFactSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import AppoinmentSec2 from '../../components/AppoinmentSec2/AppoinmentSec2';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About />
            <ServiceSection dClass={'wpo-department-section-s2'}/>
            <WhyChoose />
            <TeamSection tClass={'wpo-team-section-s2'}/>
            <FunFactSection/>
            <AppoinmentSec2 />
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
