import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectsLanding from '../../components/Projects/ProjectsLanding';
import '../../components/Projects/Projects.css';

const ProjectsMenu = ({ match }) => (
    <div className="">
        <Route exact path={`${match.url}`} component={ProjectsLanding}/>
    </div>
);


export default ProjectsMenu;