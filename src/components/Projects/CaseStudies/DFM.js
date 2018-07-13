import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdKeyboardArrowDown, MdKeyboardArrowUp, MdDone} from 'react-icons/lib/md';
import HomePhoto from '../../../assets/test-lab-4.jpg';
import DFMLogo from "../../../assets/logos/dfm.png";
import LabPhoto from '../../../assets/test-lab-3.jpg';
import TestPhoto1 from '../../../assets/dfm-test-1.png';
import TestPhoto2 from '../../../assets/dfm-test-2.png';
import CardSortingPhoto from '../../../assets/dfm-card-sorting.png';



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
                            <img src={DFMLogo} className="study-logo" alt="US Army"/>
                            <h1 className="study-title">Building a User Research Lab</h1>
                        </div>
                        <p className="label">Project Objectives</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Create a test lab as a proof of concept to show the value of conducting regular user testing</li>
                            <li><MdDone className='bullet-check'/>Develop a research program that integrates multiple testing methods to obtain user feedback about Digital First Media products.</li>                    
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="US Patent and Trademark Office campus" />
                    </div>
                </section>
                <section className="design-challenges" ref={(section) => { this.Challenges = section; }}>
                    <div className="challenge-image original-size">
                        <img src={LabPhoto} alt="User testing lab"/>
                    </div>
                    <div className="challenge-text">
                        <p className="label">Design Challenges</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Previous endeavors at testing focused on market research and were viewed by company leadership as an expensive endeavor that produced few results.</li>
                            <li><MdDone className='bullet-check'/>Organizing a testing schedule and process for a large number of products (DFM is the parent corporation for over a hundred companies) with a small team of designers. </li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                
                <section className="process step-one" ref={(section) => { this.Process = section; }}>
                    <div className="process-images multiple-images">
                        <img src={TestPhoto1} alt="Usability test being completed"/>
                        <img src={CardSortingPhoto} alt="Card sorting being completed"/>
                        <img src={TestPhoto1} alt="Usability test being completed"/>
                    </div>
                    <div className="process-text">
                        <p className="label">Process</p>
                        <p>This project began at the request of our supervisor, who was interested in user-centered design and wanted to start incorporating user research into the design process, but was not sure where to begin. As the only member on the team with prior experience conducting tests, I was tasked with organizing and running a few tests to gauge effectiveness.</p>          
                        <p>The company already possessed a room that had an observation room connected by a two-way mirror. It had been built for market research years prior, but had since been repurposed into a training facility after the testing program had failed.  After many conversations, we were able to convince management to return the room to its original purpose. Using furniture and equipment around the building, we were able to create a testing lab that provided space for a variety of testing methods and an observation room that allowed those watching to see every action that users performed.</p>
                        <p>Having built the lab, we then began conducting regular tests. With many products and a small UX team, we created a process to quickly determine a project’s needs and build a test that would help them gather user feedback. We always started by conducting stakeholder interviews with the project team. This allowed us to identify project objectives, completed and planned work, and questions discussed among their team. This information helped us determine the best method of testing and write a script. With other processes built for efficient recruitment and analysis, we were able to go from our first conversation with the team to providing actionable items in 1-2 weeks.</p>      
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Methods, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowDown/></button>
                </section>
                <section className="methods" ref={(section) => { this.Methods = section; }}>
                    <div className="tasks">
                        <p className="label">Skills Used</p>
                        <ul>
                            <li>User Interviews</li>
                            <li>Usability Testing (Web, mobile, in-person, and remote)</li>
                            <li>Card Sorting</li>
                            <li>Surveys</li>
                            <li>Focus Groups</li>
                        </ul>            
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdKeyboardArrowUp/></button>
                </section> 
            </div>
        );
    }
}

export default USArmy;
