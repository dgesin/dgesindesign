import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import HomePhoto from '../../../assets/kneeboard.jpg';
import KBPhoto from '../../../assets/kneeboard2.jpg';
import GDTAPhoto from '../../../assets/gdta.jpg';
import DSPhoto from '../../../assets/design-studio.png';
import MPDesignPhoto from '../../../assets/multiplatform-design.png';



class USArmy extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="case-study">
                <ScrollToTopOnMount />
                <section className="intro">
                    <div className="centered-content">
                        <h1 className="study-title text-standout">Building a Kneeboard Application for Navy F-18 Pilots</h1>
                    </div>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
                <section className="overview">
                    <div className="container">
                        <h2>Overview</h2>
                        <p>As Phase I of a Small Business Innovative Research (SBIR) contract for the US Navy, our team conducted a study to determine the feasibility of building an iPad application to assist F-18 pilots while in-flight. The study included working with pilots to document the tasks and information required by pilots. We then ran a design sprint to ideate and build an initial prototype to get user feedback. We then worked with the developers on the team to build a prototype using React Native. Finally, we conducted usability testing on this prototype with pilots at Naval Air Station Oceana in Virginia Beach.</p>
                        <p>As the principal investigator and UX lead for the project, I coordinated and facilitated the research sessions, design sprint, and usability testing. I also worked with the other UX designer on the team to build the prototype that was used for testing.</p> 
                    </div>
                </section>
                <section className="methods">
                    <div className="container">
                        <h2>Tasks/Methods</h2>
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
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={KBPhoto} className="background-image" alt="Map Interface" />
                    </div>
                </section>
                <section className="process">
                    <div className="container">
                        <h2>Process</h2>
                        <div className="step-fullwidth">
                            <div className="step-text">
                                <h3>Determining the {"User's"} Need</h3>
                                <p>During the first phase of the project we conducted a <b>series of user interviews with Army commanders</b>, including the head of the {"Army's"} Training and Doctrine Command (TRADOC). Through these sessions, we learned that offline capabilities were a primary objective that the toolkit would have to address. We also <b>conducted interviews with developers</b> and discovered that they were apprehensive about using lesser known frameworks since they are often not supported well. They did, however, integrate smaller development tools into their projects frequently. These findings lead our team to pivot from building a framework to designing a toolkit comprised of multiple development tools that can be integrated all together or separately. We also decided to <b>use React Native</b> as the core library so that developers can <b>deploy native applications</b> and provide offline features.</p>
                            </div>
                        </div>
                        <div className="step-left">
                            <div className="step-text">
                                <h3>Understanding Tasks and Information Requirements</h3>
                                <p>To understand the role of an Army commander, we needed to have a clear understanding of the tasks and information that they require. We contracted a two-star general to act as our primary subject matter expert (SME) and over the span of many interviews, <b>developed a goal-directed task analysis</b> to outline the {"commander's"} workflows and <b>determine how to improve situational awareness and decision making.</b></p>
                            </div>
                            <div className="step-image">
                                <img src={GDTAPhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </section>  
            </div>
        );
    }
}

export default USArmy;
