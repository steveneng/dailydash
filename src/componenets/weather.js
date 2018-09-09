import React,{Component} from 'react';
import $ from "jquery";

class Weather extends Component{
   constructor(props){
       super(props);
       this.state={
           temperature:"",
           descriptions:""
       }
       this.getLocation();
   }

    getLocation(){
        let self=this;
        var getPosition = function (options) {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
          }
          
        getPosition()
            .then((position) => {
                let link= "https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=29353e068b18a6d5b8999d7d4aa45b7d&lat="+parseInt(position.coords.latitude)+"&lon="+parseInt(position.coords.longitude)+"&units=imperial"
                $.ajax({
                    type: "get",
                    url: link,
                    success: function (response) {
                        self.setState({
                            temperature:response.main.temp,
                            descriptions:response.weather[0].description
                            
                        })
                    }
                });
            })
            .catch((err) => {
              console.error(err.message);
            });

    }


    render(){
        return(
            <div>
                <h2>Temperature today is: {this.state.temperature}</h2>
                <h3>{this.state.descriptions}</h3>
            </div>
        )
    }
}

export default Weather;