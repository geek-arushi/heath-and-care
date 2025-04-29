import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/team'
import { Slide } from "react-awesome-reveal";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {
    return (
        <section className={`wpo-team-section section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wpo-section-title">
                            <span>Meet Great Doctor’s</span>
                            <h2>High qualified doctor’s</h2>
                        </div>
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        {Team.slice(0, 6).map((team, tm) => (
                            <div className="col-lg-4 col-md-6 col-12" key={tm}>
                                <Slide direction="up" duration={team.animation} triggerOnce="true">
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
                        <Link onClick={ClickHandler} to="/team" className="theme-btn">All Doctor’s</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSectionS2;