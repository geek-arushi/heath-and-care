import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { teamService } from '../../api/apiService'
import { Slide } from "react-awesome-reveal";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await teamService.getAllTeamMembers();
                setTeamMembers(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching team members:', err);
                setError('Failed to load team members');
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <section className={`wpo-team-section section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Meet Great Doctor's</span>
                            <h2>High qualified doctor's</h2>
                        </div>
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        {teamMembers.slice(0, 3).map((team, tm) => (
                            <div className="col-lg-4 col-md-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation || 1000} triggerOnce="true">
                                    <div className="team-single">
                                        <div className="team-boder-shapes-1">
                                            <div className="team-single-img">
                                                <img src={team.tImg} alt="" />
                                            </div>
                                            <div className="team-single-text">
                                                <h2><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                                <span>{team.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                    <div className="team-all">
                        <Link onClick={ClickHandler} to="/team" className="theme-btn">All Doctor's</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;