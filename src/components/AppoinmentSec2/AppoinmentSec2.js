import React from 'react';
import AppoinmentFrom from '../AppoinmentFrom/AppoinmentFrom';

const AppoinmentSec2 = () => {

    return (
        <section className="wpo-appoinment-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Appoinment Now</span>
                            <h2>Appoinment for free online consultation</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="appoinment-wrap">
                            <div className="appoinment-right">
                                <AppoinmentFrom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AppoinmentSec2;
