import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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

class Home extends Component {
    componentDidMount: function() {
 
        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
 
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
 
        scrollSpy.update();
 
      }
      componentWillUnmount: function() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
      scrollTo: function() {
        scroll.scrollTo(100);
      },
    render(){
        return [
            <div key="homepage" className="homepage">
            <Link to="test1" className="scroll-down"><MdArrowDownward/></Link>
                < className="landing-page">
                    <div className="title">
                        <h1>Derek Gesin</h1>
                        <h2>User Experience Design</h2>
                        <p>I work with users, development teams, and stakeholders to design technological solutions for complex subjects.</p>
                    </div>

                    <div className="background-overlay"></div>
                    <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                    <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                </>
                < className="skillset">
                    <div className="container">
                        <h2>What I Do</h2>
                        <div className="row">
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
                    <span className="skill-description">Having a solid understanding of how things are built allows a designer to communicate in the same language as their teammates. I design with prototyping programs because of their speed, but I have also been working with code since I began in this industry. By staying up-to-date on industry best practices and tools (for instance, this site is built with ReactJS), I brint a holistic perspective to every project. This way, I can work directly with the development team to ensure that every user story is feasible and contains sufficient information for the developer to complete it.</span>
                            </div>
                            <div className="skill">
                                <div className="skill-icon">
                                    <img src={AgileIcon} alt="Agile Method"/>
                                </div>
                                <h3 className="skill-label">Agile Design</h3>
                                <span className="skill-description">Finding a way to manage design tasks and teams inside an Agile development process is always a challenge. Every team I work with has views on how this should be done, and I have learned to adapt to each while still managing to track design work effectively. In the end, the goal is always the same. Produce designs and users stories with enough time to let the project manager and development team prioritize properly while remaining agile enough to rework designs if something changes.</span>
                            </div>
                        </div>
                    </div>
                </>
                <Element className="project-logos" name="test1">
                    <div className="container">
                        <h2>{"Some Groups I've Worked With"}</h2>
                        <div className="logo-row">
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
                        </div>
                    </div>
                </Element>
            </div>
        ];
    }
}

export default Home;