import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import scrollToComponent from 'react-scroll-to-component';
import BackgroundPhoto from "../../assets/devices.jpg";
import {MdArrowDownward} from 'react-icons/lib/md';
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
import ConDevIcon from "../../assets/icons/concept-dev.svg";
import FrontEndDevIcon from "../../assets/icons/dev.svg";
import PrototypeIcon from "../../assets/icons/prototype.svg";
import UserResearchIcon from "../../assets/icons/user-research.svg";
import UsabilityIcon from "../../assets/icons/usability-test.svg";
import AgileIcon from "../../assets/icons/agile.svg";

const Clients = ({ match }) =>  {
    return(
        <div key="homepage" className="homepage">
            <section className="project-logos">
                <div className="container">
                    <h2>{"Some Groups I've Worked With"}</h2>
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

export default Clients;