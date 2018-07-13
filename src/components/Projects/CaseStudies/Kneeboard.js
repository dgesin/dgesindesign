import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import HomePhoto from '../../../assets/kneeboard.jpg';
import USNavyLogo from "../../../assets/logos/us-navy.png";
import MapPhoto from '../../../assets/map-interface.png';
import MenuPhoto from '../../../assets/kb-main-menu.png';
import CountdownPhoto from '../../../assets/kb-countdown.png';
import DSPhoto from '../../../assets/kb-design-sprint.jpg';



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
                            <img src={USNavyLogo} className="study-logo" alt="US Navy"/>
                            <h1 className="study-title">Building a Kneeboard Application for F-18 Pilots</h1>
                        </div>
                        <p className="label">Project Objectives</p>
                        <ul className="custom-bullets">    
                            <li><MdDone className='bullet-check'/>Determine feasibility of building an iPad application to assist F-18 pilots while in flight.</li>
                            <li><MdDone className='bullet-check'/>Design application to help user maintain situational awareness.</li>           
                            <li><MdDone className='bullet-check'/>Build a prototype that displays possible patterns and components to be included in application.</li>
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="F-18 in air" />
                    </div>
                </section>
                <section className="design-challenges" ref={(section) => { this.Challenges = section; }}>
                    <div className="challenge-image">
                        <img src={MenuPhoto} alt="Main Menu of App"/>
                    </div>
                    <div className="challenge-text">
                        <p className="label">Design Challenges</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Research and document pilot workflows to determine the tasks and information requirements for the role.</li>
                            <li><MdDone className='bullet-check'/>Reduce the time it takes for users to comprehend information to maximize the time available for decision-making.</li>                                             
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                
                <section className="process step-one" ref={(section) => { this.Process = section; }}>
                    <div className="process-images">
                        <img src={CountdownPhoto} alt="Countdown interface of app"/>
                    </div>
                    <div className="process-text">
                        <p className="label">Process</p>
                        <p>During the first phase of the project we conducted a series of user interviews with Army commanders, including the head of the {"Army's"} Training and Doctrine Command (TRADOC). Through these sessions, we learned that offline capabilities were a primary objective that the toolkit would have to address. We also conducted interviews with developers and discovered that they were apprehensive about using lesser known frameworks since they are often not supported well. They did, however, integrate smaller development tools into their projects frequently. These findings lead our team to pivot from building a framework to designing a toolkit comprised of multiple development tools that can be integrated all together or separately. We also decided to use React Native as the core library so that developers can deploy native applications and provide offline features.</p>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Methods, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                <section className="methods" ref={(section) => { this.Methods = section; }}>
                    <div className="tasks">
                        <p className="label">Skills Used</p>
                        <ul>
                            <li>User Interviews</li>
                            <li>Goal Directed Task Analysis</li>
                            <li>Design Sprints</li>
                            <li>Wireframing</li>
                            <li>Rapid Prototyping</li>
                            <li>Front-end Development</li>
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
