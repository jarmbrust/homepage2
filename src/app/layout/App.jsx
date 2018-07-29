import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import { NavBar } from '../../features/nav/NavBar/NavBar';
import About from '../../features/nav/MainMenu/About';
import Pets from '../../features/nav/MainMenu/Pets';
import Projects from '../../features/nav/MainMenu/Projects';
import HomePage from '../../features/home/HomePage';
import { Container } from 'semantic-ui-react';
import ErrorPage from '../../features/nav/MainMenu/ErrorPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={Projects} />
          <Route path="/pets" component={Pets} />
          <Route path="/aboutme" component={About} />
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
