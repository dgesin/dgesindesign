import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InteractionDesign from './Menu/InteractionDesign';
import UsabilityTesting from './Menu/UsabilityTesting';
import UserResearch from './Menu/UserResearch';
import DesignWorkshops from './Menu/DesignWorkshops';
import AllProjects from './Menu/AllProjects';


class CSFooter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="container">
                <Tabs>
                    <div>
                        <h3>Other Case Studies</h3>
                    </div>
                    <div className="projects">
                        <AllProjects />
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default CSFooter; 