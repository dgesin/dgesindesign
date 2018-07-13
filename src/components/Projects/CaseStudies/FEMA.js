import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import HomePhoto from '../../../assets/mhus.jpg';
import USPTOLogo from "../../../assets/logos/fema-logo.png";
import DSPhoto from '../../../assets/site-inspector.jpg';
import MPDesignPhoto from '../../../assets/stakeholder-interviews.jpg';



class USArmy extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="case-study">
                <ScrollToTopOnMount />
                <section className="intro" ref={(section) => { this.Intro = section; }}>
                    <div className="objectives text-standout">
                        <div className="study-project">
                            <img src={USPTOLogo} className="study-logo" alt="US Army"/>
                            <h1 className="study-title">Tracking Manufactured Homes</h1>
                        </div>
                        <p className="label">Project Objectives</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Gather requirements for the development of a lifecycle management tool to assist with tracking FEMA housing.</li>
                            <li><MdDone className='bullet-check'/>Document the various user roles, processes, and information requirements within the lifecycle.</li>
                            <li><MdDone className='bullet-check'/>Align research efforts and artifacts with both the required acuisition steps and Agile development methods.</li>          
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="US Patent and Trademark Office campus" />
                    </div>
                </section>
                <section className="design-challenges" ref={(section) => { this.Challenges = section; }}>
                    <div className="challenge-image">
                        <img src={MPDesignPhoto} alt="Map interface"/>
                    </div>
                    <div className="challenge-text">
                        <p className="label">Design Challenges</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Organize user research for a complex and vast lifecycle that spans many different teams and subject matters.</li>
                            <li><MdDone className='bullet-check'/>Identify and align business objectives for logistical group (i.e. the people that hired us) with the various other organizational teams that they work with.</li>
                            <li><MdDone className='bullet-check'/>Use Business Process Models (BPMs), Experience Maps, and User Personas to both document the process and visualize the user experience.</li>    
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                
                <section className="process step-one" ref={(section) => { this.Process = section; }}>
                    <div className="process-images">
                        <img src={DSPhoto} alt="Goal directed task analysis"/>
                    </div>
                    <div className="process-text">
                        <p className="label">Process</p>
                        <p>Through a series of stakeholder interviews, our team was able to identify the primary business objectives for the project in order to create an initial set of requirements. Interviews were conducted both in person and remotely, will all data being entered into RealtimeBoard. We then used affinity mapping to categorize findings and identify key insights. Through this process, we identified crucial information about the project such as expected outcomes, challenges to overcome, primary user roles, and more.</p>
                        <p>With user groups located all over the country, we had to organize and manage a complex schedule of user interviews and contextual inquiries. We conducted interviews to learn about and document user workflows and the information requirements. We then performed contextual inquiries to observe critical workflows in person and identify environmental considerations. Some of the work observed included traveling to Texas to observe site inspectors and installation crews working on recovery from Hurricane Harvey, going to a long-term storage facility to see where they store the homes and commodities (e.g. water, blankets, etc.) that are provided when a distaster occurs, and touring a manufacturing facility to observe homes being built. We then created a series of experience maps to communicate findings by outlining user tasks, data being used or generated, and other key insights.</p>
                        <p>The research we have done provides the requirements necessary for a system to meet {"FEMA's"} needs. As we move into the next phase of the project, we are converting the workflows researched into the backbone of a user story map. Organizing the user workflows and required capabilites in this manner provides a foundation that allows the development team to begin identifying specific user stories for development and create a release schedule to manage the project going forward.</p>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Methods, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                <section className="methods" ref={(section) => { this.Methods = section; }}>
                    <div className="tasks">
                        <p className="label">Skills Used</p>
                        <ul>
                            <li>Stakeholder Interviews</li>
                            <li>User Interviews</li>
                            <li>Contextual Inquiries</li>
                            <li>Affinity Mapping</li>
                            <li>User Personas</li>
                            <li>Experience Mapping</li>
                            <li>User Story Mapping</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                </section> 
            </div>
        );
    }
}

export default USArmy;
