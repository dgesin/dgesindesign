import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InteractionDesign from './Menu/InteractionDesign';
import UsabilityTesting from './Menu/UsabilityTesting';
import UserResearch from './Menu/UserResearch';
import DesignWorkshops from './Menu/DesignWorkshops';


class ProjectTabs extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="container">
                <Tabs>
                    <div>
                        <h3>Other Projects</h3>
                        <TabList className="scroll-navigation">
                            <Tab className="link scroll-menu-item">Interaction Design</Tab>
                            <Tab className="link scroll-menu-item">Design Workshops</Tab>
                            <Tab className="link scroll-menu-item">Usability Testing</Tab>
                            <Tab className="link scroll-menu-item">User Research</Tab>
                        </TabList>
                    </div>
                    <div className="projects">
                            <TabPanel>
                                <InteractionDesign /> 
                            </TabPanel>
                            <TabPanel>
                                <DesignWorkshops />
                            </TabPanel>
                            <TabPanel>
                                <UsabilityTesting />
                            </TabPanel>
                            <TabPanel>
                                <UserResearch />
                            </TabPanel>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default ProjectTabs; 