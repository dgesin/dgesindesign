import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IpsosPhoto from '../../../../assets/ad-analytics.jpg';
import IpsosLogo from "../../../../assets/logos/ipsos.png";

class IpsosTile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/ipsos`} className="cs-link" project="Ipsos">
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ IpsosLogo } alt="USPTO Logo" /></span>
                        <span className="cs-description">Testing Advertising Effectiveness</span>
                    </span>
                    <span className="cs-photo"><img src={IpsosPhoto} className="cs-photo" alt="Advertising analytics dashboard" /></span>
                </Link>
            </div>
        );
    }
}

export default IpsosTile; 