import React,{Component} from 'react';
import $ from "jquery";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import NewsContent from './card_content'


class Headline_card extends Component{
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
               console.log("second Ajax")
            }
        });
    }

    render(){
        const Media= this.state.headlines;
        let randomArticle=Math.floor(Media.length*Math.random());
        
        const list= this.state.headlines.map((val,ind)=>
        <NewsContent key={ind} media={val} />
    )

        return(
            <div>
                {list[randomArticle]}
            </div>
        )
    }
}

export default Headline_card