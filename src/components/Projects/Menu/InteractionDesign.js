import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArmyTile from './Menu-tiles/ArmyTile';
import KneeboardTile from './Menu-tiles/KneeboardTile';
import SADIIETile from './Menu-tiles/SADIIETile';
import IpsosTile from './Menu-tiles/IpsosTile';

class InteractionDesign extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                <ul className="case-studies">
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

export default InteractionDesign;