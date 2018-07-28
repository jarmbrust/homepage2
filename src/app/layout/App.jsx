import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import { NavBar } from '../../features/nav/NavBar/NavBar';
import About from '../../features/nav/MainMenu/About';
import Pets from '../../features/nav/MainMenu/Pets';
import Projects from '../../features/nav/MainMenu/Projects';
import HomePage from '../../features/home/HomePage';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route link="/projects" component={Projects} />
            <Route path="/pets" component={Pets} />
            <Route path="/aboutme" component={About} />
            <Route component={HomePage}/>
          </div>
      </div>
    );
  }
}

export default App;
