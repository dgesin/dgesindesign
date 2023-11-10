import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import MHUPhoto from '../../assets/mhus.jpg';
import ArmyPhoto from '../../assets/mission-planning.jpg';
import ArmyLogo from "../../assets/logos/army.png";
import FEMALogo from "../../assets/logos/fema-logo.png";
import BGPhoto from '../../assets/design-board.png';
import NavyLogo from "../../assets/logos/us-navy.png";
import KneeboardPhoto from '../../assets/kneeboard.jpg';
import USPTOLogo from "../../assets/logos/uspto.png";
import USPTOPhoto from '../../assets/uspto.jpg';
import DFMLogo from "../../assets/logos/dfm.png";
import DFMPhoto from '../../assets/test-lab-4.jpg';
import './Projects.css';


class ProjectsLanding extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="projects-page">
                <div className="projects-description">
                    <h1>Projects</h1>
                    <p>{"Whether it's building a user testing lab for Digital First Media or exploring natural language processing for the Navy, every project I've worked on has helped me grow as a designer. The following case studies should give you a better feel for what I do."}</p>
                    <div className="scroll-navigation vertical">
                        <button onClick={() => scrollToComponent(this.Skillset, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item'>Interaction Design</button>
                        <button onClick={() => scrollToComponent(this.Clients, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item'>Design Workshops</button>
                        <button onClick={() => scrollToComponent(this.Skillset, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item'>Usability Testing</button>
                        <button onClick={() => scrollToComponent(this.Clients, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item'>User Research</button>
                    </div>
                </div>
                <div className="projects">
                    <ul className="case-studies">
                        <li>
                            <Link to={`${this.props.match.url}/us-army`} className="cs-link" project="USArmy">
                                <span className="cs-logo"><img src={ ArmyLogo } alt="US Army Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Building Applications for Army Commanders</span>
                                </span>
                                <span className="cs-photo"><img src={ArmyPhoto} alt="Mission planning" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/fema`} className="cs-link" project="FEMA">
                                <span className="cs-logo"><img src={ FEMALogo } alt="FEMA Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Tracking Manufactured Homes for FEMA</span>
                                </span>
                                <span className="cs-photo"><img src={MHUPhoto} className="cs-photo" alt="Mission planning" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/kneeboard`} className="cs-link" project="FEMA">
                                <span className="cs-logo"><img src={ NavyLogo } alt="FEMA Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Building a Kneeboard Application for Navy F-18 Pilots</span>
                                </span>
                                <span className="cs-photo"><img src={KneeboardPhoto} className="cs-photo" alt="Mission planning" /></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/dfm`} className="cs-link" project="FEMA">
                                <span className="cs-logo"><img src={ DFMLogo } alt="USPTO Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Building a User Research Lab</span>
                                </span>
                                <span className="cs-photo"><img src={DFMPhoto} className="cs-photo" alt="US Patent and Trademark Office campus" /></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="background-fade"></div>
            </div>
        );
    }    
}


export default ProjectsLanding;
