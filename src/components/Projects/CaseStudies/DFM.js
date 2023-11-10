import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import CSFooter from '../CSFooter';
import HomePhoto from '../../../assets/test-lab-4.jpg';
import DFMLogo from "../../../assets/logos/dfm.png";
import LabPhoto from '../../../assets/test-lab-3.jpg';
import LabPhoto2 from '../../../assets/test-lab-2.jpg';
import LabPhotoStrip from '../../../assets/testlab.jpg';
import TestPhoto1 from '../../../assets/dfm-test-1.png';
import TestPhoto2 from '../../../assets/dfm-test-2.png';
import CardSortingPhoto from '../../../assets/dfm-card-sorting.png';
import WDPhoto from '../../../assets/interaction-design/workspace-directory.png';


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
                            <img src={DFMLogo} className="intro-logo" alt="US Army"/>
                            <h1 className="intro-title">Building a User Research Lab</h1>
                        </div>
                        <h3>Design Challenges</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Create a test lab as a proof of concept to show the value of conducting regular user testing</li>
                            <li><MdDone className='bullet-check'/>Develop a research program that integrates multiple testing methods to obtain user feedback about Digital First Media products.</li>                    
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.MyRole, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-fade rotate"></div>
                        <img src={HomePhoto} className="background-image" alt="Digital First Media research lab"/>
                    </div>
                </section>
            
                <section className="my-role" ref={(section) => { this.MyRole = section; }}>
                    <div className="container">
                        <h3>My Role</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>One of five UX Designers that managed design work for {"DFM's"} 100+ subsidiary companies</li>
                            <li><MdDone className='bullet-check'/>Organized the creation of the DFM User Research Lab</li>
                            <li><MdDone className='bullet-check'/>Worked with DFM leadership and building management to obtain required resources and testing space</li>
                            <li><MdDone className='bullet-check'/>Created high volume testing schedule</li>
                            <li><MdDone className='bullet-check'/>Coordinated recruitment of testing participants</li>
                            <li><MdDone className='bullet-check'/>Conducted stakeholder interviews with project and company leads to identify needs</li>
                            <li><MdDone className='bullet-check'/>Created test scripts</li>
                            <li><MdDone className='bullet-check'/>Coordinated and co-facilitated user testing</li>
                            <li><MdDone className='bullet-check'/>Co-facilitated debriefing sessions and analysis of test findings</li>
                            <li><MdDone className='bullet-check'/>Developed test reports and presented findings to stakeholders</li>
                        </ul>
                    </div>
                </section>
                
                <section className="process col-2" ref={(section) => { this.Process = section; }}>
                    <h3>Process</h3>
                    <div className="row">
                        <div className="right">
                            <p>This project began at the request of our supervisor, who was interested in user-centered design and wanted to start incorporating user research into the design process, but was not sure where to begin. As the only member on the team with prior experience conducting tests, I was tasked with organizing and running a few tests to gauge effectiveness.</p>  
                        </div>
                        <div className="left">
                            <img src={LabPhoto2} alt="Usability test being completed"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="left">
                            <p>The company already possessed a room that had an observation room connected by a two-way mirror. It had been built for market research years prior, but had since been repurposed into a training facility after the testing program had failed.  After many conversations, we were able to convince management to return the room to its original purpose. Using furniture and equipment around the building, we were able to create a testing lab that provided space for a variety of testing methods and an observation room that allowed those watching to see every action that users performed.</p>
                        </div>
                        <div className="right">
                            <img src={CardSortingPhoto} alt="Card sorting being completed"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <p>Having built the lab, we then began conducting regular tests. With many products and a small UX team, we created a process to quickly determine a project’s needs and build a test that would help them gather user feedback. We always started by conducting stakeholder interviews with the project team. This allowed us to identify project objectives, completed and planned work, and questions discussed among their team. This information helped us determine the best method of testing and write a script. With other processes built for efficient recruitment and analysis, we were able to go from our first conversation with the project teams to providing actionable items within a few weeks.</p>      
                        </div>
                        <div className="left">
                            <img src={TestPhoto1} alt="Usability test being completed"/>
                            
                        </div>
                    </div>
                </section>
            
                <section className="outcomes" ref={(section) => { this.Outcomes = section; }}>
                    <div className="container">
                        <h3>Outcomes</h3>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>What started as a proof of concept turned into a full user research program running up to four rounds of testing per month.</li>
                            <li><MdDone className='bullet-check'/>Test findings led to approximately $5 million dollars in revenue for the company.</li>
                            <li><MdDone className='bullet-check'/>Research efforts helped company develop a more user-centeric approach to both advertising and editorial operations.</li> 
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
