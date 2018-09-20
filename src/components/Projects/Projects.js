import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Projects.css';
import ProjectsLanding from './ProjectsLanding';
import USArmy from './CaseStudies/USArmy';
import FEMA from './CaseStudies/FEMA';
import Ipsos from './CaseStudies/Ipsos';
import SADIIE from './CaseStudies/SADIIE';
import Kneeboard from './CaseStudies/Kneeboard';
import TMNG from './CaseStudies/TMNG';
import DFM from './CaseStudies/DFM';
import InteractionDesign from './Menu/InteractionDesign';
import UsabilityTesting from './Menu/UsabilityTesting';
import UserResearch from './Menu/UserResearch';
import DesignWorkshops from './Menu/DesignWorkshops';
import './CaseStudies/CaseStudy.css';


const Projects = ({ match }) => (
    <div>
        <Route exact path={`${match.url}`} component={ProjectsLanding}/>
        <Route path={`${match.url}`+ "/interaction-design"} component={InteractionDesign}/>
        <Route path={`${match.url}`+ "/design-workshops"} component={DesignWorkshops}/>
        <Route path={`${match.url}`+ "/usability-testing"} component={UsabilityTesting}/>
        <Route path={`${match.url}`+ "/user-research"} component={UserResearch}/>
        <Route path={`${match.url}`+ "/us-army"} component={USArmy}/>
        <Route path={`${match.url}`+ "/fema"} component={FEMA}/>
        <Route path={`${match.url}`+ "/sadiie"} component={SADIIE}/>
        <Route path={`${match.url}`+ "/kneeboard"} component={Kneeboard}/>
        <Route path={`${match.url}`+ "/tmng"} component={TMNG}/>
        <Route path={`${match.url}`+ "/dfm"} component={DFM}/>
    </div>
);

export default Projects;

