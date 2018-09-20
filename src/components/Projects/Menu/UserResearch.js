import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArmyTile from './Menu-tiles/ArmyTile';
import KneeboardTile from './Menu-tiles/KneeboardTile';
import SADIIETile from './Menu-tiles/SADIIETile';
import DFMTile from './Menu-tiles/DFMTile';
import FEMATile from './Menu-tiles/FEMATile';


class UserResearch extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                <ul className="case-studies">
                    <li>
                        <FEMATile />
                    </li>
                    <li>
                        <DFMTile />
                    </li>
                    <li>
                        <ArmyTile />
                    </li>
                    <li>
                        <KneeboardTile />
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserResearch;