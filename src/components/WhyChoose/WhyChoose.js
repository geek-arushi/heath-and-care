import React from 'react';
import { Link } from 'react-router-dom'
import wh1 from '../../images/service/01.jpg'
import wh2 from '../../images/service/02.jpg'
import wh3 from '../../images/service/03.jpg'
import shape from '../../images/service-shape-2.png'

const WhyChoose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-service-section section-padding">
            <div className="service-shape-1">
                <svg width="794" height="783" viewBox="0 0 794 783" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_225_6)">
                        <circle cx="534" cy="249" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_225_6" x="0" y="-285" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_225_6" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                        <div className="service-left">
                            <div className="wpo-section-title">
                                <span>Why Choose Us?</span>
                                <h2>Best service and
                                    expert doctor is here.</h2>
                            </div>
                            <div className="service-left-wrap">
                                <Link onClick={ClickHandler} to="/services" className="service-single-btn mr-20">
                                    Emergency Cases
                                </Link>
                                <Link onClick={ClickHandler} to="/services" className="service-single-btn">
                                    Modern Clinic
                                </Link>
                                <Link onClick={ClickHandler} to="/contact" className="service-single-btn mr-20">
                                    24/7 Support
                                </Link>
                                <Link onClick={ClickHandler} to="/appoinment" className="service-single-btn">
                                    Easy Online Appoinment
                                </Link>
                                <Link onClick={ClickHandler} to="/team" className="service-single-btn mr-20">
                                    Expert Doctor’s
                                </Link>
                                <Link onClick={ClickHandler} to="/services" className="service-single-btn">
                                    100% Secure
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-right">
                <div className="service-right-wrap">
                    <div className="service-right-img-1">
                        <img src={wh1} alt="" />
                        <div className="service-right-img-boder"></div>
                    </div>
                    <div className="service-img-2">
                        <img src={wh2} alt="" />
                        <div className="service-img-boder"></div>
                    </div>
                </div>
                <div className="service-right-wrap-2">
                    <div className="service-img-3">
                        <img src={wh3} alt="" />
                        <div className="service-img-boder"></div>
                    </div>
                    <div className="fun-fact-grids clearfix">
                        <div className="grid">
                            <div className="info">
                                <h3>
                                    <span className="odometer" data-count="99">99</span>
                                    <i className="fa fa-percent" aria-hidden="true"></i>
                                </h3>
                                <p>Positive Rating</p>
                                <div className="icon">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-shape-2">
                <img src={shape} alt="" />
            </div>
        </section>
    );
}

export default WhyChoose;