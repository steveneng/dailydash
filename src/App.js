import React, { Component } from 'react';
import Clock from './componenets/clock'
import Weather from './componenets/weather'
import Headlines from './componenets/headlines'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Weather />
        <Headlines />
      </div>
    );
  }
}

export default App;
