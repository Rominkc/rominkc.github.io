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
library.add(fab,faFilePdf,faEnvelope);
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar/>
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
