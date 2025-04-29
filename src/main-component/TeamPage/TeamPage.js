import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'
import PageTitle from '../../components/pagetitle/PageTitle.js'
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Footer from '../../components/footer/Footer.js'


const TeamPage = (props) => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={'Our Doctor’s'} pagesub={'Team'} />
            <TeamSectionS2/>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
