import React,{Component} from 'react';
import $ from "jquery";
import Headline_child from './headline_child';


class Headlines extends Component{
    constructor(props){
        super(props);
        this.state={
            headlines:[]
        }
    }

componentDidMount(){
    $.ajax({
        type: "get",
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=5e161d0fb95b487da8bf2daced3e729d",
        data:"json",
        success:  (response)=>{
           this.setState({
               headlines:response.articles
           })
        }
    });
}

render(){
    const listed= this.state.headlines.map((val,ind)=>
        <Headline_child key={ind} info={val} />
    )
    
    return(
        <div>
          {listed}
        </div>
    )
}

}

export default Headlines