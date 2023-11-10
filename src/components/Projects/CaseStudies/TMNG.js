import React, { Component } from 'react';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount";
import scrollToComponent from 'react-scroll-to-component';
import {MdArrowDownward, MdArrowUpward, MdDone} from 'react-icons/lib/md';
import HomePhoto from '../../../assets/uspto.jpg';
import USPTOLogo from "../../../assets/logos/uspto.png";
import MapPhoto from '../../../assets/map-interface.png';
import GDTAPhoto from '../../../assets/gdta.jpg';
import DSPhoto from '../../../assets/design-studio2.png';
import DLPhoto from '../../../assets/uspto-design-library.png';



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
                            <h1 className="study-title">Reinventing the Trademark Examination Process</h1>
                        </div>
                        <p className="label">Project Objectives</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Develop an application to assist USPTO attorneys with the examination of trademark applications</li>
                            <li><MdDone className='bullet-check'/>Create a single system to replace the disparate COTS applications previously in place. </li>
                            <li><MdDone className='bullet-check'/>Utilize the benefits of a unified system to improve data processing by reducing the number of steps that attorneys are required to complete and increasing the USPTO’s visibility into individual cases being worked.</li>
                            <li><MdDone className='bullet-check'/>Work with UX teams from other USPTO projects to help create a unified design and pattern library to increase consistency among USPTO products.</li>            
                        </ul>
                    </div>
                    <button className="next-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowDownward/></button>
                    <div className="background">
                        <div className="background-overlay"></div>
                        <img src={HomePhoto} className="background-image" alt="US Patent and Trademark Office campus" />
                    </div>
                </section>
                <section className="design-challenges" ref={(section) => { this.Challenges = section; }}>
                    <div className="challenge-image">
                        <img src={DLPhoto} alt="Map interface"/>
                    </div>
                    <div className="challenge-text">
                        <p className="label">Design Challenges</p>
                        <ul className="custom-bullets">
                            <li><MdDone className='bullet-check'/>Unifying multiple application types (e.g. word processing,  docket management, database search, etc.) under a single application while minimizing cognitive load on user.</li>
                            <li><MdDone className='bullet-check'/>Providing enough familiarity for senior attorneys to accept the new system while also enticing users with improved workflows.</li>                                                       
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Intro, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowUpward/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowDownward/></button>
                </section>
                
                <section className="process step-one" ref={(section) => { this.Process = section; }}>
                    <div className="process-images">
                        <img src={DLPhoto} alt="Goal directed task analysis"/>
                    </div>
                    <div className="process-text">
                        <p className="label">Process</p>
                        <p>I remained on the Trademark Next Generation (TMNG) project through the beta release, when I was reassigned to lead design on another effort. During this time, I worked on the interaction and visual design, wrote the CSS/LESS for the application, coordinated the usability, 508, and user acceptance testing, and assisted with designing both the TMNG Pattern Library and USPTO UI Design Library.</p> 
                        <p>The TMNG application was created to streamline the examination process for examiners. When I came on, the project had already been going for a couple years and had grown to include designers and developers from multiple companies. I was originally brought on to assist developers by writing the CSS (using LESS) and designing a pattern library to be used by the various teams involved. As the project progressed, my role increased to include a wide range of activities.</p>
                        <p>My role first expanded to assisting with the coordination of usability testing. While testing, we made a point to include developers and project management in the process. This unified the design and development teams which helped to create a more agile process moving forward.</p>
                        <p>The pattern library began with the goal of creating consistency within the TMNG project. We were eventually asked to assist with a larger effort, the development of the USPTO UI Design Library. This library is now the cornerstone for all USPTO products.</p>
                        <p>I remained on the TMNG project through the beta release, when I was reassigned to lead design on another effort. During this time, I worked on the interaction and visual design, wrote the CSS/LESS for the application, coordinated the usability, 508, and user acceptance testing, and assisted with designing both the TMNG Pattern Library and USPTO UI Design Library.</p>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Challenges, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowUpward/></button>
                    <button className="next-button" onClick={() => scrollToComponent(this.Methods, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowDownward/></button>
                </section>
                <section className="methods" ref={(section) => { this.Methods = section; }}>
                    <div className="tasks">
                        <p className="label">Skills Used</p>
                        <ul>
                            <li>User Interviews</li>
                            <li>Visual Design</li>            
                            <li>Front-end development</li>
                            <li>Usability Testing</li>
                            <li>508 Testing</li>
                            <li>User Acceptance Testing</li>
                            <li>Pattern Library Development</li>
                        </ul>
                    </div>
                    <button className="previous-button" onClick={() => scrollToComponent(this.Process, { offset:0, align: 'top', duration: 700, ease:'inOutExpo'})}><MdArrowUpward/></button>
                </section> 
            </div>
        );
    }
}

export default USArmy;
