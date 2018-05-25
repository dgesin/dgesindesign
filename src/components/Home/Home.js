import React, { Component, View } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import scrollToComponent from 'react-scroll-to-component';
import './Home.css';
import BackgroundPhoto from "../../assets/devices.jpg";
import ArmyLogo from "../../assets/logos/army.png";
import USPTOLogo from "../../assets/logos/uspto.png";
import NavyLogo from "../../assets/logos/us-navy.png";
import FEMALogo from "../../assets/logos/fema-logo.png";
import IpsosLogo from "../../assets/logos/ipsos.png";
import CarsLogo from "../../assets/logos/cars.png";
import PPLogo from "../../assets/logos/pioneer-press.png";
import DPLogo from "../../assets/logos/denver-post.png";
import DFMLogo from "../../assets/logos/dfm.png";
import LOCLogo from "../../assets/logos/loc-white.svg";

class Home extends Component {
    
    render(){
        return (
            <div>
                <section className="homepage">
                    <div className="title">
                        <h1>Derek Gesin</h1>
                        <h2>User Experience Design</h2>
                        <p>I work with users, development teams, and stakeholders to design technological solutions for complex subjects.</p>
                    </div>
                    <div className="background-overlay"></div>
                    <img className="background-image" src={BackgroundPhoto} alt="Image of typewriter"/>
                    <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
                </section>
                <section className="skillset">
                    <div className="skill">
                        <span className="skill-label">User Research</span>
                    </div>
                    <div className="skill">
                        <span className="skill-label">Concept Development</span>
                    </div>
                    <div className="skill">
                        <span className="skill-label">User Interface Design</span>
                    </div>
                    <div className="skill">
                        <span className="skill-label">Front-end Development</span>
                    </div>
                </section>
                <section className="project-logos">
                    <div className="container">
                        <h3>{"Other Organizations I've Worked With"}</h3>
                        <div className="logo-row">
                            <div className="logo"><img src={ ArmyLogo } alt="US Patent and Trademark Logo" /></div>
                            <div className="logo"><img src={ FEMALogo } alt="Library of Congress Logo" /></div>
                            <div className="logo"><img src={ USPTOLogo } alt="US Patent and Trademark Logo" /></div>
                            <div className="logo"><img src={ LOCLogo } alt="Library of Congress Logo" /></div>
                            <div className="logo"><img src={ IpsosLogo } alt="Ipsos Logo" /></div>
                            <div className="logo"><img src={ DPLogo } alt="Denver Post Logo" /></div>
                            <div className="logo circle"><img src={ NavyLogo } alt="US Navy Logo" /></div>
                            <div className="logo"><img src={ DFMLogo } alt="Digital First Media Logo" /></div>
                            <div className="logo"><img src={ PPLogo } alt="Pioneer Press Logo" /></div>
                            <div className="logo"><img src={ CarsLogo } alt="Cars.com Logo" /></div>
                        </div>
                    </div>
                </section>
            </div>
        );  
    }
}

export default Home;