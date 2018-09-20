import React, { Component, Button } from 'react';
import { Link } from "react-router-dom";



class ProjectMenu extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="projects-description">
                <h1>Projects</h1>
                <p>{"Whether it's building a user testing lab for Digital First Media or exploring natural language processing for the Navy, every project I've worked on has helped me grow as a designer. The following case studies should give you a better feel for what I do."}</p>
                <div className="scroll-navigation vertical">
                    <Button onClick={ SetTabPanel } tab="InteractionDesign" className="link scroll-menu-item">Interaction Designer</Link>
                    <Link to={`projects/design-workshops`} className="link scroll-menu-item">Design Workshops</Link>
                    <Link to={`projects/usability-testing`} className="link scroll-menu-item">Usability Testing</Link>
                    <Link to={`projects/user-research`} className="link scroll-menu-item">User Research</Link>
                </div>
            </div>         
        );
    }    
}

export default ProjectMenu;