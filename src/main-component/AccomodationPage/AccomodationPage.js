import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';
import CoupleSection3 from '../../components/CoupleSection3/CoupleSection3';
import EventSection from '../../components/EventSection/EventSection';
import VideoSection from '../../components/VideoSection';
import PartnerSection from '../../components/PartnerSection';
import vImg from '../../images/video-img/img-2.jpg'

const AccomodationPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Accomodation'} pagesub={'Accomodation'}/> 
            <WeddingDate2 pbClass={'pb-0'}/>
            <CoupleSection3 cClass={'pt-160'}/>
            <VideoSection vimg={vImg}/>
            <EventSection/>
            <PartnerSection pClass={'section-padding pt-0'} />
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AccomodationPage;
