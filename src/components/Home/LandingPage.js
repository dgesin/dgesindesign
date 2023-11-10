import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import scrollToComponent from 'react-scroll-to-component';
import { Link } from "react-router-dom";
import BackgroundPhoto from "../../assets/devices.png";
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
                    <div className="title-text">
                        <h1>Derek Gesin</h1>
<<<<<<< HEAD
                        <h2>User Experience Design TEST</h2>
=======
                        <h2>User Experience Design</h2>
>>>>>>> FETCH_HEAD
                        <p>I work with users, development teams, and stakeholders to design technological solutions for complex subjects.</p>
                        <div className="scroll-navigation">
                            <button onClick={() => scrollToComponent(this.Skillset, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item two-items'>What I Do</button>
                            <button onClick={() => scrollToComponent(this.Clients, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})} className='scroll-menu-item two-items'>{"Who I've Worked With"}</button>
                        </div>
                    </div>
                    <div className="background mobile">
                        <div className="background-overlay"></div>
                        <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                        <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                    </div>
                    <div className="background wide-screen">
                        <div className="background-overlay"></div>
                        <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                        <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                        <div className="background-fade rotate"></div>
                    </div>
                </section>
                <section className="skillset" ref={(section) => { this.Skillset = section; }}>
                    <h2>What I Do</h2>
                    <div className="skill">
                        <div className="skill-icon">
                            <div>
                                <img src={PrototypeIcon} alt="Prototyping"/>
                            </div>
                        </div>
                        <div className="skill-details">
                            <div className="centered-content">
                                <h3 className="skill-label">Interaction Design</h3>
                                <p className="skill-description">Nothing spurs action on a project better than having something visual to discuss. I utilize a mix of design tools to quickly translate ideas into wireframes, mockups, and interactive prototypes that can be shared with the team or tested with users. By having a solid feedback loop, I can quickly gain insights and turn around improved iterations to develop concepts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">
                            <div>
                                <img src={UsabilityIcon} alt="Usability"/>
                            </div>
                        </div>
                        <div className="skill-details">
                            <div className="centered-content">
                                <h3 className="skill-label">Usability Testing</h3>
                                <p className="skill-description">All designs are merely assumptions until they get validated in front of users. Whether running guerilla testing to get quick feedback or organizing in-depth testing to gather quantitative data, I am able to efficiently organize, facilitate, and analyze usability tests to gain valuable user insights.</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">
                            <div>
                                <img src={UserResearchIcon} alt="User Research"/>
                            </div>
                        </div>
                        <div className="skill-details">
                            <div className="centered-content">
                                <h3 className="skill-label">User Research</h3>
                                <p className="skill-description">With over 10 years of interviewing experience and a host of research methods under my belt, I am skilled at empathizing with users and documenting user data to create a shared understanding of their needs within the project team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">
                            <div>
                                <img src={ConDevIcon} alt="Design Workshops"/>
                            </div>
                        </div>
                        <div className="skill-details">
                            <div className="centered-content">
                                <h3 className="skill-label">Design Workshops</h3>
                                <p className="skill-description">The best designs happen when teams effectively utilize their various skills to solve problems for their users. Through facilitating events such as design sprints, design studios, and user story mapping workshops, I help teams find feasible, viable, and desireable solutions to build.</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">
                            <div>
                                <img src={FrontEndDevIcon} alt="Front-end Development"/>
                            </div>
                        </div>
                        <div className="skill-details">
                            <div className="centered-content">
                                <h3 className="skill-label">Front-end Development</h3>
                                <p className="skill-description">While I typically use design tools to prototype quickly, I have also been coding for years. Having knowledge of what developers need brings a holistic perspective to my designs. I work directly with the development team to ensure that user stories are feasible and contain sufficient information to be completed as designed.</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/projects`} className="button view-projects">View Projects</Link>    
                </section>
                <section className="clients" ref={(section) => { this.Clients = section; }}>
                    <h2>{"Organizations I've Worked With"}</h2>
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
            </div>
        );
    }
}

export default LandingPage;