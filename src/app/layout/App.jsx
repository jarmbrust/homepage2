import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { NavBar } from '../../features/nav/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <h1>homepage</h1>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
