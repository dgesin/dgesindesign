import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArmyPhoto from '../../../../assets/mission-planning.jpg';
import ArmyLogo from "../../../../assets/logos/army.png";

class ArmyTile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/us-army`} className="cs-link" project="USArmy">
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ ArmyLogo } alt="US Army Logo" /></span>
                        <span className="cs-description">Mission Planning for the U.S. Army</span>
                    </span>
                    <span className="cs-photo"><img src={ArmyPhoto} alt="Mission planning" /></span>
                </Link>
            </div>
        );
    }
}

export default ArmyTile; 