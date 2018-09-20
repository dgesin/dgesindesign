import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DFMLogo from "../../../../assets/logos/dfm.png";
import DFMPhoto from '../../../../assets/test-lab-4.jpg';

class DFMTile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/dfm`} className="cs-link" project="DFM">
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ DFMLogo } alt="USPTO Logo" /></span>
                        <span className="cs-description">Organizing a User Research Lab</span>
                    </span>
                    <span className="cs-photo"><img src={DFMPhoto} className="cs-photo" alt="Digital First Media user research lab" /></span>
                </Link>
            </div>
        );
    }
}

export default DFMTile; 