import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import HomePhoto from '../../../assets/mission-planning.jpg';
import ArmyLogo from "../../../assets/logos/army.png";
import MapPhoto from '../../../assets/map-interface.png';
import GDTAPhoto from '../../../assets/gdta.jpg';
import DSPhoto from '../../../assets/design-studio2.png';
import MPDesignPhoto from '../../../assets/multiplatform-design.png';



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
                            <img src={ArmyLogo} className="study-logo" alt="US Army"/>
                            <h1 className="study-title">Mission Planning for Army Commanders</h1>
                        </div>
                        <p className="label">Project Objectives</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Build a development library that improves the Army’s ability to create multi-platform applications</li>
                            <li><MdDone className='bullet-check'/>Help Army Commanders and their staff maintain situational awareness while transitioning between command environments</li>
                            <li><MdDone className='bullet-check'/>Prototype and validate capabilities for library through the design and development of a mission planning application that allows Army teams to conduct the planning process remotely.</li>
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
                <section className="design-challenges" ref={(section) => { this.Challenges = section; }}>
                    <div className="challenge-image">
                        <img src={MPDesignPhoto} alt="Map interface"/>
                    </div>
                    <div className="challenge-text">
                        <p className="label">Design Challenges</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Conduct Discovery research to understand the role of Army Commander and how the tasks and information required change through various levels of command.</li>
                            <li><MdDone className='bullet-check'/>Research software developers as users, since they would be the eventual end-user of the library.</li>
                            <li><MdDone className='bullet-check'/>Use research to drive the design of an application concept that manages to satisfy the needs of military units while also providing development tools that can be utilized in future Army applications.</li>
                            <li><MdDone className='bullet-check'/>Build a system for efficiently designing interfaces meant to deploy as both web and native (e.g. iOS and Android) applications while taking into consideration the design guidelines for each platform.</li>                            
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
                        <p>During the first phase of the project we conducted a series of stakeholder and user interviews with Army commanders—including the head of the {"Army's"} Training and Doctrine Command (TRADOC)—and software developers. These interviews provided us a list of capabilities valued from both a user and organization perspective. We then contracted a recently retired two-star general to complete a goal-directed task analysis of the Commander’s role, which became the foundation for future user scenarios.</p>                                        <p>We then ran design sprint and studio workshops (both remote and in-person) to move us from discovery into concept development. Wireframes and high-fidelity comps of ideas were created using Sketch, and then exported into Atomic to be turned into clickable prototypes. We then tested prototypes with members of CERDEC and the Mission Command Battle Lab at Fort Leavenworth to validate/disvalidate ideas.</p>  
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Methods, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                <section className="methods" ref={(section) => { this.Methods = section; }}>
                    <div className="tasks">
                        <p className="label">Methods Used</p>
                        <ul>
                            <li>User Interviews</li>
                            <li>Task Analysis</li>
                            <li>Design Sprints</li>
                            <li>Design Studios</li>
                            <li>Experience Mapping</li>
                            <li>User Story Mapping</li>
                            <li>Wireframing (w/Sketch)</li>
                            <li>Rapid Prototyping (w/Atomic)</li>
                            <li>Usability Testing</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                </section> 
            </div>
        );
    }
}

export default USArmy;
