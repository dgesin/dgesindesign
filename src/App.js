import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter, 
    Link
} from "react-router-dom";
import DGLogo from './assets/dg-logo.png';
import {MdMenu} from 'react-icons/lib/md';
import './App.css';
import './components/Header/Header.css';
import MainNav from "./components/Header/MainNav"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';

class App extends Component {    
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            isHidden: true
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this); 
    }
    
    showMenu(event) {
        event.preventDefault();
    
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }
    
    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    
    render() {
        return (
            <div id="mainContainer">
                <div className="body">
                    <div className="header">
                        <div className="site-logo">
                            <NavLink to="/"><img src={DGLogo} alt="" />
                            </NavLink>
                        </div>
                        <button onClick={this.showMenu} className={['menu-button', this.state.showMenu && 'menu-open'].join(' ')}><MdMenu /></button>
                        <div className={['mobile-menu', this.state.showMenu && 'menu-open'].join(' ')}>
                            <ul>
                                <li className="menu-item"><NavLink to="/" onClick={this.toggleHidden.bind(this)}>Home</NavLink></li>
                                <li className="menu-item"><NavLink to="/about" onClick={this.toggleHidden.bind(this)}>About</NavLink></li>
                                <li className="menu-item"><NavLink to="/projects" onClick={this.toggleHidden.bind(this)}>Projects</NavLink></li>
                                <li className="menu-item"><NavLink to="/resume" onClick={this.toggleHidden.bind(this)}>Resum&eacute;</NavLink></li>
                                <li className="menu-item"><NavLink to="/contact" onClick={this.toggleHidden.bind(this)}>Contact</NavLink></li>
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
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/resume" component={Skills}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/contact" component={Contact}/>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default App;
