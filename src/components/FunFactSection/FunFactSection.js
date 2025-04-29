import React from 'react'
import CountUp from 'react-countup';

const funFact = [
    {
        title: '229',
        subTitle: 'Doctor',
    },
    {
        title: '32',
        subTitle: 'Hospital',
    },
    {
        title: '4321',
        subTitle: 'Patients',
    },
    {
        title: '210',
        subTitle: 'Labs',
    },


]


const FunFactSection = (props) => {
    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3><span><CountUp end={funfact.title} enableScrollSpy /></span>+</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="f-shape-1">
                <svg width="887" height="757" viewBox="0 0 887 757" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_235_1422)">
                        <circle cx="353" cy="223" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_1422" x="-181" y="-311" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_235_142" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="f-shape-2">
                <svg width="696" height="606" viewBox="0 0 696 606" fill="none">
                    <g opacity="0.6" filter="url(#filter0_f_235_1433)">
                        <circle cx="534" cy="534" r="234" />
                    </g>
                    <defs>
                        <filter id="filter0_f_235_1433" x="0" y="0" width="1068" height="1068"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_235_143" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;