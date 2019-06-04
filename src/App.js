import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import  NavBar  from './components/CustomNavBar';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import  Home  from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import VideoBackGround from './components/videobackground';
library.add(fab,faFilePdf,faEnvelope);
//source branch acts as "master" branch for git, as master branch is used to host the website build for user pages
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
        <VideoBackGround />
        <Route path ="/" exact component ={Home}/>
        <Route path ="/about" component ={About}/>
        <Route path ="/contact" component ={Contact}/>
        <Route path ="/projects" exact component ={Projects}/>
        </div>
      </Router>
     
    );
  }
}

export default App;
