import React,{Component} from 'react';
import $ from "jquery";

class Weather extends Component{
   constructor(props){
       super(props);
       this.state={
           temperature:"",
           descriptions:""
       }
   }
    componentDidMount(){
        let self=this;
        $.ajax({
            type: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=29353e068b18a6d5b8999d7d4aa45b7d&zip=10001,us&units=imperial",
            success: function (response) {
                self.setState({
                    temperature:response.main.temp,
                    descriptions:response.weather[0].description
                })
                console.log(response.weather[0].description)
            }
        });
    }

    hotdog(){
        console.log("hot odg")
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