import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import { NavBar } from '../../features/nav/NavBar/NavBar';
import About from '../../features/nav/MainMenu/About';
import Pets from '../../features/nav/MainMenu/Pets';
import Projects from '../../features/nav/MainMenu/Projects';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/projects" component={Projects} />
            <Route path="/pets" component={Pets} />
            <Route path="/aboutme" component={About} />
          </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
