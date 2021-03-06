import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import { Link } from "react-router-dom";
import BackgroundPhoto from "../../assets/devices.jpg";
import {MdArrowDownward} from 'react-icons/lib/md';
import ArmyLogo from "../../assets/logos/army.png";
import USPTOLogo from "../../assets/logos/uspto.png";
import NavyLogo from "../../assets/logos/us-navy.png";
import FEMALogo from "../../assets/logos/fema-logo.png";
import IpsosLogo from "../../assets/logos/ipsos.png";
import CarsLogo from "../../assets/logos/cars.png";
import PPLogo from "../../assets/logos/pioneer-press.png";
import DPLogo from "../../assets/logos/denver-post.png";
import DFMLogo from "../../assets/logos/dfm.png";
import LOCLogo from "../../assets/logos/loc-white.svg";
import ConDevIcon from "../../assets/icons/concept-dev.svg";
import FrontEndDevIcon from "../../assets/icons/dev.svg";
import PrototypeIcon from "../../assets/icons/prototype.svg";
import UserResearchIcon from "../../assets/icons/user-research.svg";
import UsabilityIcon from "../../assets/icons/usability-test.svg";
import AgileIcon from "../../assets/icons/agile.svg";

class LandingPage extends Component {
    
    constructor(props) {
        super(props);
    }
    
    state = {
        showSkills: false,
        showClients: false
    }

    showSkills = event => {
        event.preventDefault();
        this.setState({ 
            showSkills: true, 
            showClients: false 
        });
    }
    
    showClients = event => {
        event.preventDefault();
        this.setState({ 
            showSkills: false, 
            showClients: true 
        });
    }
    
    hideSkillsAndClients = event => {
        event.preventDefault();
        this.setState({ 
            showSkills: false, 
            showClients: false 
        });
    }
    
    render(){
        return (
            <div key="landingpage" className="landing-page">
                <section className="title">
                    <div className="title-text text-standout">
                        <h1>Derek Gesin</h1>
                        <h2>User Experience Design</h2>
                        <p>I work with users, development teams, and stakeholders to design technological solutions for complex subjects.</p>
                        <div className="lp-navigation">
                            <button onClick={this.showSkills} className={['lp-menu-item', this.state.showSkills && 'active'].join(' ')}>What I Do</button>
                            <button onClick={this.showClients} className={['lp-menu-item', this.state.showClients && 'active'].join(' ')}>{"Who I've Worked With"}</button>
                        </div>
                    </div>
                    <div className="background mobile">
                        <div className="background-overlay"></div>
                        <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                        <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                    </div>
                </section>
                <section className={['skillset', this.state.showSkills && 'show'].join(' ')}>
                    <h2>What I Do</h2>
                    <div className="scroll-container">
                        <div className="skill">
                            <div className="skill-icon">
                                <img src={UserResearchIcon} alt="User Research"/>
                            </div>
                            <h3 className="skill-label">User Research</h3>
                            <span className="skill-description">Empathizing with users requires the ability to learn from and about them. I use methods such as interviews, contextual inquiries, card-sorting, and more to document {"users'"} needs and create a shared understanding of their problems within the project team.</span>
                        </div>
                        <div className="skill">
                            <div className="skill-icon">
                                <img src={ConDevIcon} alt="Concept Development"/>
                            </div>
                            <h3 className="skill-label">Concept Design</h3>
                            <span className="skill-description">Design is as much about facilitation as it is creation. Building something that is feasible, viable, and desireable takes a team of multiple discplines focusing their individual expertise while working together to solve the problem at hand. Through facilitating events such as design sprints, design studios, and user story mapping workshops, I have helped teams learn that design is not just the duty of the designer.</span>
                        </div>
                        <div className="skill">
                            <div className="skill-icon">
                                <img src={PrototypeIcon} alt="Prototyping"/>
                            </div>
                            <h3 className="skill-label">Wireframing and Prototyping</h3>
                    <span className="skill-description">Nothing spurs action on a project better than having something visual to discuss. I utilize tools such as Sketch, Atomic, and RealtimeBoard to quickly translate ideas into prototypes that can be shared with the team or tested with users. By having a solid feedback loop, I can quickly gain insights and turn around improved iterations of each design.</span>
                        </div>
                        <div className="skill">
                            <div className="skill-icon">
                                <img src={UsabilityIcon} alt="Usability"/>
                            </div>
                            <h3 className="skill-label">Usability</h3>
                            <span className="skill-description">All designs are merely assumptions until they get validated in front of users. Whether running guerilla testing to get quick feedback or organizing in-depth testing to gather quantitative data, I have learned to efficiently organize, facilitate, and analyze usability tests to gain valuable user insights.</span>
                        </div>
                        <div className="skill">
                            <div className="skill-icon">
                                <img src={FrontEndDevIcon} alt="Front-end Development"/>
                            </div>
                            <h3 className="skill-label">Front-end Development</h3>
                <span className="skill-description">Having a solid understanding of how things are built allows a designer to communicate in the same language as their teammates. I design with prototyping programs because of their speed, but I have also been working with code since I began in this industry. By staying up-to-date on industry best practices and tools (for instance, this site is built with ReactJS), I bring a holistic perspective to every project. This way, I can work directly with the development team to ensure that every user story is feasible and contains sufficient information for the developer to complete it.</span>
                        </div>
        
                    </div>
                    <div className="background-fade"></div>
                </section>
                <section className={['clients', this.state.showClients && 'show'].join(' ')}>
                    <h2>{"Who I've Worked With"}</h2>
                    <div className="background-fade"></div>
                    <div className="logo"><img src={ ArmyLogo } alt="US Patent and Trademark Logo" /></div>
                    <div className="logo"><img src={ FEMALogo } alt="Library of Congress Logo" /></div>
                    <div className="logo"><img src={ USPTOLogo } alt="US Patent and Trademark Logo" /></div>
                    <div className="logo"><img src={ LOCLogo } alt="Library of Congress Logo" /></div>
                    <div className="logo"><img src={ IpsosLogo } alt="Ipsos Logo" /></div>
                    <div className="logo"><img src={ DPLogo } alt="Denver Post Logo" /></div>
                    <div className="logo circle"><img src={ NavyLogo } alt="US Navy Logo" /></div>
                    <div className="logo"><img src={ DFMLogo } alt="Digital First Media Logo" /></div>
                    <div className="logo"><img src={ PPLogo } alt="Pioneer Press Logo" /></div>
                    <div className="logo"><img src={ CarsLogo } alt="Cars.com Logo" /></div>
                </section>
                <div className="background fixed wide-screen">
                    <div className="background-overlay"></div>
                    <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                    <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                </div>
            </div>
        );
    }
}

export default LandingPage;