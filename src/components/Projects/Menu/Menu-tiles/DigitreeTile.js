import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DigitreePhoto from '../../../../assets/old-photos.jpg';
import DigitreeLogo from "../../../../assets/logos/digitree.png";

class DigitreeTile extends Component {


    render(){
        return(
            <div>
                <Link to={`/projects/digitree`} className="cs-link" project="FEMA">                
                    <span className="cs-details">
                        <span className="cs-logo"><img src={ DigitreeLogo } alt="FEMA Logo" /></span>
                        <span className="cs-description">Curating Family Archives</span>
                    </span>
                    <span className="cs-photo"><img src={DigitreePhoto} className="cs-photo" alt="Hand holding two old photos" /></span>
                </Link>
            </div>
        );
    }
}

export default DigitreeTile; 