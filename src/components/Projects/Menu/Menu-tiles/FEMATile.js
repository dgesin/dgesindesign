import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MHUPhoto from '../../../../assets/mhus.jpg';
import FEMALogo from "../../../../assets/logos/fema-logo.png";

class FEMATile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/fema`} className="cs-link" project="FEMA">                
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ FEMALogo } alt="FEMA Logo" /></span>
                        <span className="cs-description">Tracking Manufactured Homes</span>
                    </span>
                    <span className="cs-photo"><img src={MHUPhoto} className="cs-photo" alt="Mission planning" /></span>
                </Link>
            </div>
        );
    }
}

export default FEMATile; 