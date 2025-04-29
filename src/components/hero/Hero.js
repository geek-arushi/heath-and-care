import React from "react";
import { Link } from 'react-router-dom'
import { JackInTheBox, Slide } from "react-awesome-reveal";
import hero1 from '../../images/slider/1.jpg'
import hero2 from '../../images/icon/brain.svg'
import shape from '../../images/slider/line-1.png'


const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="static-hero" id='div'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                        <Slide direction="up" duration="800" triggerOnce="true">
                                            <Link onClick={ClickHandler} to="/services" className="slide-title-btn"> <span></span> 24/07 Emergency Service</Link>
                                        </Slide>
                                    </div>
                                    <div className="slide-sub-title">
                                        <Slide direction="up" duration="1000" triggerOnce="true">
                                            <h2>Doctor always ready for service.</h2>
                                        </Slide>
                                    </div>
                                    <div className="slide-text">
                                        <Slide direction="up" duration="1500" triggerOnce="true">
                                            <ul>
                                                <li>Prescriptions & treatment plans.</li>
                                                <li>Always available for emergency service.</li>
                                                <li>Low visit and even less with insurance.</li>
                                            </ul>
                                        </Slide>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btn">
                                        <Slide direction="up" duration="1600" triggerOnce="true">
                                            <Link onClick={ClickHandler} className="theme-btn" to="/appoinment">Online Appoinment</Link>
                                        </Slide>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src={hero1} alt="" />
                        <div className="hero-img-inner-boder"></div>
                    </div>
                    <div className="icon-1">
                        <div className="icon-img">
                            <JackInTheBox direction="up" duration="2000" triggerOnce="true">
                                <img src={hero2} alt="" />
                            </JackInTheBox>
                        </div>
                        <span>Neurologist</span>
                        <div className="icon-boder"></div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="696" height="839" viewBox="0 0 696 839" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_221_39)">
                        <circle cx="162" cy="305" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_221_39" x="-372" y="-229" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_221_39" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src={shape} alt="" />
            </div>
        </section>
    )
}

export default Hero;