import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
import BackgroundPhoto from '../../assets/design-sprint3.jpg';
import './Projects.css';
import InteractionDesign from './Menu/InteractionDesign';
import UsabilityTesting from './Menu/UsabilityTesting';
import UserResearch from './Menu/UserResearch';
import DesignWorkshops from './Menu/DesignWorkshops';


class ProjectsLanding extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="projects-page">
                <Tabs>
                    <div className="projects-description">
                        <h1>Projects</h1>
                        <p>{"Whether it's building a user testing lab for Digital First Media or exploring natural language processing for the Navy, every project I've worked on has helped me grow as a designer. The following case studies should give you a better feel for what I do."}</p>
                        <TabList className="scroll-navigation vertical">
                            <Tab className="link scroll-menu-item">Interaction Design</Tab>
                            <Tab className="link scroll-menu-item">Design Workshops</Tab>
                            <Tab className="link scroll-menu-item">Usability Testing</Tab>
                            <Tab className="link scroll-menu-item">User Research</Tab>
                        </TabList>
                    </div>
                    <div className="projects">
                            <TabPanel>
                                <InteractionDesign /> 
                            </TabPanel>
                            <TabPanel>
                                <DesignWorkshops />
                            </TabPanel>
                            <TabPanel>
                                <UsabilityTesting />
                            </TabPanel>
                            <TabPanel>
                                <UserResearch />
                            </TabPanel>
                    </div>
                </Tabs>
                <div className="background">
                    <div className="background-fade"></div> 
                    <div className="background-overlay"></div> 
                    <img src={BackgroundPhoto} className="background-image" alt="Military planning" />
                </div>
            </div>            
        );
    }    
}


export default ProjectsLanding;
