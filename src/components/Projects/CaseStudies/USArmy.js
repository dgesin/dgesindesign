import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone, MdFormatQuote} from 'react-icons/lib/md';
import ProjectTabs from '../ProjectTabs';
import HomePhoto from '../../../assets/mission-planning.jpg';
import ArmyLogo from "../../../assets/logos/army.png";
import MapPhoto from '../../../assets/map-interface.png';
import GDTAPhoto from '../../../assets/gdta.jpg';
import DSPhoto from '../../../assets/design-studio2.png';
import MPDesignPhoto from '../../../assets/multiplatform-design.png';
import WDPhoto from '../../../assets/interaction-design/workspace-directory.png';
import DesignSprintImage from '../../../assets/design-sprint2.jpg';
import MPAWireframeImage from '../../../assets/mpa-wireframe.png';
import MockupImage from '../../../assets/mockup-w-doc.png';
import UsabilityImage from '../../../assets/ds-usability-testing.png';
import InteractionDesign from '../Menu/InteractionDesign';
import UsabilityTesting from '../Menu/UsabilityTesting';
import UserResearch from '../Menu/UserResearch';
import DesignWorkshops from '../Menu/DesignWorkshops';



class USArmy extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="case-study">
                <ScrollToTopOnMount />
                <section className="intro" ref={(section) => { this.Intro = section; }}>
                    <div className="intro-text text-standout">
                        <div className="intro-project">
                            <img src={ArmyLogo} className="intro-logo" alt="US Army"/>
                            <h1 className="intro-title">Mission Planning for the U.S. Army</h1>
                        </div>
                        <h3>Design Challenges</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Create a developer toolkit that provides cross-platform functionality to be used by Army software developers.</li>
                            <li><MdDone className='bullet-check'/>Improve the {"commander's"} ability to transition between command environments while maintaining situational awareness.</li>
                            <li><MdDone className='bullet-check'/>Design features that satisfy the implementation needs of development team while also providing functionality that is useful for Army commanders and their team.</li>
                            <li><MdDone className='bullet-check'/>Work with executive and business development divisions of ATS to identify commercialization strategies.</li>
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.ProcessSummary, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-fade rotate"></div>
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
            
                <section className="process-summary" ref={(section) => { this.ProcessSummary = section; }}>
                    <div className="cs-text">
                        <h3>Process Summary</h3>
                        <ul>
                            <li>Designed and developed mission planning application to user real-world application as basis for toolkit capabilities</li>
                            <li>Conducted stakeholder and user interviews</li>
                            <li>Worked with subject matter experts to build task analysis of Army Commander role</li>
                            <li>Conducted design sprints to help team ideate and converge on a starting concept and determine direction when needed</li>
                            <li>Conducted User Story Mapping to plan work, build backlog, and prioritize user stories</li>
                            <li>Designed and prototyped interfaces using Sketch and Atomic</li>
            <li>Designed multiple feature sets spanning a variety of user workflows (e.g. geospatial planning, chat, document management, etc.)</li>
                            <li>Coordinated and facilitated usability testing on prototype</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.MyRole, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <img src={WDPhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
            
                <section className="my-role" ref={(section) => { this.MyRole = section; }}>
                    <div className="container">
                        <h3>My Role</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Principle Investigator and UX Design Lead</li>
                            <li><MdDone className='bullet-check'/>Coordinated and co-facilitated user research</li>
                            <li><MdDone className='bullet-check'/>Created wireframes, mockups, and prototypes</li>
                            <li><MdDone className='bullet-check'/>Assisted with writing of user stories</li>
                            <li><MdDone className='bullet-check'/>Organized and facilitated design sprints and studios</li>
                            <li><MdDone className='bullet-check'/>Mentored Junior Designers and Interns</li>
                            <li><MdDone className='bullet-check'/>Assisted executive and business development teams in commercialization strategy development</li>
                            <li><MdDone className='bullet-check'/>Organized and assisted with facilitation of user story mapping workshops</li>
                        </ul>
                    </div>
                </section>
            
                <section className="process col-2" ref={(section) => { this.Process1 = section; }}>
                    <h3>Process - The Story</h3>
                    <div className="row">
                        <div className="right">
                            <p>The Army contracted us to build a developer toolkit that allows their software developers to create applications that can be deployed across multiple device types. It began as a feasibility study to determine requirements and strategy.</p>
                <p>We conducted a series of user interviews with Army commanders, including facilitating a panel discussion with the head of the Army Training and Doctrine Center (TRADOC) and their staff. This produced a list of capabilities currently being sought after by Army leadership. We also conducted interviews with software developers to identify key aspects looked for when choosing development tools. One of the quotes heard repeatedly was that the best tools they used were created out of necessity to assist them when developing an application.</p>
                            <p>These two insights led to the decision that the best way for us to develop a toolkit was to focus on building an actual application. We contracted a recently retired general to act as a subject matter expert to help us build a task analysis with the workflows and situational awareness requirements for Army commanders.</p>
                        </div>
                        <div className="left">
                            <blockquote>
                                <MdFormatQuote className="quote-icon"/>
                                <p>As the level of command increases, the type of information a commander focuses on also changes.  For example, a battalion commander may be primarily focused on the map of a current operation, while a division or corp commander might be focused on communications with diplomatic or religious leaders in the area. In what other ways do the commander’s objectives change as their area of responsibility and influence increases or decreases?</p>
                                <cite>Question for Panelists at TRADOC</cite>
    </blockquote>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>Through this process and discussions with other SMEs, we discovered that there was a need for better tools to assist with the military decision-making process (MDMP) used to plan missions. We decided to use this as the design challenge to assist with building the toolkit.</p>
                            <p>To begin developing the application concept, we conducted a design sprint. The sprint helped us bring the team together so we could review the research completed and ideate on possible directions for the app. Coming out of the sprint we had a number of concepts that we wanted to begin designing and developing.</p>
                            <p>To organize the work, we conducted a user story mapping workshop. This involved identifying the capabilities that we wanted to build for users, and then decomposing each capability into a set of user stories that could be worked via an Agile development process.</p>
                        </div>
                        <div className="right">
                            <img src={DesignSprintImage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <p>With the backlog in place, we began designing the different parts of the application. For each design begins by identifying the applicable scenario(s). Based on the scenario, I would document any design challenge(s) and things to consider. Lastly, I listed any initial solutions I had thought of so far. This is done before a single wireframe is drawn to keep me focused on the challenge at hand and breakdown preconceived notions of what the final design should entail. Writing stuff down forces me to examine what is and {"isn't"} a real constraint.</p>
                            <p>The first designs for the app typically began with a wireframe to gather team and SME feedback before adding fidelity. As the project progressed and my stable of Sketch symbols grew, initial designs tended to look like mockups since many of the patterns and UI components had been established.</p>
                        </div>
                        <div className="left">
                            <img src={MPAWireframeImage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>Once a design had been tested and/or critiqued by the team, I would create documentation within the design using the Sketch plugin Notebook Pro. All designs were added to a RealtimeBoard, giving the team a single location to view all app designs. The Project Manager, Lead Developer, and myself would then write up the user story (or stories) needed to build the design. We used Jira to create stories and added acceptance criteria based on key interactions described in the already-created design documentation. The final step (when applicable) was to update any changes to the style guide using Zeplin.</p>
                        </div>
                        <div className="right">
                            <img src={MockupImage} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <p>Designs were transferred into Atomic where we turned them into clickable prototypes for testing. We recruited active duty and recently retired soldiers to test the designs. In addition to our internal network of military contacts, we worked with the Mission Command Battle Lab at Fort Leavenworth to find participants.</p> 
                            <p>For each round of testing, we asked participants to complete a series of tasks using the prototype while thinking aloud. Observers were instructed to rate task completion using a scale of one (unable to complete) to five (easily completed). We also asked participants to complete a survey using the System Usability Scale (SUS) to gauge user perception.</p>
                            <p>Since most of our participants were located elsewhere and our team spanned both coasts, testing was typically conducted remotely using GoToMeeting and RealtimeBoard used to gather observer notes. We would then hold debriefing sessions to analyze observations and identify action items.</p>
                        </div>
                        <div className="left">
                            <img src={UsabilityImage} />
                        </div>
                    </div>
                </section>
                
                <section className="outcomes" ref={(section) => { this.Outcomes = section; }}>
                    <div className="container">
                        <h3>Outcomes</h3>
                        <ul>
                            <li>Rather than requiring developers to use an entire toolkit, ATS is currently testing and packaging a collection of stand-alone components that extend the React Native library. When completed, these will be open-source and available via GitHub.</li>
                            <li>The mission planning application has been tested with soldiers and received a favorable response. We are currently working with the Army to obtain additional funding to move into production.</li>
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

export default USArmy;
