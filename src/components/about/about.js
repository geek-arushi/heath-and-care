import React from 'react'
import abimg from '../../images/about.jpg'
import { Link } from "react-router-dom";

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt="" />
                            </div>
                            <div className="wpo-about-exprience">
                                <div className="tp-fun-fact-grids clearfix">
                                    <div className="grid">
                                        <div className="info">
                                            <h3>
                                                <span className="odometer" data-count="229">229</span>+
                                            </h3>
                                            <p>Doctor’s</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span> About Us </span>
                            <h2>We are trusted The Best Certificate Healthcare. </h2>
                            <ul>
                                <li>Scientific Skills For getting a better result</li>
                                <li>Communication Skills to getting in touch</li>
                                <li>A Career Overview opportunity Available</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn" to="/about">Know More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;