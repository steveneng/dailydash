import React, { Component } from "react";
import Clock from "./componenets/clock";
import Weather from "./componenets/weather";
import Headlines from "./componenets/headlines";
import "./stylesheet.css";
import Headline_card from "./componenets/headline_card";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <Grid container spacing={24}>
          <Grid item md={3}>
            <Weather />
          </Grid>
          <Grid item md={3}>
            <Headline_card />
          </Grid>
          <Grid item md={6}>
            <Headlines />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
