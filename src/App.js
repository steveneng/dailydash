import React, { Component } from 'react';
import Clock from './componenets/clock'
import Weather from './componenets/weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Weather />
      </div>
    );
  }
}

export default App;
