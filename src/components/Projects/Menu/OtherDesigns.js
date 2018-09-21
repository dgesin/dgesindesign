import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArmyTile from './Menu-tiles/ArmyTile';
import KneeboardTile from './Menu-tiles/KneeboardTile';
import SADIIETile from './Menu-tiles/SADIIETile';
import DFMTile from './Menu-tiles/DFMTile';
import FEMATile from './Menu-tiles/FEMATile';
import SADIIEExperienceMap from '../../../assets/experience-map.jpg';
import Hackday from '../../../assets/hackday.png';


class OtherDesigns extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                <ul className="case-studies other-designs">
                    <li>
                        <img src={SADIIEExperienceMap} />
                    </li>
                    <li>
                        <img src={Hackday} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default OtherDesigns;