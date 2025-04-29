import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Team from '../../api/team';
import Footer from '../../components/footer/Footer.js'
import cImg1 from '../../images/certificates/1.jpg'
import cImg2 from '../../images/certificates/2.jpg'
import cImg3 from '../../images/certificates/3.jpg'
import cImg4 from '../../images/certificates/4.jpg'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Team.find(item => item.slug === slug)


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <PageTitle pageTitle={TeamDetails.name} pagesub={TeamDetails.title} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <img src={TeamDetails.tImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>{TeamDetails.name}</h2>
                                    <ul>
                                        <li>Position: <span>Siniour</span></li>
                                        <li>Practice Area:<span>{TeamDetails.title}</span></li>
                                        <li>Experience:<span>12 Years</span></li>
                                        <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                        <li>Phone:<span>+00 568 746 987</span></li>
                                        <li>Email:<span>youremail@gmail.com</span></li>
                                        <li>Fax:<span>568 746 987</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence, paragraph, page, etc.) that doesn't distract from thelayout. A practice not without controversy, laying out pages withmeaningless filler text can be very useful when the focus is meantto be on design, not content.There are many variations of passages of Lorem Ipsum available.</p>
                                    <p>But the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text generators on the Internet tend to repeat.</p>
                                </div>
                                <div className="at-progress">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress yellow">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">25+</div>
                                                <div className="progress-name"><span>Award</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">90%</div>
                                                <div className="progress-name"><span>Happy Client</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress pink">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">95%</div>
                                                <div className="progress-name"><span>Project Done</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress green">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">1000+</div>
                                                <div className="progress-name"><span>Project</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                                        <li>If you are going to use a passage of Lorem Ipsum.</li>
                                        <li>Very popular during the Renaissance. </li>
                                        <li>Many desktop publishing packages and web page editors now.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget certificate">
                                    <h2>Certificates</h2>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <img src={cImg1} alt="" className="img img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <img src={cImg2} alt="" className="img img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <img src={cImg3} alt="" className="img img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <div className="certificate-img">
                                                <div className="img-holder">
                                                    <img src={cImg4} alt="" className="img img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
