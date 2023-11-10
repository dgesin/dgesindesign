import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import CSFooter from '../CSFooter';
import HomePhoto from '../../../assets/mhus.png';
import USPTOLogo from "../../../assets/logos/fema-logo.png";
import DSPhoto from '../../../assets/site-inspector.jpg';
import MPDesignPhoto from '../../../assets/stakeholder-interviews.jpg';
import FEMAPhoto from '../../../assets/fema-research.png';
import PersonaPhoto from '../../../assets/persona.png';


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
                            <img src={USPTOLogo} className="intro-logo" alt="US Army"/>
                            <h1 className="intro-title">Tracking Manufactured Homes</h1>
                        </div>
                        <h3>Design Challenges</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Improve the way that FEMA tracks and manages the process for providing Transportable Temporary Housing Units (TTHUs) to disaster survivors.</li>
                            <li><MdDone className='bullet-check'/>Research and document the TTHU lifecycle to identify potential areas for process reengineering and system development.</li>
                            <li><MdDone className='bullet-check'/>Identify requirements for development or acquisition of an enterprise platform to manage the process.</li>          
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.ProcessSummary, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-fade rotate"></div>
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="FEMA manufactured homes" />
                    </div>
                </section>
            
                <section className="process-summary" ref={(section) => { this.ProcessSummary = section; }}>
                    <div className="cs-text">
                        <h3>Process Summary</h3>
                        <ul>
                            <li>Applied user-centered design approach to requirements gathering process</li>
                            <li>Conducted stakeholder interviews to identify vision, mission, strategy, and goals</li>
                            <li>Conducted contextual field visits with site inspectors, installation crews, manufacturing plant operators and inspectors, and storage facility operators</li>
                            <li>Conducted user interviews with other FEMA and contractor personnel to further define process and data requirements</li>
                            <li>Documented and reported findings to product owners</li>
                            <li>Created user personas, experience maps, and architecture diagrams to assist in communicating findings</li>
                            <li>Became technology advisors for TTHU branch of FEMA</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.MyRole, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <img src={FEMAPhoto} className="background-image" alt="Military planning" />
                    </div>
                </section>
            
                <section className="my-role" ref={(section) => { this.MyRole = section; }}>
                    <div className="container">
                        <h3>My Role</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Lead five-person team of UX, Business, and Solution Architects</li>
                            <li><MdDone className='bullet-check'/>Senior UX Architect for project</li>
                            <li><MdDone className='bullet-check'/>Coordinated and co-facilitated user research</li>
                            <li><MdDone className='bullet-check'/>Created user personas, experience maps, and reports to communicate research findings</li>
                            <li><MdDone className='bullet-check'/>Managed work in Jira</li>
                            <li><MdDone className='bullet-check'/>Managed relationship with client</li>
                            <li><MdDone className='bullet-check'/>Acted as subject matter expert to assist with development of business process models</li>
                            <li><MdDone className='bullet-check'/>Worked with Recovery Technology Program Directorate to develop current and target states for all direct housing missions</li>
                        </ul>
                    </div>
                </section>
                
                <section className="process col-2" ref={(section) => { this.Process = section; }}>
                    <h3>Process</h3>
                    <div className="row">
                        <div className="right">
                            <p>Through a series of stakeholder interviews, our team was able to identify the primary business objectives for the project in order to create an initial set of requirements. Interviews were conducted both in person and remotely, will all data being entered into RealtimeBoard. We then used affinity mapping to categorize findings and identify key insights. Through this process, we identified crucial information about the project such as expected outcomes, challenges to overcome, primary user roles, and more.</p>
                        </div>
                        <div className="left">
                            <img src={MPDesignPhoto} alt="Stakeholder interview research"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>With user groups located all over the country, we had to organize and manage a complex schedule of user interviews and contextual inquiries. We conducted interviews to understand user workflows and information requirements. We then performed contextual inquiries to observe critical workflows in person and identify environmental considerations. Some of the work observed included traveling to Texas to observe site inspectors and installation crews working on recovery from Hurricane Harvey, going to a long-term storage facility to see where they store the homes and commodities (e.g. water, blankets, etc.) that are provided when a distaster occurs, and touring a manufacturing facility to observe homes being built. We then created a series of experience maps to communicate findings by outlining user tasks, data being used or generated, and other key insights.</p>
                        </div>
                        <div className="right">
                            <img src={DSPhoto} alt="Goal directed task analysis"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <p>Our research has yielded a variety of artifacts including user personas, experience maps, business process models, and architecture diagrams. Through documenting the current and target states, we have created a blueprint for FEMA to begin the transformation process.</p>
                        </div>
                        <div className="left">
                            <img src={PersonaPhoto} alt="User Persona"/>
                        </div>
                    </div>
                </section>
                
                <section className="outcomes" ref={(section) => { this.Outcomes = section; }}>
                    <div className="container">
                        <h3>Outcomes</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Work produced helped product owner communicate need for improvement to FEMA leadership and led to a larger initiative to improve systems for all divisions responsible for helping with housing missions.</li>
                            <li><MdDone className='bullet-check'/>Positive response from client allowed us to double team size and increase scope from requirements gathering to design of pilot applications.</li>
                            <li><MdDone className='bullet-check'/>Currently working with a project team comprised of multiple divisions to progress project.</li>
                            <li><MdDone className='bullet-check'/>Asked by Branch Chief to act as their proxy in design and development process to ensure teams involved have accurate understanding of organization and user needs.</li>
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
