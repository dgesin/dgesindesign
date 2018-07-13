import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import ScrollToTopOnMount from './ScrollToTopOnMount';
import DGLogo from './assets/dg-logo3.png';
import {MdMenu} from 'react-icons/lib/md';
import './App.css';
import './components/Header/Header.css';
import LandingPage from "./components/Home/LandingPage";
import Skills from "./components/Home/Skills";
import Clients from "./components/Home/Clients";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';

class App extends Component {

    state = {
        isHidden: true,
        scrolling: false,
        scrollTop: 0,
        showMenu: false
    }

    showMenu = event => {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = () => {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    };

    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    };

    render() {
        return (
            <div id="mainContainer" ref="container">
                <div className="body">
                    <div className="header">
                        <div className="site-logo">
                            <NavLink to="/"><img src={DGLogo} alt="" />
                            </NavLink>
                        </div>
                        <button onClick={this.showMenu} className={['menu-button', this.state.showMenu && 'menu-open'].join(' ')}><MdMenu /></button>
                        <div className={['mobile-menu', this.state.showMenu && 'menu-open'].join(' ')}>
                            <ul>
                                <li className="menu-item"><NavLink to="/" onClick={this.toggleHidden}>Home</NavLink></li>
                                <li className="menu-item"><NavLink to="/about" onClick={this.toggleHidden}>About</NavLink></li>
                                <li className="menu-item"><NavLink to="/projects" onClick={this.toggleHidden}>Projects</NavLink></li>
                                <li className="menu-item"><NavLink to="/resume" onClick={this.toggleHidden}>Resum&eacute;</NavLink></li>
                                <li className="menu-item"><NavLink to="/contact" onClick={this.toggleHidden}>Contact</NavLink></li>
                            </ul>
                        </div>
                        <ul className="menu" role="fullwidth">
                            <li className="menu-item"><NavLink to="/">Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/about">About</NavLink></li>
                            <li className="menu-item"><NavLink to="/projects">Projects</NavLink></li>
                            <li className="menu-item"><NavLink to="/resume">Resum&eacute;</NavLink></li>
                            <li className="menu-item"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        <ScrollToTopOnMount/>
                            <Route
                                key="landingpage"
                                exact path="/"
                                component={LandingPage}
                                className="router"
                            />
                            <Route key="skills" path="/skills" component={Skills}/>
                            <Route key="clients" path="/clients" component={Clients}/>
                            <Route key="about" path="/about" component={About}/>
                            <Route key="resume" path="/resume" component={Resume}/>
                            <Route key="projects" path="/projects" component={Projects}/>
                            <Route key="contact" path="/contact" component={Contact}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;