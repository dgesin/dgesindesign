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
import AllProjects from './Menu/AllProjects';


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
                        <p>{"Whether it's building a user testing lab for Digital First Media or working with soldiers to help them plan missions, each project I've worked on has helped me grow as a designer. The following case studies will give you a better idea of what I do."}</p>
                    </div>
                    <div className="projects">
                        <AllProjects />
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
