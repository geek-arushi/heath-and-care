import React from "react";
import Services from '../../api/service'
import { Link } from 'react-router-dom'

const DepertmentSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    

    return (
        <section className={`wpo-department-section-s2 section-padding ${props.dClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Department & Doctors</span>
                            <h2>Find the best doctor or department
                                for perfect treatment.</h2>
                        </div>
                    </div>
                </div>
                <div className="department-wrap">
                    <form className="departmen-search" onSubmit={SubmitHandler}>
                        <input className="search-doctor" type="text" placeholder="Search by department or doctors" />
                        <button type="submit" className="submit-btn">Search Here</button>
                    </form>
                    <div className="department-doctor-wrap">
                        <div className="row">
                            {Services.slice(0, 8).map((service, sitem) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={sitem}>
                                    <div className="department-single">
                                        <div className="department-single-img">
                                            <img src={service.Icon} alt="" />
                                        </div>
                                        <span>{service.title}</span>
                                        <Link onClick={ClickHandler} to={`/department-single/${service.slug}`}>
                                            <i className="ti-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default DepertmentSection;