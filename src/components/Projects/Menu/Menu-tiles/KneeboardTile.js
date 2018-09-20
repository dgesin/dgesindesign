import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import KneeboardPhoto from '../../../../assets/kneeboard.jpg';
import NavyLogo from "../../../../assets/logos/us-navy.png";

class KneeboardTile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/kneeboard`} className="cs-link" project="FEMA">
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ NavyLogo } alt="FEMA Logo" /></span>
                        <span className="cs-description">Kneeboard Application for F-18 Pilots</span>
                    </span>
                    <span className="cs-photo"><img src={KneeboardPhoto} className="cs-photo" alt="Mission planning" /></span>
                </Link>
            </div>
        );
    }
}

export default KneeboardTile; 