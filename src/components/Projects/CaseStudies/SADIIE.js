import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import ProjectTabs from '../ProjectTabs';
import HomePhoto from '../../../assets/navy-ship.jpg';
import NavyLogo from "../../../assets/logos/us-navy.png";
import MapPhoto from '../../../assets/map-interface.png';
import MenuPhoto from '../../../assets/kb-main-menu.png';
import CountdownPhoto from '../../../assets/kb-countdown.png';
import DSPhoto from '../../../assets/kb-design-sprint.jpg';
import WDPhoto from '../../../assets/interaction-design/workspace-directory.png';



class SADIIE extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
    
            <div className="case-study">
                <ScrollToTopOnMount />
                <section className="intro" ref={(section) => { this.Intro = section; }}>
                    <div className="intro-text">
                        <div className="intro-project">
                            <img src={NavyLogo} className="intro-logo" alt="US Navy"/>
                            <h1 className="intro-title">Extracting Data for Naval Logistics</h1>
                        </div>
                        <div className="skills">
                            <ul className="horizontal-list">
                                <li>Interaction Design</li>
                                <li>Usability Testing</li>
                                <li>User Research</li>
                                <li>Front-end Development</li>
                            </ul>
                        </div>
                        <h3>Design Challenges</h3>
                        <ul className="custom-bullets">    
                            <li><MdDone className='bullet-check'/>Create an application that can extract data from the vast amount of Microsoft Word, Excel, and PDF documents generated throughout the Navy acquisition process</li>
                            <li><MdDone className='bullet-check'/>Utilize machine learning to find and correlate the logistical data needed to optimize the operational availability of systems purchased</li>           
                            <li><MdDone className='bullet-check'/>Create an experience that allows Logistic Specialists to access system generated insights while reviewing documentation, along with summary views that let them quickly identify key data within a document</li>
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.ProcessSummary, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-fade rotate"></div>
                        <img src={HomePhoto} className="background-image" alt="F-18 in air" />
                    </div>
                </section>

                <section className="process-summary" ref={(section) => { this.ProcessSummary = section; }}>
                    <div className="cs-text">
                        <h3>Process - The Cliff Notes</h3>
                        <ul>
                            <li>Conducted stakeholder interviews to understand and document business objectives</li>
                            <li>Conducted Contextual Field Visits and User Interviews to identify workflows and information requirements</li>
                            <li>Worked with Business Analyst to understand existing process and data models</li>
                            <li>Created personas and experience maps to document findings and create scenarios</li>
                            <li>Created wireframes using Adobe CS</li>
                            <li>Built interactive prototype using HTML, CSS (LESS), and JavaScript</li>
                            <li>Worked with Product Owner, Project Manager, and Developers to develop and prioritize user stories</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.MyRole, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <img src={MenuPhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
            
                <section className="my-role" ref={(section) => { this.MyRole = section; }}>
                    <div className="container">
                        <h3>My Role</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>UX Design Lead</li>
                            <li><MdDone className='bullet-check'/>Joined team after initial feasibility study</li>
                            <li><MdDone className='bullet-check'/>Developed CSS/LESS for application</li>
                        </ul>
                    </div>
                </section>
                
                <section className="process col-2" ref={(section) => { this.Process = section; }}>
                    <h3>Process - The Story</h3>
                    <div className="left">
                        <img src={CountdownPhoto} alt="Countdown interface of app"/>
                    </div>
                    <div className="right">
                        <p></p>
                    </div>
                </section>
            
                <section className="outcomes" ref={(section) => { this.Outcomes = section; }}>
                    <div className="container">
                        <h3>Outcomes</h3>
                        <ul>
                            <li>Created new discovery processes for company by integrating contextual field visit and experience mapping capabilities.</li>
                            <li>Due to budget limitations and need for additional resources to develop machine learning capabilities, I was moved to another project after conducting discovery research and designing initial prototype.</li>
                        </ul>
                    </div>
                </section>
            
                <section className="other-projects" ref={(section) => { this.OtherProjects = section; }}>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <ProjectTabs />
                </section>
            </div>
        );
    }
}

export default SADIIE;
