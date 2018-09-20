import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SADIIEPhoto from '../../../../assets/navy-ship.jpg';
import NavyLogo from "../../../../assets/logos/us-navy.png";

class SADIIETile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/sadiie`} className="cs-link" project="SADIIE">
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ NavyLogo } alt="FEMA Logo" /></span>
                        <span className="cs-description">Extracting Data for Naval Logistics</span>
                    </span>
                    <span className="cs-photo"><img src={SADIIEPhoto} className="cs-photo" alt="Navy warship" /></span>
                </Link>
            </div>
        );
    }
}

export default SADIIETile; 