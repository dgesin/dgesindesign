import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css';
import LandingPage from './LandingPage';
import Skills from './Skills';
import Clients from './Clients';

const Home = ({ match }) => (
    <div>
        <Route exact path={`${match.url}`} component={LandingPage}/>
        <Route path={`${match.url}`+ "/skills"} component={Skills}/>
        <Route path={`${match.url}`+ "/clients"} component={Clients}/>
    </div>
);

export default Home;