import React from 'react';
import { Link } from "react-router-dom";
import AppoinmentFrom from '../AppoinmentFrom/AppoinmentFrom';
import cImg from '../../images/appoinment-shape.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const AppoinmentSec = () => {

    return(
        <section className="wpo-appoinment-section">
            <div className="container">
                <div className="appoinment-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12 col-12">
                            <div className="appoinment-text">
                                <Link onClick={ClickHandler} to="/appoinment" className="appoinment-btn">Appoinment Now</Link>
                                <h2>Appoinment
                                    for free online
                                    consultation.</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-12">
                            <div className="appoinment-right">
                                <AppoinmentFrom/>
                            </div>
                        </div>
                    </div>
                    <div className="shape-1">
                        <img src={cImg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default AppoinmentSec;
