import React, { Component } from "react";
import $ from "jquery";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Titles from "./titlebar";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      descriptions: "",
      units: "imperial",
      unitMeasurement: "℉"
    };
    this.getLocation();
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    console.log(this.state.units);
    if (this.state.units === "metric") {
      this.setState({
        units: "imperial",
        unitMeasurement: "℉"
      });
    } else {
      this.setState({
        units: "metric",
        unitMeasurement: "℃"
      });
    }
    this.getLocation();
  }

  getLocation() {
    let self = this;
    var getPosition = function(options) {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };

    getPosition()
      .then(position => {
        let link =
          "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=29353e068b18a6d5b8999d7d4aa45b7d&lat=" +
          parseInt(position.coords.latitude) +
          "&lon=" +
          parseInt(position.coords.longitude) +
          "&units=" +
          this.state.units;
        $.ajax({
          type: "get",
          url: link,
          success: function(response) {
            self.setState({
              temperature: response.main.temp,
              descriptions: response.weather[0].description
            });
          }
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    return (
      <Card>
        <Titles title={"Temperature and Weather"} />
        <CardContent>
          <Typography color="textSecondary" variant="headline" component="h2">
            {this.state.temperature} {this.state.unitMeasurement}
          </Typography>
          <Typography component="p">{this.state.descriptions}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.clicked}
            size="small"
          >
            Change Units
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Weather;
