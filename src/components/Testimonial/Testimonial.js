import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/02.jpg'
import ts2 from '../../images/testimonial/01.jpg'
import ts3 from '../../images/testimonial/03.jpg'
import shape from '../../images/testimonial-shape.png'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. standard text ever since the 1500s , when an unknown printer book survived five centuries",
        Title: 'Allan Roberson',
        sub: 'Medicine Doctor',
    },
    {
        id: '01',
        tImg: ts2,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. standard text ever since the 1500s , when an unknown printer book survived five centuries",
        Title: 'Aliza Anny',
        sub: "Pathologists Doctor",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. standard text ever since the 1500s , when an unknown printer book survived five centuries",
        Title: 'Robert William',
        sub: "Gastroenterology Doctor",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="testimonial-shape">
                <img src={shape} alt="" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12">
                        <div className="testimonial-left">
                            <a href="testimonial.html" className="theme-btn">Testimonial</a>
                            <div className="fun-fact-grids clearfix">
                                <div className="grid">
                                    <div className="info">
                                        <h3>
                                            <span className="odometer">6,000</span>
                                            <i className="fa fa-plus" aria-hidden="true"></i>
                                        </h3>
                                        <p>Patient’s all around
                                            the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="testimonial-right">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 co-12">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="testimonial-right-img" key={tsm}>
                                                    <img src={tesmnl.tImg} alt="" />
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <div className="col-lg-8 col-12">
                                    <div className="slider-nav">
                                        <Slider
                                            asNavFor={nav1}
                                            ref={(slider2) => setNav2(slider2)}
                                            slidesToShow={1}
                                            fade={true}
                                            arrows={false}
                                            dots={true}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                        >
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-right-text" key={tsm}>
                                                        <div className="wpo-testimonial-text">
                                                            <p>"{tesmnl.Des}"</p>
                                                            <h3>{tesmnl.Title}</h3>
                                                            <span>{tesmnl.sub}</span>

                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </Slider>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonial;