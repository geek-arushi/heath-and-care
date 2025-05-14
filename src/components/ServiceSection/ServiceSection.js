import React, { useState, useEffect } from "react";
import { serviceService } from '../../api/apiService';
import { Link } from 'react-router-dom';

const ServiceSection = (props) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await serviceService.getAllServices();
                setServices(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError('Failed to load services');
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        // You could implement search functionality here
    }

    const filteredServices = services.filter(service => 
        service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <section className={`wpo-department-section section-padding ${props.dClass}`}>
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
                        <input 
                            className="search-doctor" 
                            type="text" 
                            placeholder="Search by department or doctors" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="submit-btn">Search Here</button>
                    </form>
                    <div className="department-doctor-wrap">
                        <div className="row">
                            {filteredServices.slice(0, 8).map((service, sitem) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={sitem}>
                                    <div className="department-single">
                                        <div className="department-single-img">
                                            <img src={service.Icon} alt="" />
                                        </div>
                                        <span>{service.title}</span>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
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

export default ServiceSection;