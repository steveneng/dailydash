import React, { Component } from 'react';
import Clock from './componenets/clock';
import Weather from './componenets/weather';
import Headlines from './componenets/headlines';
import './stylesheet.css';
import Headline_card from './componenets/headline_card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <div className="modules">
          <Weather />
          <Headlines />
          <Headline_card />
        </div>
      </div>
    );
  }
}

export default App;
