import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone, MdFormatQuote} from 'react-icons/lib/md';
import CSFooter from '../CSFooter';
import HomePhoto from '../../../assets/kneeboard.jpg';
import AYTMPhoto from '../../../assets/aytm.png';
import USNavyLogo from "../../../assets/logos/us-navy.png";
import MapPhoto from '../../../assets/map-interface.png';
import MenuPhoto from '../../../assets/kb-main-menu.png';
import CoolingAnglePhoto from '../../../assets/kb-cooling-angle.png';
import DesignSprintPhoto from '../../../assets/kb-design-sprint2.jpg';
import WorkspacePhoto from '../../../assets/kb-workspace.jpg';
import CountdownPhoto from '../../../assets/kb-countdown.png';
import DSPhoto from '../../../assets/kb-design-sprint.jpg';
import CockpitPhoto from '../../../assets/kb-cockpit.JPEG';





class USArmy extends Component {

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
                            <img src={USNavyLogo} className="intro-logo" alt="US Navy"/>
                            <h1 className="intro-title">Building a Kneeboard Application for F-18 Pilots</h1>
                        </div>
                        <h3>Design Challenges</h3>
                        <ul className="custom-bullets">    
                            <li><MdDone className='bullet-check'/>Conduct a study to determine the feasibility of building an application to assist Navy F-18 pilots.</li>
                            <li><MdDone className='bullet-check'/>Identify useful tools to assist pilots with pre-flight, in-flight, and post-flight operations.</li>           
                            <li><MdDone className='bullet-check'/>Create a prototype of a brake temperature gauge to communicate potential application and component design.</li>
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.ProcessSummary, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-fade rotate"></div>
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="F-18 in air" />
                    </div>
                </section>
            
                <section className="process-summary" ref={(section) => { this.ProcessSummary = section; }}>
                    <div className="cs-text">
                        <h3>Process Summary</h3>
                        <ul>
                            <li>Conducted stakeholder interviews with technical point of contact (TPOC) in Navy to identify project vision, mission, strategy, and goals</li>
            <li>Worked with subject matter experts (SMEs) to develop task analysis of F-18 pilot role</li>
                            <li>Used task analysis to identify scenarios and potential capabilities</li>
                            <li>Used AYTM to conduct survey with fleet at Naval Air Station Oceana to gather feedback on key areas for improvement</li>
                            <li>Conducted a design sprint to ideate and test solutions</li>
                            <li>Created wireframes and mockups for brake temperature gauge using Sketch</li>
                            <li>Worked with developers to code prototype using React Native</li>
                            <li>Assisted with front-end development for prototype</li>
                            <li>Conducted usability testing on prototype with pilots at Oceana</li>
                            <li>Presented findings to TPOC and Navy program  managers</li>
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
                            <li><MdDone className='bullet-check'/>Facilitated stakeholder interviews and identified requirements</li>
                            <li><MdDone className='bullet-check'/>Coordinated and co-facilitated user research</li>
                            <li><MdDone className='bullet-check'/>Worked on goal-directed task analysis</li>
                            <li><MdDone className='bullet-check'/>Worked on wireframes, mockups, and prototypes</li>
                            <li><MdDone className='bullet-check'/>Organized and facilitated design sprint</li>
                            <li><MdDone className='bullet-check'/>Designed and conducted survey</li>
                            <li><MdDone className='bullet-check'/>Coordinated and facilitated usability testing</li>
                            <li><MdDone className='bullet-check'/>Assisted with design of final presentation</li> 
                            <li><MdDone className='bullet-check'/>Lead presenter for final presentation</li>
                        </ul>
                    </div>
                </section>
                
                <section className="process col-2" ref={(section) => { this.Process = section; }}>
                    <h3>Process - The Story</h3>
                    <div className="row">
                        <div className="right">
                            <p>ATS was contracted by the U.S. Navy to research and prototype an iPad application for F-18 pilots. The goal was to replace the analog kneeboards (i.e. clipboard strapped to a pilots leg with pertinent flight information) with a digital version. The new "electronic kneeboard" was meant to expand the pilots capabilities by making mechanical, flight, and mission-related information accessible to the pilot. In addition to mapping a path to developing the application, we were tasked to build a prototype of a brake temperature gauge to help pilots determine if their brakes are too hot to take off.</p>
                            <p>Our team addressed this challenge using a user-centered design approach that focused on researching the needs of the pilot and then comparing them with those of the organization. We then prototyped some of the identified components to determine technical limitations and exhibit UI designs.</p>
                        </div>
                        <div className="left">
                            <img src={CockpitPhoto} alt="Countdown interface of app"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>Through stakeholder interviews, we were able to better understand project requirements.  We then began meeting with SMEs and representative users to build conduct a task analysis and identify user workflows. This information allowed us to create an initial set of scenarios to determine capabilities to design.</p>
                            <p>We wanted to further validate potential capabilities, so we conducted a survey with the fleet at Naval Air Station Oceana using AYTM.com. Though we only had about 40 responses to the survey, we received many comments that proved helpful. Many pilots indicated a preference for using the commercial app ForeFlight over a custom developed solution since they were already familiar with it and it provided most of the utilities they need during flight. So instead of focusing on rebuilding features they have, we recommended the Navy focus on building components geared directly with mission operations and either integrate or grant access for pilots to use ForeFlight for non-mission tasks.</p>
                        </div>
                        <div className="right">
                            <img src={AYTMPhoto} alt="User survey results on AYTM.com"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <p>To begin designing the brake temperature gauge, we conducted a design sprint. We decided ahead of time that we would use the gauge as our design challenge, but would look for ways to display other capabilities identified. The sprint consisted of our team and a pilot we contracted to act as a SME for the project.</p>
                            <p>Over the span of four days, we worked to understand the problem, ideate solutions, converge on those that seemed promising, and build a prototype to test. This resulted in a variety of interface designs created in Sketch.</p> 
                        </div>
                        <div className="left">
                            <img src={DesignSprintPhoto} alt="Brake temperature gauge"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>Due to delays in obtaining authorization to test at the Air Station, we were not able to test the prototype for about a month after the completion of the sprint. We decided to use that time to start building out the parts of the app that seemed to resonate best with the SME and users we were able to discuss it with.</p>
                            <p>With the mockups done, I assisted with front-end development. We used React Native to build the UI. While I helped with some of the scripting, my primary contribution was to assist with the styling.</p> 
                            <p>Upon receiving approval to test, we traveled to the Air Station to conduct a usability test of the coded prototype and mockups. The feedback received was integrated into the design and final prototype and designs presented to the TPOC and attending Naval Program Managers.</p>
                        </div>
                        <div className="right">
                            <img src={CountdownPhoto} alt="Brake temperature gauge"/>
                        </div>
                    </div>
                </section>
            
                <section className="outcomes" ref={(section) => { this.Outcomes = section; }}>
                    <div className="container">
                        <h3>Outcomes</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>While we were not selected to move forward to the next of this project, this project was one of the first UX research projects completely organized and ran by ATS. As such, it introduced discovery methods that have had far reaching affect for ATS as a company.</li>
                        </ul>
                    </div>
                </section>
            
                <section className="other-projects" ref={(section) => { this.OtherProjects = section; }}>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <CSFooter />
                </section>
            </div>
        );
    }
}

export default USArmy;
